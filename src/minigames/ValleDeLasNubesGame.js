/**
 * Valle de las Nubes v2 — 80% JUEGO / 20% TEXTO
 * Stack: Three.js + Vite + Vanilla JS (misma interfaz que otros minijuegos)
 * Mantiene textos psicoeducativos validados pero integrados como feedback breve durante el juego
 */
export class ValleDeLasNubesGame {
  constructor({ host, island, player, onComplete, onExit }) {
    this.host = host;
    this.island = island;
    this.player = player;
    this.onComplete = onComplete;
    this.onExit = onExit;
    this.intensidad_inicial = null;
    this.estrategia_utilizada = null;
    this.intensidad_posterior = null;
    this.caja_de_herramientas_emocionales = new Set();
    this.gotas = 0;
    this.puntos = 0;
    this._isReevaluacion = false;
  }

  mount() {
    this.root = document.createElement('div');
    this.root.className = 'valle-nubes';
    this.root.innerHTML = `
      <style>
        .valle-nubes{position:fixed;inset:0;background:radial-gradient(1200px 600px at 50% 18%, #d6ecf5 0%, #88c4d9 42%, #4a6f8a 100%);display:flex;flex-direction:column;overflow:auto;pointer-events:auto;color:#102c36}
        .valle-nubes .vn-shell{max-width:760px;width:min(92vw,760px);margin:18px auto;padding:20px 18px;background:rgba(255,255,255,0.9);border:1px solid rgba(16,44,54,0.12);border-radius:14px;box-shadow:0 18px 48px rgba(16,44,54,0.18);backdrop-filter:blur(10px)}
        .valle-nubes h1{font-size:clamp(1.5rem,4vw,2rem);margin:0}
        .valle-nubes h2{font-size:clamp(1.1rem,3vw,1.4rem);margin:0}
        .valle-nubes .eyebrow{color:rgba(16,44,54,0.6);font-size:0.7rem;font-weight:900;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px}
        .valle-nubes p{margin-top:8px;line-height:1.45;color:rgba(16,44,54,0.84);font-size:0.95rem}
        .valle-nubes .vn-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}
        .valle-nubes .primary-action,.valle-nubes .secondary-action{min-height:42px;padding:0 16px;border-radius:8px;border:0;font-weight:900;cursor:pointer}
        .valle-nubes .primary-action{background:#102c36;color:#fff;box-shadow:0 10px 26px rgba(16,44,54,0.18)}
        .valle-nubes .secondary-action{background:rgba(255,255,255,0.75);border:1px solid rgba(16,44,54,0.14);color:#102c36}
        .valle-nubes .vn-cloud{position:fixed;left:50%;top:16%;width:320px;height:140px;transform:translateX(-50%);background:radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.95) 0%, rgba(230,240,248,0.85) 60%, transparent 75%);border-radius:50%;pointer-events:none;transition:all 500ms ease;opacity:0.5}
        .valle-nubes[data-intensity="baja"] .vn-cloud{width:240px;height:100px;opacity:0.38}
        .valle-nubes[data-intensity="media"] .vn-cloud{width:500px;height:190px;opacity:0.68}
        .valle-nubes[data-intensity="alta"] .vn-cloud{width:760px;height:300px;opacity:0.86;background:radial-gradient(ellipse at 50% 40%, rgba(245,245,250,0.98) 0%, rgba(200,210,225,0.9) 55%, transparent 78%)}
        .valle-nubes[data-intensity="alta"]{background:radial-gradient(1000px 500px at 50% 16%, #b8d2de 0%, #6a8fa3 40%, #2f4150 100%)}
        .valle-nubes .vn-dark{position:fixed;inset:0;background:rgba(10,25,35,0);pointer-events:none;transition:background 500ms}
        .valle-nubes[data-intensity="media"] .vn-dark{background:rgba(10,25,35,0.1)}
        .valle-nubes[data-intensity="alta"] .vn-dark{background:rgba(10,25,35,0.26)}
        .valle-nubes .vn-gamezone{position:relative;min-height:240px;margin-top:12px;padding:12px;border:1px dashed rgba(16,44,54,0.18);border-radius:10px;background:rgba(255,255,255,0.62);overflow:hidden}
        .valle-nubes .vn-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:12px;perspective:800px}
        .valle-nubes .char{height:118px;display:grid;place-items:center;border-radius:14px;background:linear-gradient(180deg, #ffffff 0%, #eef6fb 100%);border:1px solid rgba(16,44,54,0.14);border-bottom:5px solid rgba(16,44,54,0.18);cursor:pointer;font-size:42px;animation:floaty 2.4s ease-in-out infinite;box-shadow:0 12px 22px rgba(16,44,54,0.14), 0 4px 10px rgba(16,44,54,0.08);transform:rotateX(6deg);transform-style:preserve-3d;transition:transform 160ms, box-shadow 160ms}
        .valle-nubes .char:nth-child(2){animation-delay:0.3s}.valle-nubes .char:nth-child(3){animation-delay:0.6s}.valle-nubes .char:nth-child(4){animation-delay:0.9s}
        @keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        .valle-nubes .char:hover{transform:rotateX(4deg) translateY(-4px);box-shadow:0 16px 28px rgba(16,44,54,0.18), 0 6px 12px rgba(16,44,54,0.1)}
        .valle-nubes .char:active{transform:rotateX(8deg) translateY(2px) scale(0.98);border-bottom-width:2px}
        .valle-nubes .char.correct{outline:3px solid #72c264;box-shadow:0 0 18px rgba(114,194,100,0.55), 0 14px 24px rgba(114,194,100,0.25);transform:rotateX(2deg) scale(1.02)}
        .valle-nubes .char.wrong{outline:3px solid #e76856;opacity:0.72;transform:rotateX(10deg) scale(0.96)}
        .valle-nubes .falling{position:absolute;width:42px;height:42px;display:grid;place-items:center;border-radius:10px;background:rgba(255,255,255,0.9);border:1px solid rgba(16,44,54,0.12);cursor:pointer;user-select:none}
        .valle-nubes .falling.good{box-shadow:0 4px 12px rgba(49,120,168,0.25)}
        .valle-nubes .falling.bad{background:rgba(230,230,230,0.9)}
        .valle-nubes .vn-intensity3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:10px}
        .valle-nubes .intensity-btn{padding:10px;border-radius:10px;border:1px solid rgba(16,44,54,0.14);background:rgba(255,255,255,0.78);cursor:pointer;text-align:center}
        .valle-nubes .intensity-btn.selected{border-color:#102c36;box-shadow:0 6px 18px rgba(16,44,54,0.15);transform:translateY(-2px)}
        .valle-nubes .intensity-btn strong{display:block;font-size:0.95rem}
        .valle-nubes .intensity-btn span{font-size:0.72rem;opacity:0.7}
        .valle-nubes .vn-strategies{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
        .valle-nubes .vn-strat{padding:14px;border:1px solid rgba(16,44,54,0.12);border-radius:10px;background:rgba(255,255,255,0.78);cursor:pointer;text-align:left}
        .valle-nubes .vn-strat.recommended{border-color:#72c264;box-shadow:0 6px 18px rgba(114,194,100,0.18)}
        .valle-nubes .vn-badge{display:inline-block;padding:3px 7px;border-radius:20px;background:#102c36;color:#fff;font-size:0.65rem;font-weight:900}
        .valle-nubes .vn-inventory{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
        .valle-nubes .vn-tool{padding:6px 8px;border-radius:20px;background:rgba(49,120,168,0.12);border:1px solid rgba(49,120,168,0.2);font-size:0.72rem;font-weight:800}
        .valle-nubes .icon-button{width:36px;height:36px;display:grid;place-items:center;border:1px solid rgba(16,44,54,0.14);border-radius:8px;background:rgba(255,255,255,0.8);cursor:pointer}
        .valle-nubes .star{position:absolute;width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:rgba(255,220,80,0.35);border:1px solid rgba(255,200,50,0.5);cursor:pointer}
        .valle-nubes .vn-choice{padding:10px;border:1px solid rgba(16,44,54,0.12);border-radius:8px;background:rgba(255,255,255,0.78);cursor:pointer;margin-top:8px;text-align:left}
        .valle-nubes .vn-choice.correct{border-color:#72c264;background:rgba(114,194,100,0.15)}
        .valle-nubes .vn-choice.wrong{border-color:#e76856;background:rgba(231,104,86,0.12)}
        @media(max-width:720px){.valle-nubes .vn-grid,.valle-nubes .vn-strategies,.valle-nubes .vn-intensity3{grid-template-columns:1fr 1fr}}
      </style>
      <div class="vn-cloud"></div><div class="vn-dark"></div>
      <div style="position:sticky;top:0;z-index:5;max-width:760px;width:min(92vw,760px);margin:10px auto 0;display:flex;justify-content:space-between;align-items:center">
        <div class="eyebrow" style="margin:0">Valle de las Nubes · Tristeza</div>
        <button class="icon-button" type="button" data-exit>✕</button>
      </div>
      <div class="vn-shell" data-shell></div>
    `;
    this.host.appendChild(this.root);
    this.shell = this.root.querySelector('[data-shell]');
    this.root.querySelector('[data-exit]').addEventListener('click', () => this.onExit());
    this.showIntro();
  }

  dispose(){ this._stopFalling = true; this.root?.remove(); }
  setAtmosphere(n){ if(!n) this.root.removeAttribute('data-intensity'); else this.root.setAttribute('data-intensity', n); }
  addTool(t){ this.caja_de_herramientas_emocionales.add(t); }
  inventoryHTML(){ if(this.caja_de_herramientas_emocionales.size===0) return ''; const m={'Cristal de perspectiva':'💎 Cristal','Semilla de aceptación':'🌱 Semilla','Herramienta de acción':'🧰 Herramienta','Estrella de atención':'⭐ Estrella','Corazón de apoyo':'💚 Corazón','Gota de comprensión':'💧 Gota'}; return `<div class="vn-inventory">${[...this.caja_de_herramientas_emocionales].map(t=>`<span class="vn-tool">${m[t]??t}</span>`).join('')}</div>`; }

  // 1. INTRO corta
  showIntro(){
    this.setAtmosphere(null);
    this.shell.innerHTML = `
      <h1>BIENVENIDO AL VALLE DE LAS NUBES</h1>
      <p>La tristeza aparece ante pérdidas o cambios. Atraviesa el valle jugando.</p>
      <div class="vn-gamezone" style="min-height:90px;display:grid;place-items:center;background:transparent;border:0">
        <div style="font-size:48px;animation:floaty 2s infinite">☁️</div>
      </div>
      <div class="vn-actions"><button class="primary-action" data-go>COMENZAR</button></div>
    `;
    this.shell.querySelector('[data-go]').addEventListener('click', ()=>this.showEtapa1());
  }

  // 2. ETAPA 1 — JUEGO: encuentra al triste
  showEtapa1(){
    this.shell.innerHTML = `
      <p class="eyebrow">Etapa 1 · Juega</p>
      <h2>¿Quién siente tristeza?</h2>
      <p style="font-size:0.85rem;opacity:0.7">Toca al personaje triste entre los 4.</p>
      <div class="vn-grid" data-grid>
        ${[
          { e:'😀', ok:false }, { e:'😔', ok:true }, { e:'😠', ok:false }, { e:'😨', ok:false }
        ].sort(()=>Math.random()-0.5).map(c=>`<button class="char" data-ok="${c.ok}">${c.e}</button>`).join('')}
      </div>
    `;
    this.shell.querySelectorAll('.char').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const ok = btn.dataset.ok==='true';
        btn.classList.add(ok?'correct':'wrong');
        if(ok){ this.gotas++; this.addTool('Gota de comprensión'); }
        setTimeout(()=>{
          if(ok){
            this.shell.innerHTML = `
              <h2>¡CORRECTO!</h2>
              <p>La tristeza puede aparecer ante situaciones que percibimos como pérdidas, separaciones, decepciones o cambios importantes.</p>
              <p><span class="vn-badge">+ Gota de comprensión</span></p>
              ${this.inventoryHTML()}
              <div class="vn-actions"><button class="primary-action" data-next>Atravesar →</button></div>
            `;
            this.shell.querySelector('[data-next]').addEventListener('click', ()=>this.showEtapa2());
          } else {
            this.shell.innerHTML = `
              <h2>No es esa emoción</h2>
              <p>Intenta de nuevo — observa la postura y la expresión.</p>
              <div class="vn-actions"><button class="primary-action" data-retry>🔄 Volver a intentar</button></div>
            `;
            this.shell.querySelector('[data-retry]').addEventListener('click', ()=>this.showEtapa1());
          }
        }, 450);
      }, {once:true});
    });
  }

  // 3. ETAPA 2 — JUEGO: atrapa 6 señales
  showEtapa2(){
    this.shell.innerHTML = `
      <p class="eyebrow">Etapa 2 · El Espejo Emocional — Juego</p>
      <h2>Atrapa las señales de tristeza</h2>
      <p style="font-size:0.85rem;opacity:0.7">La tristeza puede manifestarse de diferentes maneras. Atrapa 6. Evita las que no son.</p>
      <div class="vn-gamezone" data-zone style="height:260px"></div>
      <p style="font-size:0.85rem">Progreso: <strong data-count>0</strong>/6 · Tiempo: <strong data-time>20</strong>s</p>
    `;
    const zone = this.shell.querySelector('[data-zone]');
    const countEl = this.shell.querySelector('[data-count]');
    const timeEl = this.shell.querySelector('[data-time]');
    let collected = 0, t=20, running=true;
    const sadIcons = ['😢','🧍','🚪','🍽️','😮‍💨','👀'];
    const badIcons = ['😂','⚡'];
    const spawn = ()=>{
      if(!running) return;
      const isGood = Math.random()<0.75;
      const icon = isGood ? sadIcons[Math.floor(Math.random()*sadIcons.length)] : badIcons[Math.floor(Math.random()*badIcons.length)];
      const el = document.createElement('button');
      el.className = `falling ${isGood?'good':'bad'}`;
      el.textContent = icon;
      el.dataset.good = String(isGood);
      el.style.left = `${5+Math.random()*80}%`;
      el.style.top = `-40px`;
      zone.appendChild(el);
      let y = -40, speed = 1.2 + Math.random()*1.2;
      const iv = setInterval(()=>{
        if(!running || !el.isConnected){ clearInterval(iv); return; }
        y += speed;
        el.style.top = `${y}px`;
        if(y>260){ clearInterval(iv); el.remove(); }
      }, 16);
      el.addEventListener('click', ()=>{
        clearInterval(iv);
        if(el.dataset.good==='true'){ collected++; countEl.textContent=String(collected); el.style.transform='scale(1.3)'; el.style.opacity='0'; setTimeout(()=>el.remove(),180); if(collected>=6){ win(); } }
        else { el.style.borderColor='#e76856'; setTimeout(()=>el.remove(),200); }
      });
    };
    const spawner = setInterval(spawn, 450);
    const timer = setInterval(()=>{
      t--; timeEl.textContent=String(t);
      if(t<=0){ clearInterval(timer); clearInterval(spawner); if(collected<6) fail(); }
    }, 1000);
    const win = ()=>{
      running=false; clearInterval(timer); clearInterval(spawner);
      this.puntos+=5;
      this.shell.innerHTML = `
        <h2>¡Bien observado!</h2>
        <p>Has aprendido a reconocer algunas manifestaciones asociadas a la tristeza.</p>
        <p><span class="vn-badge">+ 5 puntos</span> · Atraviesas el espejo</p>
        ${this.inventoryHTML()}
        <div class="vn-actions"><button class="primary-action" data-next>Atravesar →</button></div>
      `;
      this.shell.querySelector('[data-next]').addEventListener('click', ()=>this.showIntensity(false));
    };
    const fail = ()=>{
      running=false; clearInterval(timer); clearInterval(spawner);
      this.shell.innerHTML = `
        <h2>Te faltaron señales</h2>
        <p>Necesitas atrapar 6 para atravesar el espejo. Atrapaste ${collected}.</p>
        <p>Inténtalo de nuevo — concéntrate en las señales de tristeza.</p>
        <div class="vn-actions"><button class="primary-action" data-retry>🔄 Volver a intentar</button></div>
      `;
      this.shell.querySelector('[data-retry]').addEventListener('click', ()=>this.showEtapa2());
    };
    spawn();
  }

  // 4. INTENSIDAD — slider visual
  showIntensity(isReeval){
    this._isReeval=isReeval;
    this.shell.innerHTML = `
      <p class="eyebrow">${isReeval?'¿CÓMO ESTÁ AHORA TU TRISTEZA?':'¿QUÉ TAN INTENSA ESTÁ TU TRISTEZA?'}</p>
      <h2>Elige tu nube</h2>
      <p style="font-size:0.85rem;opacity:0.7">${isReeval?'Vuelve a elegir.':'No hay respuesta correcta.'} La nube crece con la intensidad.</p>
      <div class="vn-intensity3">
        <button class="intensity-btn" data-nivel="baja"><strong>BAJA</strong><span>Siento tristeza, pero puedo continuar con mis actividades.</span></button>
        <button class="intensity-btn" data-nivel="media"><strong>MEDIA</strong><span>La tristeza ocupa bastante espacio y comienza a afectar lo que estoy haciendo.</span></button>
        <button class="intensity-btn" data-nivel="alta"><strong>ALTA</strong><span>La tristeza es muy intensa y necesito detenerme para afrontar lo que estoy sintiendo.</span></button>
      </div>
    `;
    this.shell.querySelectorAll('[data-nivel]').forEach(btn=>{
      btn.addEventListener('mouseenter', ()=>this.setAtmosphere(btn.dataset.nivel));
      btn.addEventListener('click', ()=>this.handleIntensity(btn.dataset.nivel));
    });
  }

  handleIntensity(nivel){
    this.setAtmosphere(nivel);
    if(!this._isReeval){
      this.intensidad_inicial=nivel;
      this.shell.innerHTML = `
        <h2>Intensidad: ${nivel.toUpperCase()}</h2>
        <p>Has identificado la intensidad de tu emoción. Ahora puedes elegir una estrategia para afrontarla.</p>
        ${this.inventoryHTML()}
        <div class="vn-actions"><button class="primary-action" data-next>Ver estrategias</button></div>
      `;
      this.shell.querySelector('[data-next]').addEventListener('click', ()=>this.showStrategies());
    } else {
      this.intensidad_posterior=nivel;
      this.showFeedback();
    }
  }

  getStrats(nivel){
    const m={
      baja:[{id:'reevaluacion',n:'Reevaluación',d:'Cambia la perspectiva',i:'💭',rec:true},{id:'atencional',n:'Atencional',d:'Dirige tu atención',i:'⭐',rec:false}],
      media:[{id:'aceptacion',n:'Aceptación',d:'Reconoce lo que sientes',i:'🌱',rec:true},{id:'solucion',n:'Solución',d:'Encuentra una salida',i:'🧰',rec:false}],
      alta:[{id:'aceptacion',n:'Aceptación',d:'Reconoce lo que sientes',i:'🌱',rec:true},{id:'reevaluacion',n:'Reevaluación',d:'Cambia la perspectiva',i:'💭',rec:false},{id:'apoyo',n:'Apoyo',d:'No tienes que hacerlo solo',i:'💚',rec:false}]
    };
    return m[nivel]??[];
  }

  showStrategies(){
    const nivel=this.intensidad_inicial;
    const strats=this.getStrats(nivel);
    this.shell.innerHTML = `
      <p class="eyebrow">Estrategias · ${nivel.toUpperCase()}</p>
      <h2>Elige cómo jugar</h2>
      <div class="vn-strategies">
        ${strats.map(s=>`<button class="vn-strat ${s.rec?'recommended':''}" data-id="${s.id}"><div style="font-size:28px">${s.i}</div><strong>${s.n}</strong> ${s.rec?'<span class="vn-badge">Recomendada</span>':''}<p style="margin-top:4px;font-size:0.85rem;opacity:0.75">${s.d}</p></button>`).join('')}
      </div>
      ${this.inventoryHTML()}
    `;
    this.shell.querySelectorAll('[data-id]').forEach(b=>b.addEventListener('click', ()=>this.handleStrat(b.dataset.id)));
  }

  handleStrat(id){
    const strats=this.getStrats(this.intensidad_inicial);
    const chosen=strats.find(s=>s.id===id);
    if(!chosen.rec){
      this.shell.innerHTML = `
        <h2>${chosen.n}</h2>
        <p>Esta estrategia también puede utilizarse.</p>
        <p style="font-size:0.85rem;opacity:0.7">De acuerdo con la intensidad que identificaste, otra estrategia podría ayudarte en este momento. Puedes continuar o ver otras.</p>
        <div class="vn-actions"><button class="primary-action" data-go>CONTINUAR CON ESTA ESTRATEGIA</button><button class="secondary-action" data-back>VER OTRAS ESTRATEGIAS</button></div>
      `;
      this.shell.querySelector('[data-go]').addEventListener('click', ()=>this.launch(id));
      this.shell.querySelector('[data-back]').addEventListener('click', ()=>this.showStrategies());
    } else this.launch(id);
  }

  launch(id){ this.estrategia_utilizada=id; if(id==='reevaluacion')this.gameReevaluacion(); else if(id==='atencional')this.gameAtencional(); else if(id==='aceptacion')this.gameAceptacion(); else if(id==='solucion')this.gameSolucion(); else if(id==='apoyo')this.gameApoyo(); }

  // 6.1 Reevaluación — juego 1 clic
  gameReevaluacion(){
    const sit='Plan importante cancelado.';
    const opts=[
      {t:'Todo siempre me sale mal.', ok:false},
      {t:'Es difícil, pero los planes cambian. Puedo ver qué hacer ahora.', ok:true},
      {t:'No me importa.', ok:false}
    ];
    this.shell.innerHTML = `
      <p class="eyebrow">Cambia la perspectiva — Toca la idea equilibrada</p>
      <h2>${sit}</h2>
      ${opts.map((o,i)=>`<button class="vn-choice" data-i="${i}">💭 ${o.t}</button>`).join('')}
    `;
    this.shell.querySelectorAll('[data-i]').forEach(b=>b.addEventListener('click', ()=>{
      const ok=opts[Number(b.dataset.i)].ok;
      b.classList.add(ok?'correct':'wrong');
      setTimeout(()=>{
        if(ok){
          const alta=this.intensidad_inicial==='alta';
          const msg=alta?'Puedes reconocer el dolor de una situación sin asumir que todo está perdido.':'Has encontrado una nueva perspectiva.<br>Puedes reconocer que una situación es difícil sin asumir que todo está perdido.';
          this.addTool('Cristal de perspectiva');
          this.shell.innerHTML=`<h2>¡Equilibrado!</h2><p>${msg}</p><p><span class="vn-badge">+ Cristal de perspectiva</span></p>${this.inventoryHTML()}<div class="vn-actions"><button class="primary-action" data-next>Atravesar →</button></div>`;
          this.shell.querySelector('[data-next]').addEventListener('click', ()=>this.showIntensity(true));
        } else {
          this.shell.innerHTML=`<h2>Esa idea no ayuda a sentirte mejor</h2><p>Inténtalo de nuevo — busca una interpretación que reconozca la dificultad sin asumir que todo está perdido.</p><div class="vn-actions"><button class="primary-action" data-retry>🔄 Volver a intentar</button></div>`;
          this.shell.querySelector('[data-retry]').addEventListener('click', ()=>this.gameReevaluacion());
        }
      }, 350);
    }));
  }

  // 6.2 Atencional — sigue estrella 5 veces
  gameAtencional(){
    this.shell.innerHTML = `
      <p class="eyebrow">Dirige tu atención</p>
      <h2>Toca la estrella 5 veces</h2>
      <div class="vn-gamezone" data-zone style="height:260px"></div>
      <p style="font-size:0.85rem">Progreso: <strong data-p>0</strong>/5</p>
    `;
    const zone=this.shell.querySelector('[data-zone]');
    const pEl=this.shell.querySelector('[data-p]');
    let c=0; let star=null;
    const place=()=>{
      if(star) star.remove();
      star=document.createElement('button'); star.className='star'; star.textContent='⭐';
      star.style.left=`${8+Math.random()*78}%`; star.style.top=`${8+Math.random()*68}%`;
      star.addEventListener('click',()=>{
        c++; pEl.textContent=String(c);
        if(c>=5){
          this.addTool('Estrella de atención');
          this.shell.innerHTML=`<h2>¡Atención dirigida!</h2><p>Cambiar temporalmente el foco de atención puede ayudarte a disminuir el espacio que ocupa una emoción desagradable y continuar con la actividad.</p><p><span class="vn-badge">+ Estrella de atención</span></p>${this.inventoryHTML()}<div class="vn-actions"><button class="primary-action" data-next>Continuar</button></div>`;
          this.shell.querySelector('[data-next]').addEventListener('click', ()=>this.showIntensity(true));
        } else place();
      });
      zone.appendChild(star);
    };
    place();
  }

  // 6.3 Aceptación — 3 taps
  gameAceptacion(){
    const pasos=[
      {t:'RECONOCER', d:'Estoy sintiendo tristeza.'},
      {t:'COMPRENDER', d:'Esta emoción apareció porque ocurrió algo importante para mí.'},
      {t:'ACEPTAR', d:'Puedo sentir tristeza sin juzgarme por sentirla.'}
    ];
    let i=0;
    const render=()=>{
      const s=pasos[i];
      this.shell.innerHTML=`<p class="eyebrow">Reconoce lo que sientes (${i+1}/3)</p><h2>${s.t}</h2><p style="font-size:1.05rem;font-weight:800;border-left:4px solid #3178a8;padding-left:10px">${s.d}</p><div class="vn-gamezone" style="min-height:80px;display:grid;place-items:center"><button class="primary-action" data-next>${i===2?'Completar':'Tocar para sentir'}</button></div>`;
      this.shell.querySelector('[data-next]').addEventListener('click',()=>{
        i++;
        if(i<pasos.length) render();
        else {
          this.addTool('Semilla de aceptación');
          if(this.intensidad_inicial==='alta') this.setAtmosphere('media');
          this.shell.innerHTML=`<h2>Reconociste lo que sientes</h2><p>Aceptar una emoción no significa eliminarla ni estar de acuerdo con lo ocurrido.</p><p>Significa reconocer que está presente sin juzgarla ni intentar rechazarla inmediatamente.</p>${this.intensidad_inicial==='alta'?'<p><em>Reconocer lo que sientes puede ser un primer paso para comenzar a afrontarlo.</em></p>':''}<p><span class="vn-badge">+ Semilla de aceptación</span></p>${this.inventoryHTML()}<div class="vn-actions"><button class="primary-action" data-next>Continuar</button></div>`;
          this.shell.querySelector('[data-next]').addEventListener('click', ()=>this.showIntensity(true));
        }
      });
    };
    render();
  }

  // 6.4 Solución — 4 pasos rápidos con juego final
  gameSolucion(){
    let step=0, elegida='';
    const alts=['Hablar con alguien de confianza','Revisar qué mejorar la próxima vez'];
    const render=()=>{
      if(step===0){
        this.shell.innerHTML=`<p class="eyebrow">Encuentra una salida (1/4)</p><h2>IDENTIFICAR EL PROBLEMA</h2><button class="vn-choice" data-v>Perdí una oportunidad importante</button>`;
        this.shell.querySelector('[data-v]').addEventListener('click', ()=>{step=1;render();});
      } else if(step===1){
        this.shell.innerHTML=`<p class="eyebrow">2/4 · GENERAR ALTERNATIVAS</p><h2>Toca 2 ideas</h2>${alts.map((t,i)=>`<button class="vn-choice" data-i="${i}">${t}</button>`).join('')}<button class="vn-choice" style="opacity:0.5" data-i="2">Culparme todo el día</button><div class="vn-actions"><button class="primary-action" data-next disabled>Continuar</button></div>`;
        const chosen=new Set(); this.shell.querySelectorAll('[data-i]').forEach(b=>b.addEventListener('click',()=>{
          const idx=Number(b.dataset.i); if(idx===2){b.style.borderColor='#e76856';return;} if(chosen.has(idx)){chosen.delete(idx);b.classList.remove('correct')} else if(chosen.size<2){chosen.add(idx);b.classList.add('correct')}
          this.shell.querySelector('[data-next]').disabled=chosen.size!==2;
        }));
        this.shell.querySelector('[data-next]').addEventListener('click', ()=>{if(chosen.size===2){step=2;render();}});
      } else if(step===2){
        this.shell.innerHTML=`<p class="eyebrow">3/4 · ELEGIR</p><h2>Elige una</h2>${alts.map((t,i)=>`<button class="vn-choice" data-i="${i}">${t}</button>`).join('')}`;
        this.shell.querySelectorAll('[data-i]').forEach(b=>b.addEventListener('click',()=>{elegida=b.textContent;step=3;render();}));
      } else {
        this.shell.innerHTML=`<p class="eyebrow">4/4 · ACTUAR</p><h2>${elegida}</h2><p>Toca para actuar.</p><div class="vn-gamezone" data-act style="display:grid;place-items:center;font-size:48px;cursor:pointer">🌱</div>`;
        this.shell.querySelector('[data-act]').addEventListener('click',()=>{
          this.addTool('Herramienta de acción');
          this.shell.innerHTML=`<h2>¡Acción realizada!</h2><p>Cuando existe algo que podemos modificar, identificar alternativas y actuar puede ayudarnos a afrontar la situación.</p><p><span class="vn-badge">+ Herramienta de acción</span></p>${this.inventoryHTML()}<div class="vn-actions"><button class="primary-action" data-next>Continuar</button></div>`;
          this.shell.querySelector('[data-next]').addEventListener('click', ()=>this.showIntensity(true));
        });
      }
    };
    render();
  }

  // 6.5 Apoyo — toca persona
  gameApoyo(){
    this.shell.innerHTML=`
      <p class="eyebrow">No tienes que hacerlo solo</p>
      <h2>Toca a la persona de confianza</h2>
      <div class="vn-grid" style="grid-template-columns:repeat(3,1fr);gap:8px">
        <button class="char" data-ok="false">🧑‍🏫</button>
        <button class="char" data-ok="true">🧑‍🤝‍🧑</button>
        <button class="char" data-ok="false">😐</button>
      </div>
    `;
    this.shell.querySelectorAll('.char').forEach(b=>b.addEventListener('click',()=>{
      if(b.dataset.ok!=='true'){b.classList.add('wrong');return;}
      this.shell.innerHTML=`
        <h2>¿Quieres contarme qué ocurrió?</h2>
        <button class="vn-choice" data-i="0">Me siento triste porque perdí algo importante y quiero hablar.</button>
        <button class="vn-choice" data-i="1">No me pasa nada.</button>
      `;
      this.shell.querySelectorAll('[data-i]').forEach(c=>c.addEventListener('click',()=>{
        const ok=c.dataset.i==='0'; c.classList.add(ok?'correct':'wrong');
        setTimeout(()=>{
          if(ok){
            this.addTool('Corazón de apoyo');
            this.shell.innerHTML=`<h2>Gracias por compartir</h2><p>Buscar apoyo puede ayudarte a expresar lo que sientes y afrontar situaciones difíciles.</p><p><span class="vn-badge">+ Corazón de apoyo</span></p>${this.inventoryHTML()}<div class="vn-actions"><button class="primary-action" data-next>Atravesar →</button></div>`;
            this.shell.querySelector('[data-next]').addEventListener('click', ()=>this.showIntensity(true));
          } else {
            this.shell.innerHTML=`<h2>Inténtalo de nuevo</h2><p>Expresar lo que sientes con honestidad ayuda más que ocultarlo.</p><div class="vn-actions"><button class="primary-action" data-retry>🔄 Volver a intentar</button></div>`;
            this.shell.querySelector('[data-retry]').addEventListener('click', ()=>this.gameApoyo());
          }
        },300);
      }));
    }));
  }

  // Feedback
  showFeedback(){
    const o={baja:0,media:1,alta:2};
    const ini=o[this.intensidad_inicial], post=o[this.intensidad_posterior];
    let estado='igual'; if(post<ini) estado='disminuye'; else if(post>ini) estado='aumenta';
    if(estado==='disminuye'){
      this.setAtmosphere(this.intensidad_posterior);
      this.shell.innerHTML=`<h2>La intensidad de tu tristeza disminuyó.</h2><p>Has practicado una estrategia que puede ayudarte a afrontar esta situación.</p>${this.inventoryHTML()}<div class="vn-actions"><button class="primary-action" data-go>Atravesar la nube</button></div>`;
      this.shell.querySelector('[data-go]').addEventListener('click', ()=>this.showFinal());
    } else if(estado==='igual'){
      this.shell.innerHTML=`<h2>La tristeza continúa presente.</h2><p>Una estrategia no siempre cambia inmediatamente la intensidad de una emoción.</p><p>Puedes practicar nuevamente o probar otra estrategia.</p><div class="vn-actions"><button class="primary-action" data-retry>PRACTICAR NUEVAMENTE</button><button class="secondary-action" data-otra>ELEGIR OTRA ESTRATEGIA</button></div>`;
      this.shell.querySelector('[data-retry]').addEventListener('click', ()=>this.launch(this.estrategia_utilizada));
      this.shell.querySelector('[data-otra]').addEventListener('click', ()=>this.showStrategies());
    } else {
      this.shell.innerHTML=`<h2>La emoción continúa siendo intensa.</h2><p>Haz una pausa, reconoce lo que estás sintiendo y considera buscar apoyo de una persona de confianza.</p><div class="vn-actions"><button class="primary-action" data-apoyo>BUSCAR APOYO EN ALGUIEN CERCANO O UN PROFESIONAL</button></div>`;
      this.shell.querySelector('[data-apoyo]').addEventListener('click', ()=>this.gameApoyo());
    }
  }

  showFinal(){
    this.shell.innerHTML=`
      <p class="eyebrow">Desafío final</p>
      <h2>La tristeza no tiene que desaparecer para que puedas continuar.</h2>
      <p>Utiliza lo que aprendiste para atravesar la nube.</p>
      <div class="vn-gamezone" data-zone style="height:200px;display:grid;place-items:center">
        <div style="font-size:64px;transition:all 400ms" data-cloud>☁️</div>
        <button class="primary-action" data-go>Atravesar con ${[...this.caja_de_herramientas_emocionales][0]??'Aceptación'}</button>
      </div>
      <p style="font-size:0.8rem;opacity:0.6">Toca 3 veces para disipar.</p>
    `;
    let p=0; const cloud=this.shell.querySelector('[data-cloud]');
    this.shell.querySelector('[data-go]').addEventListener('click', (e)=>{
      const btn=e.currentTarget; p++; cloud.style.transform=`scale(${1-p*0.2})`; cloud.style.opacity=String(1-p*0.3); this.setAtmosphere(p>=2?'media':'baja');
      if(p>=3){
        this.shell.innerHTML=`<h2>¡Nube atravesada!</h2><p>La nube disminuye, aparece luz y se desbloquea el camino.</p>${this.inventoryHTML()}<div class="vn-actions"><button class="primary-action" data-end>Cierre</button></div>`;
        this.shell.querySelector('[data-end]').addEventListener('click', ()=>this.showCierre());
      } else { btn.textContent=`Atravesar (${p}/3)`; }
    });
  }

  showCierre(){
    this.shell.innerHTML=`
      <h1>¡HAS COMPLETADO EL VALLE DE LAS NUBES!</h1>
      <p>La tristeza es una emoción que puede aparecer ante pérdidas, separaciones, decepciones, rechazos o cambios significativos.</p>
      <p>Reconocer qué estás sintiendo y qué tan intensa es la emoción puede ayudarte a decidir cómo afrontarla.</p>
      <p>Existen diferentes estrategias. Aprender a utilizarlas de manera flexible puede ayudarte a afrontar diferentes situaciones.</p>
      <p><strong>Recuerda: regular una emoción no significa eliminarla. Significa aprender a reconocerla y encontrar maneras adecuadas de afrontarla.</strong></p>
      ${this.inventoryHTML()}
      <p><span class="vn-badge">Insignia: GUARDIÁN DE LA TRISTEZA</span></p>
      <div class="vn-actions"><button class="primary-action" data-fin>CONTINUAR A LA SIGUIENTE ISLA</button></div>
    `;
    this.shell.querySelector('[data-fin]').addEventListener('click', ()=>{
      this.onComplete({success:true,score:this.puntos+this.gotas,target:5,islandId:this.island.id,title:'Valle de las Nubes',message:'Has completado el Valle de las Nubes. La tristeza no desaparece, pero ahora tienes herramientas para afrontarla.'});
    });
  }
}
