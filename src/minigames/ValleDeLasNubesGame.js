/**
 * Valle de las Nubes — ISLA COMPLETA estructurada en 4 pasos literales
 * 1. IDENTIFICAR EL PROBLEMA — Reconocer qué está generando la dificultad.
 * 2. GENERAR ALTERNATIVAS — Pensar diferentes formas de afrontar la situación.
 * 3. ELEGIR UNA ALTERNATIVA — Seleccionar una opción posible y adecuada.
 * 4. ACTUAR — Poner en práctica la alternativa seleccionada mediante una interacción dentro del escenario.
 * Final: Cuando existe algo que podemos modificar, identificar alternativas y actuar puede ayudarnos a afrontar la situación.
 * 80% juego, sin dejar pasar si falla.
 */
export class ValleDeLasNubesGame {
  constructor({ host, island, player, onComplete, onExit }) {
    this.host = host; this.island = island; this.player = player;
    this.onComplete = onComplete; this.onExit = onExit;
    this.intensidad_inicial = null;
    this.estrategia_utilizada = null;
    this.intensidad_posterior = null;
    this.caja = new Set();
    this.gotas = 0; this.puntos = 0;
  }
  mount(){
    this.root=document.createElement('div');
    this.root.className='valle-nubes';
    this.root.innerHTML=`
      <style>
        .valle-nubes{position:fixed;inset:0;background:radial-gradient(1100px 500px at 50% 16%, #d6ecf5 0%, #88c4d9 42%, #4a6f8a 100%);display:flex;flex-direction:column;overflow:auto;pointer-events:auto;color:#102c36}
        .valle-nubes .vn-shell{max-width:760px;width:min(92vw,760px);margin:16px auto;padding:18px;background:rgba(255,255,255,0.92);border:1px solid rgba(16,44,54,0.12);border-radius:14px;box-shadow:0 18px 48px rgba(16,44,54,0.18);backdrop-filter:blur(10px)}
        .valle-nubes h1{font-size:clamp(1.4rem,4vw,1.9rem);margin:0}
        .valle-nubes h2{font-size:clamp(1.05rem,3vw,1.35rem);margin:0}
        .valle-nubes .eyebrow{color:rgba(16,44,54,0.6);font-size:0.68rem;font-weight:900;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px}
        .valle-nubes p{margin-top:8px;line-height:1.45;color:rgba(16,44,54,0.84);font-size:0.92rem}
        .valle-nubes .vn-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
        .valle-nubes .primary-action,.valle-nubes .secondary-action{min-height:42px;padding:0 16px;border-radius:8px;border:0;font-weight:900;cursor:pointer}
        .valle-nubes .primary-action{background:#102c36;color:#fff}
        .valle-nubes .secondary-action{background:rgba(255,255,255,0.8);border:1px solid rgba(16,44,54,0.14);color:#102c36}
        .valle-nubes .vn-cloud{position:fixed;left:50%;top:14%;width:300px;height:130px;transform:translateX(-50%);background:radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.95) 0%, rgba(230,240,248,0.85) 60%, transparent 75%);border-radius:50%;pointer-events:none;transition:all 500ms;opacity:0.5}
        .valle-nubes[data-intensity="baja"] .vn-cloud{width:230px;height:95px;opacity:0.38}
        .valle-nubes[data-intensity="media"] .vn-cloud{width:480px;height:180px;opacity:0.68}
        .valle-nubes[data-intensity="alta"] .vn-cloud{width:740px;height:290px;opacity:0.86;background:radial-gradient(ellipse at 50% 40%, rgba(245,245,250,0.98) 0%, rgba(200,210,225,0.9) 55%, transparent 78%)}
        .valle-nubes[data-intensity="alta"]{background:radial-gradient(1000px 500px at 50% 14%, #b8d2de 0%, #6a8fa3 40%, #2f4150 100%)}
        .valle-nubes .vn-dark{position:fixed;inset:0;background:rgba(10,25,35,0);pointer-events:none;transition:background 500ms}
        .valle-nubes[data-intensity="media"] .vn-dark{background:rgba(10,25,35,0.1)}
        .valle-nubes[data-intensity="alta"] .vn-dark{background:rgba(10,25,35,0.26)}
        .valle-nubes .vn-gamezone{position:relative;min-height:220px;margin-top:10px;padding:10px;border:1px dashed rgba(16,44,54,0.18);border-radius:10px;background:rgba(255,255,255,0.62);overflow:hidden}
        .valle-nubes .vn-steps{display:flex;gap:6px;margin-bottom:10px}
        .valle-nubes .vn-step{flex:1;height:6px;border-radius:3px;background:rgba(16,44,54,0.12);overflow:hidden}
        .valle-nubes .vn-step.active{background:#3178a8}
        .valle-nubes .vn-step.done{background:#72c264}
        .valle-nubes .vn-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:10px;perspective:800px}
        .valle-nubes .char{height:112px;display:grid;place-items:center;border-radius:14px;background:linear-gradient(180deg,#fff 0%,#eef6fb 100%);border:1px solid rgba(16,44,54,0.14);border-bottom:5px solid rgba(16,44,54,0.18);cursor:pointer;font-size:38px;box-shadow:0 12px 22px rgba(16,44,54,0.14);transform:rotateX(6deg);transition:transform 160ms}
        .valle-nubes .char:hover{transform:rotateX(4deg) translateY(-4px)}
        .valle-nubes .char.correct{outline:3px solid #72c264;box-shadow:0 0 18px rgba(114,194,100,0.5)}
        .valle-nubes .char.wrong{outline:3px solid #e76856;opacity:0.7}
        .valle-nubes .falling{position:absolute;width:56px;height:48px;display:grid;place-items:center;border-radius:10px;background:rgba(255,255,255,0.95);border:1px solid rgba(16,44,54,0.12);cursor:pointer;font-size:18px}
        .valle-nubes .intensity3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:10px}
        .valle-nubes .intensity-btn{padding:10px;border-radius:10px;border:1px solid rgba(16,44,54,0.14);background:rgba(255,255,255,0.82);cursor:pointer;text-align:center}
        .valle-nubes .intensity-btn.selected{border-color:#102c36;box-shadow:0 6px 18px rgba(16,44,54,0.15)}
        .valle-nubes .vn-strats{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
        .valle-nubes .vn-strat{padding:14px;border:1px solid rgba(16,44,54,0.12);border-radius:10px;background:rgba(255,255,255,0.82);cursor:pointer;text-align:left}
        .valle-nubes .vn-strat.recommended{border-color:#72c264;box-shadow:0 6px 18px rgba(114,194,100,0.18)}
        .valle-nubes .vn-badge{display:inline-block;padding:3px 7px;border-radius:20px;background:#102c36;color:#fff;font-size:0.65rem;font-weight:900}
        .valle-nubes .vn-tool{padding:6px 8px;border-radius:20px;background:rgba(49,120,168,0.12);border:1px solid rgba(49,120,168,0.2);font-size:0.7rem;font-weight:800}
        .valle-nubes .vn-inventory{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
        .valle-nubes .star{position:absolute;width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:rgba(255,220,80,0.35);border:1px solid rgba(255,200,50,0.5);cursor:pointer}
        .valle-nubes .vn-choice{padding:10px;border:1px solid rgba(16,44,54,0.12);border-radius:8px;background:rgba(255,255,255,0.82);cursor:pointer;margin-top:8px;text-align:left}
        .valle-nubes .vn-choice.correct{border-color:#72c264;background:rgba(114,194,100,0.15)}
        .valle-nubes .vn-choice.wrong{border-color:#e76856;background:rgba(231,104,86,0.12)}
        .valle-nubes .icon-button{width:34px;height:34px;display:grid;place-items:center;border:1px solid rgba(16,44,54,0.14);border-radius:8px;background:rgba(255,255,255,0.85);cursor:pointer}
        @media(max-width:720px){.valle-nubes .vn-grid, .valle-nubes .vn-strats, .valle-nubes .intensity3{grid-template-columns:1fr 1fr}}
      </style>
      <div class="vn-cloud"></div><div class="vn-dark"></div>
      <div style="position:sticky;top:0;z-index:5;max-width:760px;width:min(92vw,760px);margin:8px auto 0;display:flex;justify-content:space-between;align-items:center">
        <div class="eyebrow" style="margin:0">Valle de las Nubes · Tristeza · v2</div>
        <button class="icon-button" data-exit>✕</button>
      </div>
      <div class="vn-shell" data-shell></div>
    `;
    this.host.appendChild(this.root);
    this.shell=this.root.querySelector('[data-shell]');
    this.root.querySelector('[data-exit]').addEventListener('click',()=>this.onExit());
    this.showIntro();
  }
  dispose(){ this.root?.remove(); }
  setAtmosphere(n){ if(!n) this.root.removeAttribute('data-intensity'); else this.root.setAttribute('data-intensity', n); }
  addTool(t){ this.caja.add(t); }
  inventory(){ if(this.caja.size===0) return ''; const m={'Cristal de perspectiva':'💎 Cristal','Semilla de aceptación':'🌱 Semilla','Herramienta de acción':'🧰 Herramienta','Estrella de atención':'⭐ Estrella','Corazón de apoyo':'💚 Corazón','Gota de comprensión':'💧 Gota'}; return `<div class="vn-inventory">${[...this.caja].map(t=>`<span class="vn-tool">${m[t]??t}</span>`).join('')}</div>`; }
  stepsBar(active){
    return `<div class="vn-steps">${[1,2,3,4].map(i=>`<div class="vn-step ${i<active?'done':''} ${i===active?'active':''}"></div>`).join('')}</div>`;
  }

  // INTRO quitada + Paso1 quitado como pedido — arranca en GENERAR
  showIntro(){
    this.setAtmosphere(null);
    this.shell.innerHTML=`
      ${this.stepsBar(0)}
      <h1>BIENVENIDO AL VALLE DE LAS NUBES</h1>
      <div class="vn-actions"><button class="primary-action" data-go>COMENZAR</button></div>
    `;
    this.shell.querySelector('[data-go]').addEventListener('click',()=>{
      this.intensidad_inicial = 'media';
      this.setAtmosphere('media');
      this.paso2_generar();
    });
  }

  // 1. IDENTIFICAR EL PROBLEMA — Reconocer qué está generando la dificultad.
  paso1_identificar(){
    this.shell.innerHTML=`
      ${this.stepsBar(1)}
      <p class="eyebrow">Paso 1 de 4</p>
      <h2>1. IDENTIFICAR EL PROBLEMA</h2>
      <p>Reconocer qué está generando la dificultad.</p>
      <div class="vn-gamezone" data-zone style="min-height:260px">
        <p style="font-size:0.85rem;opacity:0.7;margin:0">Atraviesa el valle: primero identifica la tristeza y su intensidad jugando.</p>
        <div class="vn-grid" data-grid style="margin-top:10px">
          ${[{e:'😀',ok:false},{e:'😔',ok:true},{e:'😠',ok:false},{e:'😨',ok:false}].sort(()=>Math.random()-0.5).map(c=>`<button class="char" data-ok="${c.ok}">${c.e}</button>`).join('')}
        </div>
        <p style="font-size:0.8rem;opacity:0.6;margin-top:8px">Toca al que siente tristeza</p>
      </div>
    `;
    this.shell.querySelectorAll('.char').forEach(b=>{
      b.addEventListener('click',()=>{
        const ok=b.dataset.ok==='true';
        b.classList.add(ok?'correct':'wrong');
        if(ok){ this.gotas++; this.caja.add('Gota de comprensión'); }
        setTimeout(()=>{
          if(!ok){
            this.shell.innerHTML+=`<p style="color:#b92d32;font-weight:800">Inténtalo de nuevo</p><div class="vn-actions"><button class="primary-action" data-retry>🔄 Volver a intentar</button></div>`;
            this.shell.querySelector('[data-retry]').addEventListener('click',()=>this.paso1_identificar());
            return;
          }
          this.paso1c_intensidad();
        }, 400);
      },{once:true});
    });
  }

  paso1b_atrapa(){
    this.shell.innerHTML=`
      ${this.stepsBar(1)}
      <p class="eyebrow">1. IDENTIFICAR EL PROBLEMA — sigue</p>
      <h2>Atrapa las señales de tristeza</h2>
      <p style="font-size:0.85rem;opacity:0.7">Atrapa 6 señales. Evita las que no lo son.</p>
      <div class="vn-gamezone" data-zone style="height:250px"></div>
      <p style="font-size:0.85rem">Progreso: <strong data-count>0</strong>/6 · Tiempo: <strong data-time>20</strong>s</p>
    `;
    const zone=this.shell.querySelector('[data-zone]');
    const countEl=this.shell.querySelector('[data-count]');
    const timeEl=this.shell.querySelector('[data-time]');
    let collected=0, t=20, running=true;
    const good=[{icon:'😢',label:'Lágrimas'},{icon:'😔',label:'Mirada baja'},{icon:'🚪',label:'Aislamiento'},{icon:'🍽️',label:'Sin apetito'},{icon:'😮‍💨',label:'Suspiros'},{icon:'🧍',label:'Postura baja'}];
    const bad=[{icon:'😂',label:'Risa'},{icon:'⚡',label:'Energía'}];
    const spawn=()=>{
      if(!running) return;
      const isGood=Math.random()<0.72;
      const it=isGood?good[Math.floor(Math.random()*good.length)]:bad[Math.floor(Math.random()*bad.length)];
      const el=document.createElement('button'); el.className='falling'; el.dataset.good=String(isGood);
      el.innerHTML=`<span style="font-size:18px">${it.icon}</span><span style="font-size:0.55rem;display:block;font-weight:700">${it.label}</span>`;
      el.style.left=`${5+Math.random()*75}%`; el.style.top='-40px'; el.style.width='58px'; el.style.height='48px';
      zone.appendChild(el);
      let y=-40, s=1.0+Math.random()*0.7;
      const iv=setInterval(()=>{ if(!running||!el.isConnected){clearInterval(iv);return;} y+=s; el.style.top=y+'px'; if(y>250){clearInterval(iv); el.remove();} },16);
      el.addEventListener('click',()=>{
        clearInterval(iv);
        if(el.dataset.good==='true'){ collected++; countEl.textContent=String(collected); el.style.transform='scale(1.2)'; el.style.opacity='0'; setTimeout(()=>el.remove(),180); if(collected>=6) win(); }
        else { el.style.borderColor='#e76856'; const tip=document.createElement('div'); tip.textContent='No es tristeza'; tip.style.cssText='position:absolute;left:50%;top:-10px;transform:translateX(-50%);font-size:0.55rem;font-weight:800;color:#b92d32;background:#fff;padding:2px 6px;border-radius:10px'; el.appendChild(tip); setTimeout(()=>el.remove(),600); }
      });
    };
    const spawner=setInterval(spawn,500);
    const timer=setInterval(()=>{ t--; timeEl.textContent=String(t); if(t<=0){ clearInterval(timer); clearInterval(spawner); if(collected<6) fail(); } },1000);
    const win=()=>{
      running=false; clearInterval(timer); clearInterval(spawner);
      this.puntos+=5;
      this.shell.innerHTML+=`<p style="color:#4a8a3a;font-weight:800">¡Bien! Has aprendido a reconocer manifestaciones.</p>`;
      setTimeout(()=>this.paso1c_intensidad(), 600);
    };
    const fail=()=>{
      running=false; this.shell.innerHTML=`
        ${this.stepsBar(1)}
        <h2>Te faltaron señales</h2><p>Necesitas 6 para identificar. Llevas ${collected}.</p>
        <div class="vn-actions"><button class="primary-action" data-retry>🔄 Volver a intentar</button></div>
      `;
      this.shell.querySelector('[data-retry]').addEventListener('click',()=>this.paso1b_atrapa());
    };
    spawn();
  }

  paso1c_intensidad(){
    this.shell.innerHTML=`
      ${this.stepsBar(1)}
      <p class="eyebrow">1. IDENTIFICAR — intensidad</p>
      <h2>¿QUÉ TAN INTENSA ESTÁ TU TRISTEZA?</h2>
      <p style="font-size:0.85rem;opacity:0.7">La nube crece con la intensidad.</p>
      <div class="intensity3">
        <button class="intensity-btn" data-nivel="baja"><strong>BAJA</strong><span>Siento tristeza, pero puedo continuar con mis actividades.</span></button>
        <button class="intensity-btn" data-nivel="media"><strong>MEDIA</strong><span>La tristeza ocupa bastante espacio y comienza a afectar lo que estoy haciendo.</span></button>
        <button class="intensity-btn" data-nivel="alta"><strong>ALTA</strong><span>La tristeza es muy intensa y necesito detenerme para afrontar lo que estoy sintiendo.</span></button>
      </div>
    `;
    this.shell.querySelectorAll('[data-nivel]').forEach(b=>{
      b.addEventListener('mouseenter',()=>this.setAtmosphere(b.dataset.nivel));
      b.addEventListener('click',()=>{
        this.intensidad_inicial=b.dataset.nivel;
        this.setAtmosphere(b.dataset.nivel);
        this.shell.innerHTML=`
          ${this.stepsBar(1)}
          <h2>Intensidad: ${b.dataset.nivel.toUpperCase()}</h2>
          <p>Has identificado la intensidad de tu emoción. Ahora puedes elegir una estrategia para afrontarla.</p>
          ${this.inventory()}
          <div class="vn-actions"><button class="primary-action" data-next>Continuar a GENERAR →</button></div>
        `;
        this.shell.querySelector('[data-next]').addEventListener('click',()=>this.paso2_generar());
      });
    });
  }

  // 2. GENERAR ALTERNATIVAS — Personaje que se mueve y escoge
  paso2_generar(){
    const nivel=this.intensidad_inicial;
    const pool={
      baja:[{id:'reevaluacion',n:'Reevaluación',icon:'💭',d:'Cambia la perspectiva'},{id:'atencional',n:'Atencional',icon:'⭐',d:'Dirige tu atención'}],
      media:[{id:'aceptacion',n:'Aceptación',icon:'🌱',d:'Reconoce lo que sientes'},{id:'solucion',n:'Solución',icon:'🧰',d:'Encuentra una salida'}],
      alta:[{id:'aceptacion',n:'Aceptación',icon:'🌱',d:'Reconoce lo que sientes'},{id:'reevaluacion',n:'Reevaluación',icon:'💭',d:'Cambia la perspectiva'},{id:'apoyo',n:'Apoyo',icon:'💚',d:'No tienes que hacerlo solo'}]
    };
    const opts=pool[nivel]||pool.baja;
    const distractors=[{n:'Ignorar',icon:'🙈',id:'distractor'}];
    const all=[...opts, ...distractors];
    // posiciones fijas para que el personaje camine
    const positions=[{left:'12%',top:'22%'},{left:'68%',top:'18%'},{left:'35%',top:'52%'},{left:'72%',top:'55%'}];
    this.shell.innerHTML=`
      ${this.stepsBar(2)}
      <h2>2. GENERAR ALTERNATIVAS</h2>
      <p>Pensar diferentes formas de afrontar la situación.</p>
      <p style="font-size:0.85rem;opacity:0.7">Mueve al personaje y recoge 2 alternativas útiles. Evita la que no ayuda.</p>
      <div class="vn-gamezone" data-zone style="height:280px;position:relative;overflow:hidden;background:linear-gradient(180deg, #eef6fb 0%, #d6ecf5 55%, #c8e8c8 100%)">
        <div data-char style="position:absolute;left:50%;top:78%;transform:translateX(-50%);font-size:36px;transition:left 500ms ease, top 500ms ease, transform 200ms;z-index:5;filter:drop-shadow(0 4px 6px rgba(0,0,0,0.2))">${this.player?.avatar ?? '🧍'}</div>
        ${all.map((a,i)=>`
          <button data-alt="${a.id}" data-ok="${a.id!=='distractor'}" style="position:absolute;left:${positions[i].left};top:${positions[i].top};width:84px;height:64px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border-radius:12px;background:rgba(255,255,255,0.92);border:1px solid rgba(16,44,54,0.14);border-bottom:4px solid rgba(16,44,54,0.15);box-shadow:0 8px 16px rgba(16,44,54,0.12);cursor:pointer">
            <span style="font-size:22px">${a.icon}</span><span style="font-size:0.6rem;font-weight:800">${a.n}</span>
          </button>
        `).join('')}
      </div>
      <p style="font-size:0.85rem">Recogidas: <strong data-count>0</strong>/2 · Toca una alternativa y el personaje caminará hacia ella</p>
    `;
    const zone=this.shell.querySelector('[data-zone]');
    const char=this.shell.querySelector('[data-char]');
    const countEl=this.shell.querySelector('[data-count]');
    let collected=[];
    let moving=false;
    this.shell.querySelectorAll('[data-alt]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        if(moving) return;
        const rect=zone.getBoundingClientRect();
        const bRect=btn.getBoundingClientRect();
        const zRect=zone.getBoundingClientRect();
        // mover personaje a la posición del botón
        moving=true;
        const targetLeft = ((bRect.left - zRect.left + bRect.width/2) / zRect.width * 100);
        const targetTop = ((bRect.top - zRect.top + bRect.height/2 + 18) / zRect.height * 100);
        char.style.left = targetLeft + '%';
        char.style.top = targetTop + '%';
        char.style.transform = 'translateX(-50%) scale(1.08)';
        setTimeout(()=>{
          char.style.transform = 'translateX(-50%) scale(1)';
          const ok=btn.dataset.ok==='true';
          const id=btn.dataset.alt;
          if(ok){
            if(!collected.find(c=>c.id===id)){
              const data=all.find(a=>a.id===id);
              collected.push({id:data.id, n:data.n, icon:data.icon});
              countEl.textContent=String(collected.length);
              btn.style.borderColor='#72c264'; btn.style.background='rgba(114,194,100,0.18)'; btn.style.opacity='0.45'; btn.disabled=true;
              // efecto recoger
              const puff=document.createElement('div'); puff.textContent='✓'; puff.style.cssText='position:absolute;left:50%;top:-10px;transform:translateX(-50%);background:#72c264;color:#fff;font-weight:900;padding:2px 6px;border-radius:10px;font-size:0.7rem';
              btn.appendChild(puff);
              if(collected.length===2){
                setTimeout(()=>{ this._generadas=collected; this.paso3_elegir(); }, 500);
                return;
              }
            } else {
              btn.style.borderColor='#e76856';
            }
          } else {
            btn.style.borderColor='#e76856'; btn.style.background='rgba(231,104,86,0.15)';
            const tip=document.createElement('div'); tip.textContent='No ayuda'; tip.style.cssText='position:absolute;left:50%;top:-14px;transform:translateX(-50%);font-size:0.55rem;font-weight:800;color:#b92d32;background:#fff;padding:2px 6px;border-radius:10px;white-space:nowrap';
            btn.appendChild(tip); setTimeout(()=>{ tip.remove(); btn.style.borderColor='rgba(16,44,54,0.14)'; btn.style.background='rgba(255,255,255,0.92)'; }, 800);
          }
          moving=false;
        }, 520);
      });
    });
  }

  // 3. ELEGIR UNA ALTERNATIVA — Seleccionar una opción posible y adecuada.
  paso3_elegir(){
    const opts=this._generadas || [];
    this.shell.innerHTML=`
      ${this.stepsBar(3)}
      <h2>3. ELEGIR UNA ALTERNATIVA</h2>
      <p>Seleccionar una opción posible y adecuada.</p>
      <div class="vn-grid" style="grid-template-columns:1fr 1fr;gap:12px">
        ${opts.map(o=>`<button class="char" data-id="${o.id}" style="height:120px;flex-direction:column;font-size:28px">${o.icon}<span style="font-size:0.75rem;margin-top:6px;font-weight:800">${o.n}</span></button>`).join('')}
      </div>
      <p style="font-size:0.8rem;opacity:0.6">Toca la que puedas hacer ahora.</p>
    `;
    this.shell.querySelectorAll('[data-id]').forEach(b=>{
      b.addEventListener('click',()=>{
        this.estrategia_utilizada=b.dataset.id;
        b.classList.add('correct');
        setTimeout(()=>this.paso4_actuar(), 300);
      });
    });
  }

  // 4. ACTUAR — Poner en práctica la alternativa seleccionada mediante una interacción dentro del escenario.
  paso4_actuar(){
    const id=this.estrategia_utilizada;
    this.shell.innerHTML=`
      ${this.stepsBar(4)}
      <h2>4. ACTUAR</h2>
      <p>Poner en práctica la alternativa seleccionada mediante una interacción dentro del escenario.</p>
      <div class="vn-gamezone" data-zone style="height:260px"></div>
    `;
    const zone=this.shell.querySelector('[data-zone]');
    if(id==='reevaluacion'){
      const opts=[{t:'Todo siempre me sale mal.',ok:false},{t:'Es difícil, pero los planes cambian. Puedo ver qué hacer ahora.',ok:true},{t:'No me importa.',ok:false}];
      zone.innerHTML=`<p style="font-weight:800">Toca la idea equilibrada para atravesar</p>${opts.map((o,i)=>`<button class="vn-choice" data-i="${i}">💭 ${o.t}</button>`).join('')}`;
      zone.querySelectorAll('[data-i]').forEach(b=>b.addEventListener('click',()=>{
        const ok=opts[Number(b.dataset.i)].ok; b.classList.add(ok?'correct':'wrong');
        if(ok){ this.caja.add('Cristal de perspectiva'); setTimeout(()=>this.finalActuar(),350); }
        else { setTimeout(()=>{ b.classList.remove('wrong'); },500); }
      }));
    } else if(id==='atencional'){
      zone.innerHTML=`<p style="font-weight:800">Toca la estrella 5 veces para dirigir tu atención</p><div data-z style="position:relative;height:180px"></div><p style="font-size:0.85rem">Progreso: <strong data-p>0</strong>/5</p>`;
      const z=zone.querySelector('[data-z]'); const pEl=zone.querySelector('[data-p]'); let c=0; let star=null;
      const place=()=>{
        if(star) star.remove(); star=document.createElement('button'); star.className='star'; star.textContent='⭐'; star.style.left=`${8+Math.random()*78}%`; star.style.top=`${8+Math.random()*60}%`;
        star.addEventListener('click',()=>{ c++; pEl.textContent=String(c); if(c>=5){ this.caja.add('Estrella de atención'); this.finalActuar(); } else place(); });
        z.appendChild(star);
      }; place();
    } else if(id==='aceptacion'){
      const pasos=[{t:'RECONOCER',d:'Estoy sintiendo tristeza.'},{t:'COMPRENDER',d:'Esta emoción apareció porque ocurrió algo importante para mí.'},{t:'ACEPTAR',d:'Puedo sentir tristeza sin juzgarme por sentirla.'}];
      let i=0;
      const render=()=>{
        const s=pasos[i];
        zone.innerHTML=`<p style="font-weight:800">${s.t} (${i+1}/3)</p><p style="font-size:1rem;font-weight:800;border-left:4px solid #3178a8;padding-left:10px">${s.d}</p><button class="primary-action" data-next>${i===2?'Completar':'Tocar para sentir'}</button>`;
        zone.querySelector('[data-next]').addEventListener('click',()=>{ i++; if(i<pasos.length) render(); else { this.caja.add('Semilla de aceptación'); if(this.intensidad_inicial==='alta') this.setAtmosphere('media'); this.finalActuar(); }});
      }; render();
    } else if(id==='solucion'){
      this.paso4_solucionDetallado(zone);
      return;
    } else if(id==='apoyo'){
      zone.innerHTML=`<p style="font-weight:800">Toca a la persona de confianza</p><div class="vn-grid" style="grid-template-columns:repeat(3,1fr)"><button class="char" data-ok="false">🧑‍🏫</button><button class="char" data-ok="true">🧑‍🤝‍🧑</button><button class="char" data-ok="false">😐</button></div>`;
      zone.querySelectorAll('.char').forEach(b=>b.addEventListener('click',()=>{
        if(b.dataset.ok!=='true'){b.classList.add('wrong'); setTimeout(()=>b.classList.remove('wrong'),500); return;}
        zone.innerHTML=`<p style="font-weight:800">¿Quieres contarme qué ocurrió?</p><button class="vn-choice" data-i="0">Me siento triste porque perdí algo importante y quiero hablar.</button><button class="vn-choice" data-i="1">No me pasa nada.</button>`;
        zone.querySelectorAll('[data-i]').forEach(c=>c.addEventListener('click',()=>{
          const ok=c.dataset.i==='0'; c.classList.add(ok?'correct':'wrong');
          if(ok){ this.caja.add('Corazón de apoyo'); setTimeout(()=>this.finalActuar(),350); }
          else setTimeout(()=>{c.classList.remove('wrong')},500);
        }));
      }));
    } else {
      zone.innerHTML=`<button class="primary-action" data-go>Actuar</button>`;
      zone.querySelector('[data-go]').addEventListener('click',()=>this.finalActuar());
    }
  }

  // Solución detallada con 4 pasos internos pero ya estamos en ACTUAR, así que lo hacemos como sub-juego rápido
  paso4_solucionDetallado(zone){
    let step=0, elegida='', icon='';
    const render=()=>{
      if(step===0){
        zone.innerHTML=`<p style="font-weight:800">1. IDENTIFICAR EL PROBLEMA</p><div class="vn-grid" style="grid-template-columns:repeat(3,1fr);gap:8px"><button class="char" data-ok="true" style="font-size:14px">📅<span style="display:block;font-size:0.65rem">Plan cancelado</span></button><button class="char" data-ok="false">👋</button><button class="char" data-ok="false">🌧️</button></div>`;
        zone.querySelectorAll('[data-ok]').forEach(b=>b.addEventListener('click',()=>{ if(b.dataset.ok==='true'){b.classList.add('correct'); setTimeout(()=>{step=1;render();},300);} else b.classList.add('wrong'); }));
      } else if(step===1){
        zone.innerHTML=`<p style="font-weight:800">2. GENERAR — atrapa 2 ideas</p><div data-z style="position:relative;height:160px;border:1px dashed rgba(16,44,54,0.2);border-radius:8px;overflow:hidden"></div><p style="font-size:0.8rem"><span data-c>0</span>/2</p>`;
        const z=zone.querySelector('[data-z]'); const cEl=zone.querySelector('[data-c]');
        const alts=[{t:'Hablar',icon:'💬',ok:true},{t:'Revisar',icon:'📝',ok:true},{t:'Culparme',icon:'😞',ok:false}];
        let coll=[]; const spawn=()=>{
          const it=alts[Math.floor(Math.random()*alts.length)];
          const el=document.createElement('button'); el.className='falling'; el.dataset.ok=String(it.ok); el.dataset.t=it.t; el.innerHTML=`${it.icon} ${it.t}`;
          el.style.left=`${5+Math.random()*70}%`; el.style.top='-30px'; el.style.width='90px'; z.appendChild(el);
          let y=-30; const iv=setInterval(()=>{ y+=1.1; el.style.top=y+'px'; if(y>170){clearInterval(iv); el.remove();}},16);
          el.addEventListener('click',()=>{
            clearInterval(iv);
            if(el.dataset.ok==='true' && !coll.includes(el.dataset.t)){ coll.push(el.dataset.t); cEl.textContent=String(coll.length); el.remove(); if(coll.length===2){ this._solucionElegidas=coll; setTimeout(()=>{step=2;render();},300);} }
            else { el.style.borderColor='#e76856'; setTimeout(()=>el.remove(),400); }
          });
        };
        const sp=setInterval(spawn,500); setTimeout(()=>spawn(),100);
      } else if(step===2){
        const opts=this._solucionElegidas||['Hablar','Revisar'];
        zone.innerHTML=`<p style="font-weight:800">3. ELEGIR</p>${opts.map(o=>`<button class="vn-choice" data-v="${o}">${o}</button>`).join('')}`;
        zone.querySelectorAll('[data-v]').forEach(b=>b.addEventListener('click',()=>{ elegida=b.dataset.v; icon=elegida==='Hablar'?'💬':'📝'; step=3; render(); }));
      } else {
        const isHablar=elegida==='Hablar';
        zone.innerHTML=`<p style="font-weight:800">4. ACTUAR — ${isHablar?'arrastra el mensaje':'construye'}</p><div data-act style="height:160px;display:grid;place-items:center;position:relative;background:linear-gradient(180deg,#eef6fb 0%,#d6ecf5 100%);border-radius:8px">
          ${isHablar?`<div style="position:absolute;left:12%;font-size:36px" data-target>🧑‍🤝‍🧑</div><button data-drag style="position:absolute;left:55%;padding:8px 12px;border-radius:20px;background:#fff;border:2px solid #3178a8;font-weight:800">💬 Hola</button>`:
          `<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;width:90%">${[0,1,2,3,4].map(i=>`<button data-b="${i}" style="height:36px;border-radius:8px;background:#fff;border:2px dashed #8d5a3b">🧱</button>`).join('')}</div><p data-pr style="position:absolute;bottom:6px;font-size:0.7rem">0/5</p>`}
        </div>`;
        if(isHablar){
          const drag=zone.querySelector('[data-drag]'); const target=zone.querySelector('[data-target]');
          let dragging=false, curX=0, startX=0;
          drag.addEventListener('pointerdown',e=>{dragging=true; startX=e.clientX-curX; drag.setPointerCapture(e.pointerId);});
          drag.addEventListener('pointermove',e=>{ if(!dragging) return; curX=e.clientX-startX; drag.style.transform=`translateX(${curX}px)`; const tr=target.getBoundingClientRect(), dr=drag.getBoundingClientRect(); if(Math.abs(tr.left-dr.left)<40){ dragging=false; this.finishSolucion(); }});
          drag.addEventListener('pointerup',()=>dragging=false);
        } else {
          let b=0; zone.querySelectorAll('[data-b]').forEach(btn=>btn.addEventListener('click',()=>{
            if(btn.dataset.done) return; btn.dataset.done='true'; btn.textContent='✅'; btn.style.background='#72c264'; b++; zone.querySelector('[data-pr]').textContent=`${b}/5`; if(b>=5) this.finishSolucion();
          }));
        }
      }
    };
    render();
  }

  finishSolucion(){ this.caja.add('Herramienta de acción'); this.finalActuar(); }

  finalActuar(){
    this.shell.innerHTML=`
      ${this.stepsBar(4)}
      <h2>¡Acción realizada!</h2>
      <p>Cuando existe algo que podemos modificar, identificar alternativas y actuar puede ayudarnos a afrontar la situación.</p>
      <p style="font-size:0.85rem;opacity:0.7">Ahora atraviesa la nube final.</p>
      ${this.inventory()}
      <div class="vn-actions"><button class="primary-action" data-next>Atravesar la nube →</button></div>
    `;
    this.shell.querySelector('[data-next]').addEventListener('click',()=>this.showDesafio());
  }

  showDesafio(){
    this.shell.innerHTML=`
      ${this.stepsBar(4)}
      <h2>La tristeza no tiene que desaparecer para que puedas continuar.</h2>
      <p>Utiliza lo que aprendiste para atravesar la nube.</p>
      <div class="vn-gamezone" style="height:200px;display:grid;place-items:center">
        <div style="font-size:64px;transition:all 400ms" data-cloud>☁️</div>
        <button class="primary-action" data-go>Atravesar</button>
      </div>
      <p style="font-size:0.75rem;opacity:0.6">Toca 3 veces</p>
    `;
    let p=0; const cloud=this.shell.querySelector('[data-cloud]');
    this.shell.querySelector('[data-go]').addEventListener('click',e=>{
      const btn=e.currentTarget; p++; cloud.style.transform=`scale(${1-p*0.2})`; cloud.style.opacity=String(1-p*0.3); this.setAtmosphere(p>=2?'media':'baja');
      if(p>=3){
        this.shell.innerHTML=`<h2>¡Nube atravesada!</h2><p>La nube disminuye, aparece luz y se desbloquea el camino.</p>${this.inventory()}<div class="vn-actions"><button class="primary-action" data-end>Cierre</button></div>`;
        this.shell.querySelector('[data-end]').addEventListener('click',()=>this.showCierre());
      } else btn.textContent=`Atravesar (${p}/3)`;
    });
  }

  showCierre(){
    this.shell.innerHTML=`
      <h1>¡HAS COMPLETADO EL VALLE DE LAS NUBES!</h1>
      <p>La tristeza es una emoción que puede aparecer ante pérdidas, separaciones, decepciones, rechazos o cambios significativos.</p>
      <p>Reconocer qué estás sintiendo y qué tan intensa es la emoción puede ayudarte a decidir cómo afrontarla.</p>
      <p>Existen diferentes estrategias. Aprender a utilizarlas de manera flexible puede ayudarte a afrontar diferentes situaciones.</p>
      <p><strong>Recuerda: regular una emoción no significa eliminarla. Significa aprender a reconocerla y encontrar maneras adecuadas de afrontarla.</strong></p>
      ${this.inventory()}
      <p><span class="vn-badge">Insignia: GUARDIÁN DE LA TRISTEZA</span></p>
      <div class="vn-actions"><button class="primary-action" data-fin>CONTINUAR A LA SIGUIENTE ISLA</button></div>
    `;
    this.shell.querySelector('[data-fin]').addEventListener('click',()=>{
      this.onComplete({success:true,score:this.puntos+this.gotas,target:5,islandId:this.island.id,title:'Valle de las Nubes',message:'Has completado el Valle de las Nubes. La tristeza no desaparece, pero ahora tienes herramientas para afrontarla.'});
    });
  }
}
