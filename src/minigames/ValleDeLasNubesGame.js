/**
 * Valle de las Nubes — Isla de la Tristeza
 * Stack: Three.js + Vite + Vanilla JS (adaptado a EmotionIslandApp)
 * Flujo completo 1-14 sin modificar lógica general del juego.
 * Textos psicoeducativos preservados exactamente como fueron validados.
 */
export class ValleDeLasNubesGame {
  constructor({ host, island, player, onComplete, onExit }) {
    this.host = host;
    this.island = island;
    this.player = player;
    this.onComplete = onComplete;
    this.onExit = onExit;

    // Estado requerido por especificación
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
        .valle-nubes{position:fixed;inset:0;background:radial-gradient(1200px 600px at 50% 20%, #d6ecf5 0%, #88c4d9 45%, #4a6f8a 100%);display:flex;flex-direction:column;overflow:auto;pointer-events:auto;font-family:inherit;color:#102c36}
        .valle-nubes .vn-shell{max-width:780px;width:min(92vw,780px);margin:32px auto;padding:28px 24px;background:rgba(255,255,255,0.88);border:1px solid rgba(16,44,54,0.12);border-radius:14px;box-shadow:0 22px 56px rgba(16,44,54,0.18);backdrop-filter:blur(10px)}
        .valle-nubes h1,.valle-nubes h2{margin:0}
        .valle-nubes h1{font-size:clamp(1.6rem,4vw,2.2rem);letter-spacing:0.02em}
        .valle-nubes h2{font-size:clamp(1.2rem,3vw,1.6rem)}
        .valle-nubes .eyebrow{color:rgba(16,44,54,0.6);font-size:0.74rem;font-weight:900;letter-spacing:0.16em;text-transform:uppercase;margin-bottom:6px}
        .valle-nubes p{margin-top:10px;line-height:1.55;color:rgba(16,44,54,0.84)}
        .valle-nubes .vn-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}
        .valle-nubes .primary-action,.valle-nubes .secondary-action{min-height:44px;padding:0 18px;border-radius:8px;border:0;font-weight:900;cursor:pointer}
        .valle-nubes .primary-action{background:#102c36;color:#fff;box-shadow:0 10px 26px rgba(16,44,54,0.18)}
        .valle-nubes .secondary-action{background:rgba(255,255,255,0.7);border:1px solid rgba(16,44,54,0.14);color:#102c36}
        .valle-nubes .vn-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}
        .valle-nubes .vn-card{padding:12px;border:1px solid rgba(16,44,54,0.12);border-radius:10px;background:rgba(255,255,255,0.72);cursor:pointer;text-align:left;transition:transform 120ms, border-color 120ms}
        .valle-nubes .vn-card:hover{transform:translateY(-2px);border-color:#3178a8}
        .valle-nubes .vn-card.selected{border-color:#3178a8;box-shadow:0 6px 18px rgba(49,120,168,0.18);background:rgba(49,120,168,0.08)}
        .valle-nubes .vn-intensity{display:flex;gap:8px;margin-top:14px}
        .valle-nubes .vn-intensity button{flex:1}
        .valle-nubes .vn-intensity .selected{outline:2px solid #102c36}
        .valle-nubes .vn-cloud{position:fixed;left:50%;top:18%;width:420px;height:180px;transform:translateX(-50%);background:radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.95) 0%, rgba(230,240,248,0.85) 60%, rgba(180,200,215,0.0) 75%);border-radius:50%;filter:blur(1px);pointer-events:none;transition:all 600ms ease;opacity:0.55}
        .valle-nubes[data-intensity="baja"] .vn-cloud{width:260px;height:110px;opacity:0.4;filter:brightness(1.05)}
        .valle-nubes[data-intensity="media"] .vn-cloud{width:520px;height:200px;opacity:0.72}
        .valle-nubes[data-intensity="alta"] .vn-cloud{width:780px;height:320px;opacity:0.88;background:radial-gradient(ellipse at 50% 40%, rgba(245,245,250,0.98) 0%, rgba(200,210,225,0.9) 55%, rgba(80,90,110,0.0) 78%)}
        .valle-nubes[data-intensity="alta"]{background:radial-gradient(1200px 600px at 50% 20%, #b8d2de 0%, #6a8fa3 42%, #2f4150 100%)}
        .valle-nubes .vn-dark{position:fixed;inset:0;background:rgba(10,25,35,0);pointer-events:none;transition:background 600ms}
        .valle-nubes[data-intensity="media"] .vn-dark{background:rgba(10,25,35,0.12)}
        .valle-nubes[data-intensity="alta"] .vn-dark{background:rgba(10,25,35,0.28)}
        .valle-nubes .vn-manifests{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}
        .valle-nubes .vn-manifest{padding:12px;border:1px solid rgba(16,44,54,0.12);border-radius:10px;background:rgba(255,255,255,0.78);cursor:pointer;text-align:center}
        .valle-nubes .vn-manifest.selected{border-color:#3178a8;background:rgba(49,120,168,0.12)}
        .valle-nubes .vn-strategies{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}
        .valle-nubes .vn-strat{padding:16px;border:1px solid rgba(16,44,54,0.12);border-radius:10px;background:rgba(255,255,255,0.78);cursor:pointer;text-align:left}
        .valle-nubes .vn-strat.recommended{border-color:#72c264;box-shadow:0 6px 18px rgba(114,194,100,0.18)}
        .valle-nubes .vn-badge{display:inline-block;padding:4px 8px;border-radius:20px;background:#102c36;color:#fff;font-size:0.7rem;font-weight:900;margin-left:6px}
        .valle-nubes .vn-inventory{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
        .valle-nubes .vn-tool{padding:8px 10px;border-radius:20px;background:rgba(49,120,168,0.12);border:1px solid rgba(49,120,168,0.2);font-size:0.78rem;font-weight:800}
        .valle-nubes .vn-gamezone{position:relative;min-height:260px;margin-top:14px;padding:16px;border:1px dashed rgba(16,44,54,0.2);border-radius:10px;background:rgba(255,255,255,0.6);overflow:hidden}
        .valle-nubes .star{position:absolute;width:36px;height:36px;display:grid;place-items:center;border-radius:50%;background:rgba(255,220,80,0.35);border:1px solid rgba(255,200,50,0.5);cursor:pointer}
        .valle-nubes .vn-choice{padding:10px;border:1px solid rgba(16,44,54,0.12);border-radius:8px;background:rgba(255,255,255,0.78);cursor:pointer;margin-top:8px;text-align:left}
        .valle-nubes .vn-choice.correct{border-color:#72c264;background:rgba(114,194,100,0.15)}
        .valle-nubes .vn-choice.wrong{border-color:#e76856;background:rgba(231,104,86,0.12)}
        .valle-nubes .vn-topbar{display:flex;justify-content:space-between;align-items:center;gap:12px}
        .valle-nubes .icon-button{display:grid;width:40px;height:40px;place-items:center;border:1px solid rgba(16,44,54,0.14);border-radius:8px;background:rgba(255,255,255,0.8);cursor:pointer}
        @media(max-width:720px){.valle-nubes .vn-grid, .valle-nubes .vn-manifests, .valle-nubes .vn-strategies{grid-template-columns:1fr}}
      </style>
      <div class="vn-cloud" data-cloud></div>
      <div class="vn-dark"></div>
      <div class="vn-topbar" style="position:sticky;top:0;z-index:5;max-width:780px;width:min(92vw,780px);margin:12px auto 0;padding:0 4px;display:flex;justify-content:space-between">
        <div class="eyebrow" style="margin:0">Valle de las Nubes · Tristeza</div>
        <button class="icon-button" type="button" data-exit>✕</button>
      </div>
      <div class="vn-shell" data-shell></div>
    `;
    this.host.appendChild(this.root);
    this.shell = this.root.querySelector('[data-shell]');
    this.root.querySelector('[data-exit]').addEventListener('click', () => this.onExit());

    this.showIntroduccion();
  }

  dispose() {
    this.root?.remove();
  }

  // Helpers
  setAtmosphere(nivel) {
    if (!nivel) {
      this.root.removeAttribute('data-intensity');
      return;
    }
    this.root.setAttribute('data-intensity', nivel);
  }

  addTool(tool) {
    this.caja_de_herramientas_emocionales.add(tool);
  }

  renderInventory() {
    if (this.caja_de_herramientas_emocionales.size === 0) return `<p style="opacity:0.6">Aún no tienes herramientas.</p>`;
    const map = {
      'Cristal de perspectiva': '💎 Cristal de perspectiva',
      'Semilla de aceptación': '🌱 Semilla de aceptación',
      'Herramienta de acción': '🧰 Herramienta de acción',
      'Estrella de atención': '⭐ Estrella de atención',
      'Corazón de apoyo': '💚 Corazón de apoyo',
      'Gota de comprensión': '💧 Gota de comprensión'
    };
    return `<div class="vn-inventory">${[...this.caja_de_herramientas_emocionales].map(t => `<span class="vn-tool">${map[t] ?? t}</span>`).join('')}</div>`;
  }

  // 1. Introducción
  showIntroduccion() {
    this.setAtmosphere(null);
    this.shell.innerHTML = `
      <p class="eyebrow">Isla de la Tristeza</p>
      <h1>BIENVENIDO AL VALLE DE LAS NUBES</h1>
      <p>La tristeza es una emoción que puede aparecer ante pérdidas, separaciones, decepciones, rechazos o cambios significativos.</p>
      <p>En esta isla aprenderás a reconocerla, identificar su intensidad y utilizar diferentes estrategias para afrontarla.</p>
      <p>Tu misión será encontrar las herramientas que te permitan continuar el recorrido.</p>
      <div class="vn-actions"><button class="primary-action" data-comenzar>COMENZAR</button></div>
    `;
    this.shell.querySelector('[data-comenzar]').addEventListener('click', () => this.showEtapa1());
  }

  // 2. Etapa 1
  showEtapa1() {
    this.shell.innerHTML = `
      <p class="eyebrow">Etapa 1 — Identificar la tristeza</p>
      <h2>¿QUÉ EMOCIÓN PODRÍA ESTAR SINTIENDO EL PERSONAJE?</h2>
      <p style="opacity:0.75">El personaje acaba de despedirse de alguien importante y mira hacia abajo. Observa la escena.</p>
      <div style="height:120px;border-radius:10px;background:linear-gradient(180deg,#d6ecf5,#a9c9d9);display:grid;place-items:center;font-size:42px" aria-hidden>😔</div>
      <div class="vn-grid">
        ${['Alegría','Tristeza','Enojo','Miedo'].map(e => `<button class="vn-card" data-emocion="${e}"><strong>${e}</strong></button>`).join('')}
      </div>
    `;
    this.shell.querySelectorAll('[data-emocion]').forEach(btn => {
      btn.addEventListener('click', () => this.handleEtapa1(btn.dataset.emocion));
    });
  }

  handleEtapa1(choice) {
    const correct = choice === 'Tristeza';
    if (correct) this.gotas += 1, this.addTool('Gota de comprensión');
    this.shell.innerHTML = `
      <p class="eyebrow">Etapa 1 — Resultado</p>
      <h2>${correct ? '¡CORRECTO!' : 'Observación'}</h2>
      <p>${correct ? 'La tristeza puede aparecer ante situaciones que percibimos como pérdidas, separaciones, decepciones o cambios importantes.' : 'Esta situación puede generar diferentes emociones dependiendo de la persona y del contexto.<br>La tristeza suele relacionarse especialmente con experiencias de pérdida, separación, decepción o cambio significativo.'}</p>
      ${correct ? `<p><span class="vn-badge">+ Gota de comprensión</span></p>` : ``}
      ${this.renderInventory()}
      <div class="vn-actions"><button class="primary-action" data-next>Continuar</button></div>
    `;
    this.shell.querySelector('[data-next]').addEventListener('click', () => this.showEtapa2());
  }

  // 3. Etapa 2 — Espejo Emocional
  showEtapa2() {
    this.shell.innerHTML = `
      <p class="eyebrow">Etapa 2 — El Espejo Emocional</p>
      <h2>El Espejo Emocional</h2>
      <p>La tristeza puede manifestarse de diferentes maneras.</p>
      <p>Observa las señales y descubre cuáles pueden estar relacionadas con esta emoción.</p>
      <div class="vn-manifests">
        ${[
          { id: 'lagrimas', label: '😢 Lágrimas', sad: true },
          { id: 'encorvada', label: '🧍 Postura encorvada', sad: true },
          { id: 'aislamiento', label: '🚪 Aislamiento', sad: true },
          { id: 'apetito', label: '🍽️ Pérdida de apetito', sad: true },
          { id: 'suspiros', label: '😮‍💨 Suspiros frecuentes', sad: true },
          { id: 'mirada', label: '👀 Mirada baja', sad: true },
          { id: 'risa', label: '😂 Risa energética', sad: false },
          { id: 'energia', label: '⚡ Mucha energía', sad: false },
        ].map(m => `<button class="vn-manifest" data-manifest="${m.id}" data-sad="${m.sad}">${m.label}</button>`).join('')}
      </div>
      <p style="font-size:0.85rem;opacity:0.7">Selecciona las 6 señales relacionadas con la tristeza y luego confirma.</p>
      <div class="vn-actions"><button class="primary-action" data-confirm>Confirmar selección</button></div>
    `;
    this.shell.querySelectorAll('[data-manifest]').forEach(btn => {
      btn.addEventListener('click', () => btn.classList.toggle('selected'));
    });
    this.shell.querySelector('[data-confirm]').addEventListener('click', () => {
      const selected = [...this.shell.querySelectorAll('.vn-manifest.selected')];
      const correct = selected.filter(s => s.dataset.sad === 'true').length;
      const wrong = selected.filter(s => s.dataset.sad === 'false').length;
      const ok = correct >= 4 && wrong === 0;
      this.puntos += 5;
      this.shell.innerHTML = `
        <p class="eyebrow">Etapa 2 — Resultado</p>
        <h2>${ok ? '¡Bien observado!' : 'Buen intento'}</h2>
        <p>Has aprendido a reconocer algunas manifestaciones asociadas a la tristeza.</p>
        <p><span class="vn-badge">+ 5 puntos emocionales</span> — Seleccionaste ${correct} correctas${wrong ? ` y ${wrong} no relacionadas` : ''}.</p>
        ${this.renderInventory()}
        <div class="vn-actions"><button class="primary-action" data-next>Continuar</button></div>
      `;
      this.shell.querySelector('[data-next]').addEventListener('click', () => this.showEtapa3(false));
    });
  }

  // 4. Etapa 3 — Intensidad
  showEtapa3(isReevaluacion) {
    this._isReevaluacion = isReevaluacion;
    this.shell.innerHTML = `
      <p class="eyebrow">Etapa 3 — Intensidad</p>
      <h2>${isReevaluacion ? '¿CÓMO ESTÁ AHORA TU TRISTEZA?' : '¿QUÉ TAN INTENSA ESTÁ TU TRISTEZA?'}</h2>
      <p>Elige el nivel que mejor represente lo que sientes. No hay respuestas correctas o incorrectas.</p>
      <div class="vn-intensity" style="flex-direction:column">
        ${[
          { nivel: 'baja', texto: 'Siento tristeza, pero puedo continuar con mis actividades.' },
          { nivel: 'media', texto: 'La tristeza ocupa bastante espacio y comienza a afectar lo que estoy haciendo.' },
          { nivel: 'alta', texto: 'La tristeza es muy intensa y necesito detenerme para afrontar lo que estoy sintiendo.' },
        ].map(o => `<button class="secondary-action" data-nivel="${o.nivel}" style="text-align:left;padding:12px"><strong>${o.nivel.toUpperCase()}</strong><br><span style="font-weight:600;opacity:0.75">${o.texto}</span></button>`).join('')}
      </div>
    `;
    this.shell.querySelectorAll('[data-nivel]').forEach(btn => {
      btn.addEventListener('click', () => this.handleIntensidad(btn.dataset.nivel));
      btn.addEventListener('mouseenter', () => this.setAtmosphere(btn.dataset.nivel));
    });
  }

  handleIntensidad(nivel) {
    this.setAtmosphere(nivel);
    if (!this._isReevaluacion) {
      this.intensidad_inicial = nivel;
      this.shell.innerHTML = `
        <p class="eyebrow">Intensidad registrada</p>
        <h2>Intensidad: ${nivel.toUpperCase()}</h2>
        <p>Has identificado la intensidad de tu emoción. Ahora puedes elegir una estrategia para afrontarla.</p>
        ${this.renderInventory()}
        <div class="vn-actions"><button class="primary-action" data-next>Ver estrategias</button></div>
      `;
      this.shell.querySelector('[data-next]').addEventListener('click', () => this.showEstrategias());
    } else {
      this.intensidad_posterior = nivel;
      this.showRetroalimentacion();
    }
  }

  // 5. Ramificación estrategias
  getEstrategiasPara(nivel) {
    const map = {
      baja: [
        { id: 'reevaluacion', nombre: 'Reevaluación cognitiva', desc: 'Cambia la perspectiva', recomendada: true },
        { id: 'atencional', nombre: 'Despliegue atencional', desc: 'Dirige tu atención', recomendada: false }
      ],
      media: [
        { id: 'aceptacion', nombre: 'Aceptación emocional', desc: 'Reconoce lo que sientes', recomendada: true },
        { id: 'solucion', nombre: 'Solución de problemas', desc: 'Encuentra una salida', recomendada: false }
      ],
      alta: [
        { id: 'aceptacion', nombre: 'Aceptación emocional', desc: 'Reconoce lo que sientes', recomendada: true },
        { id: 'reevaluacion', nombre: 'Reevaluación cognitiva', desc: 'Cambia la perspectiva', recomendada: false },
        { id: 'apoyo', nombre: 'Búsqueda de apoyo social', desc: 'No tienes que hacerlo solo', recomendada: false }
      ]
    };
    return map[nivel] ?? [];
  }

  showEstrategias() {
    const nivel = this.intensidad_inicial;
    const estrategias = this.getEstrategiasPara(nivel);
    this.shell.innerHTML = `
      <p class="eyebrow">Estrategias — Intensidad ${nivel.toUpperCase()}</p>
      <h2>Elige una estrategia</h2>
      <p>La estrategia recomendada es solo una orientación: puedes elegir cualquiera de las disponibles para tu nivel.</p>
      <div class="vn-strategies">
        ${estrategias.map(e => `
          <button class="vn-strat ${e.recomendada ? 'recommended' : ''}" data-estrategia="${e.id}">
            <strong>${e.nombre}</strong> ${e.recomendada ? '<span class="vn-badge">Recomendada</span>' : ''}
            <p style="margin-top:6px">${e.desc}</p>
          </button>
        `).join('')}
      </div>
      ${this.renderInventory()}
      <div class="vn-actions"><button class="secondary-action" data-exit>Volver</button></div>
    `;
    this.shell.querySelector('[data-exit]').addEventListener('click', () => this.onExit());
    this.shell.querySelectorAll('[data-estrategia]').forEach(btn => {
      btn.addEventListener('click', () => this.handleEstrategia(btn.dataset.estrategia));
    });
  }

  handleEstrategia(id) {
    const nivel = this.intensidad_inicial;
    const estrategias = this.getEstrategiasPara(nivel);
    const elegida = estrategias.find(e => e.id === id);
    const esRecomendada = elegida?.recomendada;
    if (!esRecomendada) {
      this.shell.innerHTML = `
        <p class="eyebrow">Estrategia alternativa</p>
        <h2>${elegida.nombre}</h2>
        <p>Esta estrategia también puede utilizarse.</p>
        <p>De acuerdo con la intensidad que identificaste, otra estrategia podría ayudarte en este momento.</p>
        <p>Puedes continuar con la estrategia seleccionada o explorar otra alternativa.</p>
        <div class="vn-actions">
          <button class="primary-action" data-continuar>CONTINUAR CON ESTA ESTRATEGIA</button>
          <button class="secondary-action" data-ver>VER OTRAS ESTRATEGIAS</button>
        </div>
      `;
      this.shell.querySelector('[data-continuar]').addEventListener('click', () => this.launchMinijuego(id));
      this.shell.querySelector('[data-ver]').addEventListener('click', () => this.showEstrategias());
    } else {
      this.launchMinijuego(id);
    }
  }

  launchMinijuego(id) {
    this.estrategia_utilizada = id;
    if (id === 'reevaluacion') this.showReevaluacion();
    else if (id === 'atencional') this.showAtencional();
    else if (id === 'aceptacion') this.showAceptacion();
    else if (id === 'solucion') this.showSolucion();
    else if (id === 'apoyo') this.showApoyo();
  }

  // 6.1 Reevaluación cognitiva
  showReevaluacion() {
    const situacion = 'Te enteras de que un plan importante que esperabas fue cancelado.';
    const opciones = [
      { texto: 'Todo siempre me sale mal, nada vale la pena.', util: false },
      { texto: 'Es una decepción, pero puedo entender que a veces los planes cambian y buscar qué hacer con este tiempo.', util: true },
      { texto: 'No me importa nada, mejor ignoro lo que siento.', util: false }
    ];
    this.shell.innerHTML = `
      <p class="eyebrow">Reevaluación cognitiva — Camino de los Pensamientos</p>
      <h2>Cambia la perspectiva</h2>
      <p>Situación: <em>${situacion}</em></p>
      <p>Elige la interpretación más equilibrada, que reconozca la dificultad sin negar la emoción.</p>
      ${opciones.map((o,i) => `<button class="vn-choice" data-idx="${i}">${o.texto}</button>`).join('')}
    `;
    this.shell.querySelectorAll('[data-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.idx);
        const pick = opciones[idx];
        this.shell.querySelectorAll('.vn-choice').forEach(b => {
          const j = Number(b.dataset.idx);
          b.classList.add(opciones[j].util ? 'correct' : 'wrong');
        });
        setTimeout(() => {
          const esAlta = this.intensidad_inicial === 'alta';
          const msg = esAlta
            ? 'Puedes reconocer el dolor de una situación sin asumir que todo está perdido.'
            : 'Has encontrado una nueva perspectiva.<br>Puedes reconocer que una situación es difícil sin asumir que todo está perdido.';
          this.addTool('Cristal de perspectiva');
          this.shell.innerHTML = `
            <p class="eyebrow">Reevaluación completada</p>
            <h2>${pick.util ? '¡Perspectiva equilibrada!' : 'Nueva mirada'}</h2>
            <p>${msg}</p>
            <p><span class="vn-badge">+ Cristal de perspectiva</span></p>
            ${this.renderInventory()}
            <div class="vn-actions"><button class="primary-action" data-next>Continuar</button></div>
          `;
          this.shell.querySelector('[data-next]').addEventListener('click', () => this.showReevaluacionIntensidad());
        }, 600);
      });
    });
  }

  // 6.2 Despliegue atencional
  showAtencional() {
    this.shell.innerHTML = `
      <p class="eyebrow">Despliegue atencional — Dirige tu atención</p>
      <h2>Concentración breve</h2>
      <p>Entra a una zona y concentra tu atención en seguir la estrella. Toca la estrella 5 veces.</p>
      <div class="vn-gamezone" data-zone style="height:280px;background:radial-gradient(circle at 50% 50%, #fff 0%, #d6ecf5 60%)"></div>
      <p style="font-size:0.85rem;opacity:0.7">Progreso: <span data-progress>0</span>/5</p>
      <div class="vn-actions"><button class="secondary-action" data-exit>Salir</button></div>
    `;
    const zone = this.shell.querySelector('[data-zone]');
    const progress = this.shell.querySelector('[data-progress]');
    let count = 0;
    let star = null;
    const placeStar = () => {
      if (star) star.remove();
      star = document.createElement('button');
      star.className = 'star';
      star.textContent = '⭐';
      star.style.left = `${10 + Math.random() * 80}%`;
      star.style.top = `${10 + Math.random() * 70}%`;
      star.addEventListener('click', () => {
        count += 1;
        progress.textContent = String(count);
        if (count >= 5) {
          this.addTool('Estrella de atención');
          this.shell.innerHTML = `
            <p class="eyebrow">Despliegue completado</p>
            <h2>¡Atención dirigida!</h2>
            <p>Cambiar temporalmente el foco de atención puede ayudarte a disminuir el espacio que ocupa una emoción desagradable y continuar con la actividad.</p>
            <p><span class="vn-badge">+ Estrella de atención</span></p>
            ${this.renderInventory()}
            <div class="vn-actions"><button class="primary-action" data-next>Continuar</button></div>
          `;
          this.shell.querySelector('[data-next]').addEventListener('click', () => this.showReevaluacionIntensidad());
        } else {
          placeStar();
        }
      });
      zone.appendChild(star);
    };
    placeStar();
    this.shell.querySelector('[data-exit]').addEventListener('click', () => this.onExit());
  }

  // 6.3 Aceptación emocional
  showAceptacion() {
    const pasos = [
      { titulo: 'RECONOCER', texto: 'Estoy sintiendo tristeza.' },
      { titulo: 'COMPRENDER', texto: 'Esta emoción apareció porque ocurrió algo importante para mí.' },
      { titulo: 'ACEPTAR', texto: 'Puedo sentir tristeza sin juzgarme por sentirla.' }
    ];
    let idx = 0;
    const render = () => {
      const p = pasos[idx];
      const isLast = idx === pasos.length - 1;
      this.shell.innerHTML = `
        <p class="eyebrow">Aceptación emocional — Jardín de la Emoción (${idx+1}/3)</p>
        <h2>${p.titulo}</h2>
        <p style="font-size:1.1rem;font-weight:800;border-left:4px solid #3178a8;padding-left:10px">${p.texto}</p>
        <div class="vn-actions"><button class="primary-action" data-next>${isLast ? 'Completar' : 'Siguiente'}</button></div>
      `;
      this.shell.querySelector('[data-next]').addEventListener('click', () => {
        idx += 1;
        if (idx < pasos.length) render();
        else {
          this.addTool('Semilla de aceptación');
          const esAlta = this.intensidad_inicial === 'alta';
          if (esAlta) this.setAtmosphere('media');
          this.shell.innerHTML = `
            <p class="eyebrow">Aceptación completada</p>
            <h2>Reconociste lo que sientes</h2>
            <p>Aceptar una emoción no significa eliminarla ni estar de acuerdo con lo ocurrido.</p>
            <p>Significa reconocer que está presente sin juzgarla ni intentar rechazarla inmediatamente.</p>
            ${esAlta ? `<p><em>Reconocer lo que sientes puede ser un primer paso para comenzar a afrontarlo.</em></p><p style="opacity:0.7">La nube deja de crecer y se estabiliza.</p>` : ''}
            <p><span class="vn-badge">+ Semilla de aceptación</span></p>
            ${this.renderInventory()}
            <div class="vn-actions"><button class="primary-action" data-next>Continuar</button></div>
          `;
          this.shell.querySelector('[data-next]').addEventListener('click', () => this.showReevaluacionIntensidad());
        }
      });
    };
    render();
  }

  // 6.4 Solución de problemas
  showSolucion() {
    let step = 0;
    let problema = '', alternativas = [], elegida = '';
    const render = () => {
      if (step === 0) {
        this.shell.innerHTML = `
          <p class="eyebrow">Solución de problemas — Encuentra una salida (1/4)</p>
          <h2>IDENTIFICAR EL PROBLEMA</h2>
          <p>¿Qué genera la dificultad?</p>
          ${[
            'Me siento triste porque perdí una oportunidad importante y no sé qué hacer.',
            'Todo el mundo está en mi contra.',
            'No hay ningún problema, solo ignóralo.'
          ].map((t,i) => `<button class="vn-choice" data-i="${i}">${t}</button>`).join('')}
        `;
        this.shell.querySelectorAll('[data-i]').forEach(b => b.addEventListener('click', () => { problema = b.textContent; step=1; render(); }));
      } else if (step === 1) {
        this.shell.innerHTML = `
          <p class="eyebrow">Paso 2/4 — GENERAR ALTERNATIVAS</p>
          <h2>Piensa diferentes formas de afrontarlo</h2>
          <p>Selecciona 2 alternativas posibles.</p>
          ${[
            'Hablar con alguien de confianza sobre cómo me siento',
            'Revisar qué parte puedo mejorar para la próxima vez',
            'Quedarme sin hacer nada y culparme todo el día'
          ].map((t,i) => `<button class="vn-choice" data-i="${i}">${t}</button>`).join('')}
          <div class="vn-actions"><button class="primary-action" data-next disabled>Continuar</button><span style="font-size:0.8rem;opacity:0.6" data-hint>Elige 2</span></div>
        `;
        const chosen = new Set();
        this.shell.querySelectorAll('[data-i]').forEach(b => b.addEventListener('click', () => {
          const i = Number(b.dataset.i);
          if (chosen.has(i)) { chosen.delete(i); b.classList.remove('selected', 'correct'); }
          else if (chosen.size < 2) { chosen.add(i); b.classList.add('selected','correct'); }
          const btn = this.shell.querySelector('[data-next]');
          btn.disabled = chosen.size !== 2;
          if (chosen.size === 2) {
            alternativas = [...chosen].map(idx => this.shell.querySelectorAll('[data-i]')[idx].textContent);
          }
        }));
        this.shell.querySelector('[data-next]').addEventListener('click', () => { if (alternativas.length===2) { step=2; render(); }});
      } else if (step === 2) {
        this.shell.innerHTML = `
          <p class="eyebrow">Paso 3/4 — ELEGIR UNA ALTERNATIVA</p>
          <h2>Elige una opción posible y adecuada</h2>
          ${alternativas.map((t,i) => `<button class="vn-choice" data-i="${i}">${t}</button>`).join('')}
        `;
        this.shell.querySelectorAll('[data-i]').forEach(b => b.addEventListener('click', () => { elegida = b.textContent; step=3; render(); }));
      } else if (step === 3) {
        this.shell.innerHTML = `
          <p class="eyebrow">Paso 4/4 — ACTUAR</p>
          <h2>Ponlo en práctica</h2>
          <p>Elegiste: <strong>${elegida}</strong></p>
          <p>Haz clic para actuar dentro del escenario.</p>
          <div class="vn-gamezone" data-act style="display:grid;place-items:center;font-size:48px;cursor:pointer">🌱</div>
        `;
        const zone = this.shell.querySelector('[data-act]');
        zone.addEventListener('click', () => {
          this.addTool('Herramienta de acción');
          this.shell.innerHTML = `
            <p class="eyebrow">Solución completada</p>
            <h2>¡Acción realizada!</h2>
            <p>Cuando existe algo que podemos modificar, identificar alternativas y actuar puede ayudarnos a afrontar la situación.</p>
            <p><span class="vn-badge">+ Herramienta de acción</span></p>
            ${this.renderInventory()}
            <div class="vn-actions"><button class="primary-action" data-next>Continuar</button></div>
          `;
          this.shell.querySelector('[data-next]').addEventListener('click', () => this.showReevaluacionIntensidad());
        });
      }
    };
    render();
  }

  // 6.5 Búsqueda de apoyo social
  showApoyo() {
    this.shell.innerHTML = `
      <p class="eyebrow">Búsqueda de apoyo social — No tienes que hacerlo solo</p>
      <h2>Encuentra a una persona de confianza</h2>
      <p>Haz clic en la persona de confianza del escenario.</p>
      <div class="vn-gamezone" data-zone style="height:220px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;place-items:center">
        ${[
          { label: '🧑‍🏫 Desconocido', trusted: false },
          { label: '🧑‍🤝‍🧑 Amiga de confianza', trusted: true },
          { label: '😐 Persona distante', trusted: false },
        ].map((p,i) => `<button class="vn-card" data-trusted="${p.trusted}" style="text-align:center;font-size:1.4rem">${p.label}</button>`).join('')}
      </div>
    `;
    this.shell.querySelectorAll('[data-trusted]').forEach(btn => {
      btn.addEventListener('click', () => {
        const ok = btn.dataset.trusted === 'true';
        if (!ok) {
          btn.style.borderColor = '#e76856';
          return;
        }
        this.shell.innerHTML = `
          <p class="eyebrow">Persona de confianza encontrada</p>
          <h2>¿Quieres contarme qué ocurrió?</h2>
          <p>Selecciona una respuesta que permita expresar lo que sientes.</p>
          ${[
            'Me siento triste porque perdí algo importante para mí y me gustaría hablar de ello.',
            'No me pasa nada.',
            'Todo está mal por culpa de los demás.'
          ].map((t,i) => `<button class="vn-choice" data-i="${i}">${t}</button>`).join('')}
        `;
        this.shell.querySelectorAll('[data-i]').forEach(b => b.addEventListener('click', () => {
          const good = Number(b.dataset.i) === 0;
          b.classList.add(good ? 'correct' : 'wrong');
          setTimeout(() => {
            this.addTool('Corazón de apoyo');
            this.shell.innerHTML = `
              <p class="eyebrow">Apoyo encontrado</p>
              <h2>${good ? 'Gracias por compartir' : 'Intento valioso'}</h2>
              <p>Buscar apoyo puede ayudarte a expresar lo que sientes y afrontar situaciones difíciles.</p>
              <p><span class="vn-badge">+ Corazón de apoyo</span></p>
              ${this.renderInventory()}
              <div class="vn-actions"><button class="primary-action" data-next>Continuar</button></div>
            `;
            this.shell.querySelector('[data-next]').addEventListener('click', () => this.showReevaluacionIntensidad());
          }, 400);
        }));
      });
    });
  }

  // 9. Reevaluación
  showReevaluacionIntensidad() {
    this.showEtapa3(true);
  }

  // 10. Retroalimentación
  showRetroalimentacion() {
    const order = { baja: 0, media: 1, alta: 2 };
    const ini = order[this.intensidad_inicial];
    const post = order[this.intensidad_posterior];
    let estado = 'igual';
    if (post < ini) estado = 'disminuye';
    else if (post > ini) estado = 'aumenta';

    if (estado === 'disminuye') {
      this.setAtmosphere(this.intensidad_posterior);
      this.shell.innerHTML = `
        <p class="eyebrow">Retroalimentación</p>
        <h2>La intensidad de tu tristeza disminuyó.</h2>
        <p>Has practicado una estrategia que puede ayudarte a afrontar esta situación.</p>
        ${this.renderInventory()}
        <div class="vn-actions"><button class="primary-action" data-final>Ir al desafío final</button></div>
      `;
      this.shell.querySelector('[data-final]').addEventListener('click', () => this.showDesafioFinal());
    } else if (estado === 'igual') {
      this.shell.innerHTML = `
        <p class="eyebrow">Retroalimentación</p>
        <h2>La tristeza continúa presente.</h2>
        <p>Una estrategia no siempre cambia inmediatamente la intensidad de una emoción.</p>
        <p>Puedes practicar nuevamente o probar otra estrategia.</p>
        <div class="vn-actions">
          <button class="primary-action" data-retry>PRACTICAR NUEVAMENTE</button>
          <button class="secondary-action" data-otra>ELEGIR OTRA ESTRATEGIA</button>
        </div>
      `;
      this.shell.querySelector('[data-retry]').addEventListener('click', () => this.launchMinijuego(this.estrategia_utilizada));
      this.shell.querySelector('[data-otra]').addEventListener('click', () => this.showEstrategias());
    } else {
      this.shell.innerHTML = `
        <p class="eyebrow">Retroalimentación</p>
        <h2>La emoción continúa siendo intensa.</h2>
        <p>Haz una pausa, reconoce lo que estás sintiendo y considera buscar apoyo de una persona de confianza.</p>
        <div class="vn-actions"><button class="primary-action" data-apoyo>BUSCAR APOYO EN ALGUIEN CERCANO O UN PROFESIONAL</button></div>
      `;
      this.shell.querySelector('[data-apoyo]').addEventListener('click', () => {
        if (this.getEstrategiasPara(this.intensidad_inicial).some(e => e.id === 'apoyo')) this.showApoyo();
        else {
          // Forzar apoyo aunque no estaba disponible
          this.estrategia_utilizada = 'apoyo';
          this.showApoyo();
        }
      });
    }
  }

  // 11. Desafío final
  showDesafioFinal() {
    this.shell.innerHTML = `
      <p class="eyebrow">Desafío final — Atraviesa la nube</p>
      <h2>La tristeza no tiene que desaparecer para que puedas continuar.</h2>
      <p>Utiliza lo que aprendiste para atravesar la nube.</p>
      <p>Elige una habilidad de tu caja:</p>
      <div class="vn-strategies">
        ${[...this.caja_de_herramientas_emocionales].map(t => `<button class="vn-strat" data-tool="${t}">${t}</button>`).join('') || '<p>Aún no tienes herramientas, usa la aceptación.</p>'}
      </div>
      <div class="vn-actions"><button class="secondary-action" data-skip>Usar Aceptación</button></div>
    `;
    const doChallenge = (tool) => {
      this.shell.innerHTML = `
        <p class="eyebrow">Atravesando la nube con ${tool}</p>
        <div class="vn-gamezone" data-cloudzone style="height:200px;display:grid;place-items:center;background:radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.95), transparent 70%)">
          <div style="font-size:48px" data-cloud>☁️</div>
          <button class="primary-action" data-avanzar>Avanzar con ${tool}</button>
        </div>
      `;
      const cloud = this.shell.querySelector('[data-cloud]');
      let progress = 0;
      this.shell.querySelector('[data-avanzar]').addEventListener('click', () => {
        progress += 1;
        cloud.style.transform = `scale(${1 - progress * 0.18})`;
        cloud.style.opacity = String(1 - progress * 0.22);
        this.setAtmosphere(progress >= 3 ? 'baja' : 'media');
        if (progress >= 3) {
          this.shell.innerHTML = `
            <p class="eyebrow">¡Nube atravesada!</p>
            <h2>La nube disminuye, aparece luz y se desbloquea el camino.</h2>
            ${this.renderInventory()}
            <div class="vn-actions"><button class="primary-action" data-cierre>Continuar</button></div>
          `;
          this.shell.querySelector('[data-cierre]').addEventListener('click', () => this.showCierre());
        }
      });
    };
    this.shell.querySelectorAll('[data-tool]').forEach(b => b.addEventListener('click', () => doChallenge(b.dataset.tool)));
    const skip = this.shell.querySelector('[data-skip]');
    if (skip) skip.addEventListener('click', () => doChallenge('Aceptación'));
  }

  // 12. Cierre psicoeducativo
  showCierre() {
    this.shell.innerHTML = `
      <p class="eyebrow">Cierre</p>
      <h1>¡HAS COMPLETADO EL VALLE DE LAS NUBES!</h1>
      <p>La tristeza es una emoción que puede aparecer ante pérdidas, separaciones, decepciones, rechazos o cambios significativos.</p>
      <p>Reconocer qué estás sintiendo y qué tan intensa es la emoción puede ayudarte a decidir cómo afrontarla.</p>
      <p>Existen diferentes estrategias de regulación emocional. Aprender a utilizarlas de manera flexible puede ayudarte a afrontar diferentes situaciones.</p>
      <p>Recuerda: regular una emoción no significa eliminarla. Significa aprender a reconocerla y encontrar maneras adecuadas de afrontarla.</p>
      <h2 style="margin-top:16px">Recompensas</h2>
      ${this.renderInventory()}
      <p><span class="vn-badge">Insignia: GUARDIÁN DE LA TRISTEZA</span> · Gotas de comprensión · Estrellas emocionales</p>
      <div class="vn-actions"><button class="primary-action" data-fin>CONTINUAR A LA SIGUIENTE ISLA</button></div>
    `;
    this.shell.querySelector('[data-fin]').addEventListener('click', () => {
      this.onComplete({
        success: true,
        score: this.puntos + this.gotas,
        target: 5,
        islandId: this.island.id,
        title: 'Valle de las Nubes',
        message: 'Has completado el Valle de las Nubes. La tristeza no desaparece, pero ahora tienes herramientas para afrontarla.'
      });
    });
  }
}
