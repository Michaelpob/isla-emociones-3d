// EMO-AVENTURA · GUARDIANES DEL DESAGRADO
// "Territorio de las sensaciones incomodas"
// Zonas: Pantano de los Olores · Cueva de los Sabores · Bosque de las Imagenes · Zona de Rechazo
// Flujo: INICIO -> ZONAS -> ¿ESTO ME GENERA DESAGRADO? -> ESPEJO DE LAS REACCIONES ->
// TERMOMETRO -> ESTRATEGIAS SEGUN NIVEL -> REEVALUACION -> PROTEGE LA ISLA -> CIERRE

import { Stage, ABORTED } from '../../engine/Stage.js?v=20260908175209';
import {
  startBreathingExercise,
  startAttentionGame,
  startGroundingGame,
  startReevaluationGame,
  sequenceActivity,
  signalMirror,
  intensityThermometer,
  alternativeStrategyNotice,
  reevaluationScreen
} from '../../engine/activities.js?v=20260908175209';
import {
  completeActivity,
  setInitialIntensity,
  setStrategy,
  recordReevaluation,
  gameState
} from '../../data/gameState.js?v=20260908175209';

export class DisgustGuardiansGame {
  constructor({ host, island, player, onComplete, onExit, onOpenToolbox }) {
    this.host = host;
    this.island = island;
    this.player = player;
    this.onComplete = onComplete;
    this.onExit = onExit;
    this.onOpenToolbox = onOpenToolbox;
    this.doneStrategies = new Set();
    this.usedTools = new Set();
  }

  mount() {
    this.stage = new Stage({
      host: this.host,
      island: this.island,
      theme: 'disgust',
      player: this.player,
      onExit: () => this.onExit?.(),
      onOpenToolbox: this.onOpenToolbox
    });
    this.stage.mount();
    this.run().catch((err) => {
      if (err !== ABORTED) console.error('[guardianes-del-desagrado]', err);
    });
  }

  dispose() {
    this.stage?.dispose();
    this.stage = null;
  }

  async run() {
    const s = this.stage;
    s.setScene('pantano');
    s.setAmbient(0.6);
    s.ambientSound('disgust');
    s.setTitle('Guardianes del Desagrado', 'Territorio de las sensaciones incomodas');

    /* -------------------------------------------------------------- INICIO */
    await s.say(
      'Llegas a los <strong>Guardianes del Desagrado</strong>, el territorio de las sensaciones incomodas. Hay niebla verdosa, burbujas y vegetacion espesa. Es extrano, pero es un lugar seguro.',
      { avatar: '🍃', who: 'Guardianes del Desagrado' }
    );
    await s.say(
      'El desagrado protege: nos avisa de algo que podria hacernos dano. Aqui vas a aprender a sentirlo sin salir corriendo ni reaccionar de golpe.',
      { avatar: '🛖', who: 'Guardian de la isla' }
    );

    /* --------------------------------------------------------------- ZONAS */
    await this.tourZones();

    /* -------------------------------------------- ¿ESTO ME GENERA DESAGRADO? */
    await s.transition('¿Esto me genera desagrado?');
    await this.identifyDisgust();

    /* ------------------------------------------------ ESPEJO DE LAS REACCIONES */
    await s.transition('Espejo de las Reacciones');
    await signalMirror(s, {
      title: 'Espejo de las Reacciones',
      subtitle: 'Toca cada reaccion del desagrado para entender que hace por ti.',
      groups: [
        {
          title: 'El cuerpo reacciona',
          icon: '🫁',
          items: [
            { id: 'nariz', icon: '👃', label: 'Arrugar la nariz', text: 'Es un gesto automatico: reduce la entrada de aire y de olores. Tu cuerpo se protege antes de que lo pienses.' },
            { id: 'rechazo', icon: '😖', label: 'Expresion de rechazo', text: 'La cara avisa a los demas que algo no esta bien. El desagrado tambien comunica.' },
            { id: 'nauseas', icon: '🤢', label: 'Nauseas', text: 'El estomago se prepara para rechazar algo. Es incomodo y cumple una funcion protectora.' },
            { id: 'tension', icon: '🧊', label: 'Tension corporal', text: 'Los musculos se contraen para alejarte. Notarlo te da la oportunidad de decidir.' }
          ]
        },
        {
          title: 'Lo que hago',
          icon: '🚶',
          items: [
            { id: 'alejarse', icon: '↩️', label: 'Alejarme', text: 'Poner distancia es una respuesta util cuando algo puede danarte de verdad.' },
            { id: 'evitar', icon: '🚫', label: 'Evitar', text: 'Evitar siempre y todo puede achicar tu mundo. Conviene revisar si el riesgo es real.' },
            { id: 'decir', icon: '🗣️', label: 'Decir "no me gusta"', text: 'Poner en palabras lo que sientes es una forma cuidada de expresar el rechazo.' }
          ]
        }
      ]
    });
    completeActivity('disgust-espejo', 5);
    s.addPoints(5);

    /* ---------------------------------------------------------- TERMOMETRO */
    await s.transition('Termometro del Desagrado');
    const level = await intensityThermometer(s, {
      title: 'Termometro del Desagrado',
      emotion: 'desagrado',
      levels: [
        { id: 'baja', label: 'NIVEL 1 · LEVE', text: 'Me incomoda, pero puedo manejarlo.' },
        { id: 'media', label: 'NIVEL 2 · MODERADO', text: 'Mi desagrado esta aumentando.' },
        { id: 'alta', label: 'NIVEL 3 · INTENSO', text: 'Mi emocion esta muy fuerte y necesito detenerme.' }
      ],
      onChange: (id) => {
        s.setAmbient({ baja: 0.35, media: 0.68, alta: 1 }[id] ?? 0.6);
        s.el.world.dataset.slow = id === 'alta' ? 'true' : '';
      }
    });
    setInitialIntensity(level.id);
    s.setIntensity(level.id);

    if (level.id === 'alta') {
      s.setScene('niebla-verde');
      s.el.world.dataset.slow = 'true';
      await s.say(
        'Tu desagrado esta muy intenso. Haz una pausa antes de actuar.',
        { avatar: '🌫️', who: 'Guardian de la isla' }
      );
    }

    /* --------------------------------------------------------- ESTRATEGIAS */
    await this.strategyLoop(level.id);

    /* ---------------------------------------------------------- REEVALUACION */
    await s.transition('Reevaluacion');
    let result = await reevaluationScreen(s, {
      emotion: 'desagrado',
      question: '¿COMO ESTA AHORA TU DESAGRADO?',
      initial: gameState.initialIntensity ?? 'media',
      strategyLabel: [...this.doneStrategies].join(' + ') || 'Estrategias del territorio'
    });
    while (result.again) {
      await startBreathingExercise(s, {
        cycles: 3,
        title: 'Practicamos otra vez',
        subtitle: 'Repetir tambien es parte de aprender.',
        onCycle: () => s.burstParticles(3, '·')
      });
      result = await reevaluationScreen(s, {
        emotion: 'desagrado',
        question: '¿COMO ESTA AHORA TU DESAGRADO?',
        initial: gameState.initialIntensity ?? 'media',
        strategyLabel: 'Respiracion consciente'
      });
    }
    recordReevaluation('disgust', gameState.initialIntensity ?? 'media', [...this.doneStrategies].join(' + '), result.finalIntensity);

    /* ------------------------------------------------------- PROTEGE LA ISLA */
    await s.transition('Desafio final · Protege la isla');
    await this.protectIsland();

    /* --------------------------------------------------------------- CIERRE */
    s.setScene('isla-limpia');
    s.setAmbient(0.12);
    delete s.el.world.dataset.slow;
    s.setCharacterState('celebrate');
    s.burstParticles(30, '🍃');
    await s.say(
      'La niebla se disipa y la isla recupera su color. La Reaccion Impulsiva se hizo pequena: sigue ahi, pero ya no decide por ti.',
      { avatar: '🌿', who: 'Guardianes del Desagrado', cta: 'Recibir insignia' }
    );

    this.onComplete?.({
      islandId: 'disgust',
      success: true,
      emoAventura: true,
      badge: 'disgust',
      title: 'Guardianes del Desagrado',
      message: 'Reconociste el desagrado, lo sostuviste sin reaccionar de golpe y protegiste la isla con tus herramientas.'
    });
  }

  /* ================================================================ ZONAS */

  async tourZones() {
    const s = this.stage;
    const zones = [
      { id: 'olores', x: 16, icon: '🫧', name: 'Pantano de los Olores', scene: 'pantano', text: 'El aire trae olores fuertes. La nariz se arruga sola: es la primera respuesta del cuerpo, y aparece antes de que decidas nada.' },
      { id: 'sabores', x: 40, icon: '🕳️', name: 'Cueva de los Sabores', scene: 'cueva', text: 'Dentro de la cueva hay sabores amargos y desconocidos. El desagrado ayudo a nuestros antepasados a no comer lo que podia danarlos.' },
      { id: 'imagenes', x: 64, icon: '🌳', name: 'Bosque de las Imagenes', scene: 'bosque', text: 'Aqui hay cosas que no quieres mirar. Puedes apartar la vista y seguir estando bien: no todo hay que mirarlo de frente.' },
      { id: 'rechazo', x: 88, icon: '🚧', name: 'Zona de Rechazo', scene: 'rechazo', text: 'A veces el desagrado aparece frente a situaciones o conductas, no frente a cosas. Tambien es informacion sobre lo que te importa.' }
    ];
    let visited = 0;

    await s.say('Recorre las cuatro zonas del territorio. Cada una despierta el desagrado de una manera distinta.', { avatar: '🗺️', cta: 'Recorrer' });

    await s.interaction((done) => {
      const props = s.setProps(zones.map((z) => `
        <button class="dis-zone" type="button" data-zone="${z.id}" style="--x:${z.x}%">
          <span class="dis-zone__icon" aria-hidden="true">${z.icon}</span>
          <span class="dis-zone__label">${z.name}</span>
        </button>
      `).join(''));
      const counter = document.createElement('p');
      counter.className = 'emo-hint';
      counter.textContent = 'Zonas recorridas: 0/4';
      props.appendChild(counter);

      props.addEventListener('click', async (e) => {
        const btn = e.target.closest('[data-zone]');
        if (!btn || btn.classList.contains('is-done')) return;
        const zone = zones.find((z) => z.id === btn.dataset.zone);
        props.querySelectorAll('[data-zone]').forEach((b) => { b.disabled = true; });
        try {
          await s.walkTo(zone.x, { speed: 'lenta' });
          s.setScene(zone.scene);
          await s.react('disgust', 800);
          await s.say(zone.text, { avatar: zone.icon, who: zone.name });
        } catch (err) {
          if (err === ABORTED) return;
          throw err;
        }
        if (s.disposed) return;
        btn.classList.add('is-done');
        visited += 1;
        counter.textContent = `Zonas recorridas: ${visited}/4`;
        props.querySelectorAll('[data-zone]').forEach((b) => { b.disabled = b.classList.contains('is-done'); });
        s.addPoints(3, { silent: true });
        if (visited >= zones.length) {
          completeActivity('disgust-zonas', 5);
          s.clearProps();
          s.setScene('pantano');
          done(true);
        }
      });
    });
  }

  /* ============================================ ¿ESTO ME GENERA DESAGRADO? */

  async identifyDisgust() {
    const s = this.stage;
    await s.say('Vamos a reconocer cuando aparece el desagrado. Marca <strong>todas</strong> las situaciones que crees que lo generan.', { avatar: '🔎' });

    const options = [
      { id: 'a', icon: '🥫', label: 'A. Encontrar comida en mal estado.', disgust: true },
      { id: 'b', icon: '🎵', label: 'B. Escuchar una cancion que me gusta.', disgust: false },
      { id: 'c', icon: '👃', label: 'C. Percibir un olor muy desagradable.', disgust: true },
      { id: 'd', icon: '🙅', label: 'D. Ver una situacion que me produce rechazo.', disgust: true }
    ];

    await s.panel((body, done) => {
      const picked = new Set();
      body.innerHTML = `
        <div class="dis-quiz">
          <div class="dis-quiz__options">
            ${options.map((o) => `
              <button class="emo-choice emo-choice--wide" type="button" data-id="${o.id}">
                <span class="emo-choice__icon" aria-hidden="true">${o.icon}</span>
                <span class="emo-choice__text"><strong>${o.label}</strong></span>
                <span class="dis-quiz__mark" aria-hidden="true"></span>
              </button>
            `).join('')}
          </div>
          <p class="dis-quiz__note" data-note aria-live="polite">Puedes marcar mas de una. Ninguna eleccion resta puntos.</p>
          <button class="emo-btn emo-btn--primary" type="button" data-finish>Confirmar</button>
        </div>
      `;
      const note = body.querySelector('[data-note]');
      body.querySelectorAll('[data-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          if (picked.has(id)) { picked.delete(id); btn.classList.remove('is-picked'); }
          else { picked.add(id); btn.classList.add('is-picked'); s.playTone(560, 0.05); }
          note.textContent = `Marcadas: ${picked.size}`;
        });
      });
      body.querySelector('[data-finish]').addEventListener('click', () => done([...picked]));
    }, { title: '¿Esto me genera desagrado?', subtitle: 'Marca las situaciones que despiertan desagrado.', className: 'emo-panel--quiz' });

    await s.showFeedback(
      'El desagrado puede aparecer frente a diferentes estimulos y no todas las personas reaccionan de la misma manera.',
      { title: 'Lo que acabas de ver', tone: 'info' }
    );

    completeActivity('disgust-identificacion', 5);
    s.addPoints(5);

    // Insignia de Explorador del Desagrado
    await s.panel((body, done) => {
      body.innerHTML = `
        <div class="dis-badge">
          <div class="dis-badge__icon" aria-hidden="true">🧭</div>
          <h4>Insignia de Explorador del Desagrado</h4>
          <p>Reconociste que el desagrado aparece frente a estimulos distintos y que cada persona reacciona a su manera.</p>
          <button class="emo-btn emo-btn--primary" type="button" data-ok>Guardar insignia</button>
        </div>
      `;
      body.querySelector('[data-ok]').focus({ preventScroll: true });
      body.querySelector('[data-ok]').addEventListener('click', () => done(true));
    }, { title: 'Nueva insignia', className: 'emo-panel--badge' });
    s.toast('🧭 Insignia de Explorador del Desagrado', { icon: '🏅' });
    s.addPoints(5);
  }

  /* ========================================================== ESTRATEGIAS */

  async strategyLoop(intensity) {
    const s = this.stage;

    const strategies = [
      {
        id: 'control', label: 'Toma el control', icon: '💎', levels: ['baja'],
        detail: 'Respiracion consciente · desagrado leve',
        run: () => this.takeControl()
      },
      {
        id: 'atencion', label: 'Cambio mi atencion', icon: '✨', levels: ['media'],
        detail: 'Despliegue atencional · desagrado moderado',
        run: () => this.shiftAttention()
      },
      {
        id: 'reconozco', label: 'Me detengo y reconozco', icon: '🌱', levels: ['media'],
        detail: 'Jardin de las Sensaciones · desagrado moderado',
        run: () => this.gardenOfSensations()
      },
      {
        id: 'presente', label: 'Regreso al presente', icon: '🪷', levels: ['alta'],
        detail: 'Anclaje 5-4-3-2-1 · desagrado intenso',
        run: () => this.backToPresent()
      },
      {
        id: 'respuesta', label: 'Cambio mi respuesta', icon: '🔮', levels: ['alta'],
        detail: 'Reevaluacion cognitiva · desagrado intenso',
        run: () => this.changeResponse()
      },
      {
        id: 'apoyo', label: 'No tengo que hacerlo solo', icon: '❤️‍🩹', levels: ['alta'],
        detail: 'Guardian de Confianza · desagrado intenso',
        run: () => this.askForSupport()
      }
    ];

    const recommended = strategies.filter((st) => st.levels.includes(intensity));
    // Se cuentan estrategias sugeridas *distintas*: repetir una no cuenta como otra.
    const doneRecommended = new Set();

    while (true) {
      if (s.disposed) return;
      const options = strategies.map((st) => ({
        id: st.id,
        icon: st.icon,
        label: `${st.label}${this.doneStrategies.has(st.label) ? ' ✓' : ''}`,
        detail: st.detail + (st.levels.includes(intensity) ? ' · sugerida para tu nivel' : '')
      }));
      if (doneRecommended.size >= recommended.length || this.doneStrategies.size >= 2) {
        options.push({ id: '__done', icon: '➡️', label: 'Seguir hacia la reevaluacion', detail: 'Ya practicaste lo suficiente para revisar como estas.' });
      }

      const picked = await s.choices(options, {
        title: 'Elige una estrategia',
        prompt: `Tu desagrado esta en nivel <strong>${intensity.toUpperCase()}</strong>. Puedes elegir cualquiera: ninguna resta puntos.`,
        columns: 2
      });
      if (picked.id === '__done') return;

      const strategy = strategies.find((st) => st.id === picked.id);
      if (!strategy.levels.includes(intensity)) {
        const decision = await alternativeStrategyNotice(s);
        if (decision === 'others') continue;
      }
      setStrategy(strategy.label);
      await strategy.run();
      this.doneStrategies.add(strategy.label);
      if (strategy.levels.includes(intensity)) doneRecommended.add(strategy.id);
    }
  }

  /* ------------------------------------------------- LEVE: toma el control */

  async takeControl() {
    const s = this.stage;
    s.setTitle('Toma el control', 'Desagrado leve');
    await s.say('Cuando el desagrado es leve, la respiracion consciente alcanza para sostenerlo sin salir corriendo.', { avatar: '💎' });

    await sequenceActivity(s, {
      title: 'Respiracion consciente',
      subtitle: 'Los cinco pasos, en orden.',
      steps: [
        { label: 'DETENERSE', text: 'Frena lo que estas haciendo.', feedback: 'Parar es el primer control.' },
        { label: 'TOMAR AIRE POR LA NARIZ', text: 'Lentamente, sin forzar.', feedback: 'El aire entra despacio.' },
        { label: 'MANTENER', text: 'Sostiene unos segundos.', feedback: 'Ese momento ordena el ritmo.' },
        { label: 'SOLTAR POR LA BOCA', text: 'Deja salir el aire despacio.', feedback: 'Al exhalar largo, el cuerpo se calma.' },
        { label: 'REPETIR 3 A 5 VECES', text: 'Ahora lo haces con el circulo guia.', feedback: 'Vamos a practicarlo de verdad.' }
      ],
      onStep: () => s.burstParticles(4, '·')
    });

    await startBreathingExercise(s, {
      cycles: 4,
      title: 'Toma el control',
      subtitle: 'Manten presionado para inhalar por la nariz y suelta para exhalar por la boca.',
      onCycle: (done, total) => {
        s.setAmbient(Math.max(0.2, 0.6 - (done / total) * 0.4));
        s.burstParticles(4, '🫧');
      },
      closingText: 'Puedo sentir desagrado y mantener la calma.'
    });

    await s.showFeedback('Puedo sentir desagrado y mantener la calma.', { title: 'Lo que acabas de comprobar' });
    completeActivity('disgust-control', 10);
    s.addPoints(10);
    await s.reward('cristal-calma', 'La calma no elimina el desagrado: te permite decidir con el presente.', 5);
  }

  /* ------------------------------------------ MODERADO: cambio mi atencion */

  async shiftAttention() {
    const s = this.stage;
    s.setTitle('Cambio mi atencion', 'Desagrado moderado');
    await s.say('Cuando la emocion ocupa demasiado espacio, mover la atencion un rato ayuda a recuperar el control.', { avatar: '✨' });

    const palette = ['#4a7c59', '#3f6d54', '#55806a', '#46785c'];
    const icons = ['🍄', '🌿', '🪵', '🐌', '🍂', '🪨', '🦎', '🌾'];
    const items = [];
    for (let i = 0; i < 22; i += 1) {
      items.push({
        icon: icons[i % icons.length],
        color: palette[i % palette.length],
        label: 'objeto del pantano',
        target: false,
        x: 6 + Math.random() * 88,
        y: 8 + Math.random() * 78
      });
    }
    const targetPositions = [
      { x: 14, y: 22 }, { x: 68, y: 15 }, { x: 40, y: 58 }, { x: 84, y: 66 }, { x: 25, y: 80 }
    ];
    targetPositions.forEach((p, i) => {
      items.push({ icon: ['🌼', '🍊', '🟡', '⭐', '🔆'][i], color: '#ffb703', label: 'objeto dorado', target: true, x: p.x, y: p.y });
    });

    await startAttentionGame(s, {
      title: 'Cambio mi atencion',
      subtitle: 'Encuentra 5 objetos de color diferente.',
      count: 5,
      targetLabel: 'dorados',
      items,
      message: 'Cuando una emocion ocupa demasiado espacio, dirigir temporalmente nuestra atencion hacia otra actividad puede ayudarnos a recuperar el control.'
    });

    await s.showFeedback(
      'Cuando una emocion ocupa demasiado espacio, dirigir temporalmente nuestra atencion hacia otra actividad puede ayudarnos a recuperar el control.',
      { title: 'Despliegue atencional', tone: 'info' }
    );
    completeActivity('disgust-atencion', 10);
    s.addPoints(10);
    await s.reward('estrella-atencion', 'Cambiar el foco no es negar lo que pasa: es darte un respiro para poder decidir.', 5);
  }

  /* ------------------------------- MODERADO: me detengo y reconozco (jardin) */

  async gardenOfSensations() {
    const s = this.stage;
    s.setScene('jardin-sensaciones');
    s.setTitle('Jardin de las Sensaciones', 'Me detengo y reconozco');
    await s.walkTo(45, { speed: 'lenta' });
    await s.say('En el <strong>Jardin de las Sensaciones</strong> hay una semilla. Crece cuando reconoces lo que sientes en lugar de empujarlo lejos.', { avatar: '🌱', who: 'Jardin' });

    await s.panel((body, done) => {
      const steps = [
        { key: 'reconocer', title: 'RECONOCER', phrase: 'Estoy sintiendo desagrado.' },
        { key: 'comprender', title: 'COMPRENDER', phrase: 'Algo de esta situacion esta generando rechazo o incomodidad en mi.' },
        { key: 'aceptar', title: 'ACEPTAR', phrase: 'Puedo sentir desagrado sin reaccionar impulsivamente.' }
      ];
      let index = 0;
      body.innerHTML = `
        <div class="seed">
          <div class="seed__pot">
            <div class="seed__plant" data-plant style="--grow:0">
              <span class="seed__leaf seed__leaf--a" aria-hidden="true">🌱</span>
              <span class="seed__leaf seed__leaf--b" aria-hidden="true">🌿</span>
              <span class="seed__leaf seed__leaf--c" aria-hidden="true">🌸</span>
            </div>
          </div>
          <div class="seed__steps">
            ${steps.map((st, i) => `
              <button class="seed__step" type="button" data-i="${i}">
                <strong>${st.title}</strong>
                <span>"${st.phrase}"</span>
              </button>
            `).join('')}
          </div>
          <p class="seed__note" data-note aria-live="polite">Toca <strong>RECONOCER</strong> para empezar.</p>
          <button class="emo-btn emo-btn--primary" type="button" data-finish hidden>Continuar</button>
        </div>
      `;
      const plant = body.querySelector('[data-plant]');
      const note = body.querySelector('[data-note]');
      const finish = body.querySelector('[data-finish]');
      body.querySelectorAll('[data-i]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const i = Number(btn.dataset.i);
          if (i !== index) {
            note.textContent = `Primero: ${steps[index].title}.`;
            btn.classList.add('is-shake');
            setTimeout(() => btn.classList.remove('is-shake'), 400);
            return;
          }
          btn.classList.add('is-done');
          index += 1;
          plant.style.setProperty('--grow', String(index / steps.length));
          plant.classList.add('is-growing');
          setTimeout(() => plant.classList.remove('is-growing'), 700);
          s.playTone(480 + index * 90, 0.07);
          s.burstParticles(6, '🌿');
          note.innerHTML = `<em>"${steps[i].phrase}"</em>`;
          if (index >= steps.length) {
            note.innerHTML = 'La semilla creció. Aceptar una emocion no significa que te guste lo que esta ocurriendo: significa reconocer lo que sientes antes de decidir como actuar.';
            finish.hidden = false;
            finish.focus({ preventScroll: true });
          }
        });
      });
      finish.addEventListener('click', () => done({ index }));
    }, { title: 'Jardin de las Sensaciones', subtitle: 'Tres pasos: reconocer, comprender y aceptar.', className: 'emo-panel--seed' });

    await s.showFeedback(
      'Aceptar una emocion no significa que te guste lo que esta ocurriendo. Significa reconocer lo que sientes antes de decidir como actuar.',
      { title: 'Aceptacion', tone: 'info' }
    );
    completeActivity('disgust-aceptacion', 10);
    s.addPoints(10);
    await s.reward('semilla-aceptacion', 'Lo que reconoces deja de empujarte por dentro: puedes elegir que hacer con ello.', 5);
  }

  /* ------------------------------------ INTENSO: regreso al presente 5-4-3-2-1 */

  async backToPresent() {
    const s = this.stage;
    s.setScene('niebla-verde');
    s.setTitle('Regreso al presente', 'Desagrado intenso');
    s.el.world.dataset.slow = 'true';
    await s.walkTo(40, { speed: 'lenta' });
    await s.say('La niebla verde espesa el aire y todo se mueve mas lento. Vamos a anclarte en lo que hay <strong>aqui y ahora</strong>.', { avatar: '🪷', who: 'Guardian' });

    await startGroundingGame(s, {
      title: 'Regreso al presente · 5-4-3-2-1',
      subtitle: 'Encuentra en el entorno lo que te pide cada sentido.',
      senses: [
        {
          icon: '👀', count: 5, prompt: 'cosas que puedes VER',
          items: [
            { icon: '🌳', label: 'un arbol torcido' }, { icon: '🪨', label: 'una piedra musgosa' },
            { icon: '🫧', label: 'burbujas en el agua' }, { icon: '🍂', label: 'hojas caidas' },
            { icon: '🌫️', label: 'niebla entre las ramas' }, { icon: '🦎', label: 'una lagartija quieta' }
          ]
        },
        {
          icon: '✋', count: 4, prompt: 'cosas que puedes TOCAR',
          items: [
            { icon: '🪵', label: 'corteza aspera' }, { icon: '🌿', label: 'una hoja humeda' },
            { icon: '🪨', label: 'piedra fria' }, { icon: '👕', label: 'tu propia ropa' },
            { icon: '💧', label: 'gotas en la mano' }
          ]
        },
        {
          icon: '👂', count: 3, prompt: 'sonidos que puedes ESCUCHAR',
          items: [
            { icon: '🐸', label: 'una rana lejana' }, { icon: '💨', label: 'el viento entre juncos' },
            { icon: '💦', label: 'agua moviendose' }, { icon: '🫁', label: 'tu propia respiracion' }
          ]
        },
        {
          icon: '👃', count: 2, prompt: 'olores que puedes PERCIBIR',
          items: [
            { icon: '🌱', label: 'tierra mojada' }, { icon: '🌸', label: 'una flor cercana' },
            { icon: '🍃', label: 'hierba cortada' }
          ]
        },
        {
          icon: '👅', count: 1, prompt: 'sabor que puedes NOTAR',
          items: [
            { icon: '💧', label: 'agua fresca' }, { icon: '🌰', label: 'un fruto seco' }
          ]
        }
      ],
      closing: 'Estoy aqui. Puedo detenerme y decidir que hacer.'
    });

    delete s.el.world.dataset.slow;
    s.setAmbient(0.45);
    await s.showFeedback('Estoy aqui. Puedo detenerme y decidir que hacer.', { title: 'De vuelta en el presente' });
    completeActivity('disgust-presente', 10);
    s.addPoints(10);
    await s.reward('estrella-presente', 'El anclaje sensorial corta la espiral y te devuelve la capacidad de elegir.', 5);
  }

  /* ------------------------------------ INTENSO: cambio mi respuesta */

  async changeResponse() {
    const s = this.stage;
    s.setTitle('Cambio mi respuesta', 'Desagrado intenso');
    await s.say('Cuando el desagrado es muy intenso, los pensamientos se vuelven extremos. Vamos a transformarlos en algo mas manejable.', { avatar: '🔮' });

    await startReevaluationGame(s, {
      title: 'Cambio mi respuesta',
      subtitle: 'Toca cada pensamiento y elige una version equilibrada.',
      thoughts: [
        {
          text: '¡Esto es insoportable!',
          options: [
            { label: 'Esto me resulta desagradable, pero puedo manejar la situacion.', balanced: true, feedback: 'El pensamiento se transforma: sigue siendo desagradable y ahora es manejable.' },
            { label: 'No lo voy a soportar ni un segundo mas.', feedback: 'Esa idea aumenta la urgencia. Fijate si de verdad no puedes sostenerlo un momento mas.' },
            { label: 'Nadie deberia pasar por esto.', feedback: 'Puede ser cierto y aun asi no te ayuda a decidir que hacer ahora.' }
          ]
        },
        {
          text: '¡Tengo que salir corriendo!',
          options: [
            { label: 'Puedo tomar distancia y pensar que necesito hacer.', balanced: true, feedback: 'Tomar distancia sigue siendo una opcion, pero ahora la eliges tu, no el impulso.' },
            { label: 'Si no me voy ya, va a ser peor.', feedback: 'La urgencia suele exagerar el riesgo. ¿Que pasaria si esperas unos segundos?' },
            { label: 'Tengo que aguantar sin moverme.', feedback: 'Tampoco hace falta forzarte. Alejarse cuando algo dana de verdad es cuidarse.' }
          ]
        }
      ],
      transformedLabel: 'Respuesta equilibrada',
      onTransform: () => { s.burstParticles(8, '🔮'); s.setAmbient(0.4); }
    });

    completeActivity('disgust-respuesta', 10);
    s.addPoints(10);
    await s.reward('cristal-perspectiva', 'Cambiar el pensamiento no cambia la situacion: cambia lo que puedes hacer con ella.', 5);
  }

  /* ------------------------------------ INTENSO: no tengo que hacerlo solo */

  async askForSupport() {
    const s = this.stage;
    s.setScene('guardian');
    s.setTitle('No tengo que hacerlo solo', 'Desagrado intenso');
    await s.say('En lo alto del sendero esta el <strong>Guardian de Confianza</strong>. Acercarte a el tambien es una estrategia.', { avatar: '🛖' });

    await s.interaction((done) => {
      const props = s.setProps(`
        <div class="dis-guardian" style="--x:78%">
          <button class="dis-guardian__btn" type="button" data-go>
            <span class="dis-guardian__icon" aria-hidden="true">🧙</span>
            <span class="dis-guardian__label">Guardian de Confianza</span>
          </button>
        </div>
        <p class="emo-hint">Camina hasta el Guardian de Confianza.</p>
      `);
      props.querySelector('[data-go]').addEventListener('click', async () => {
        props.querySelector('[data-go]').disabled = true;
        try {
          await s.walkTo(68, { speed: 'lenta' });
          await s.react('interact', 600);
        } catch (err) {
          if (err === ABORTED) return;
          throw err;
        }
        if (!s.disposed) { s.clearProps(); done(true); }
      });
    });

    await s.say('¿Quieres contarme que esta pasando?', { avatar: '🧙', who: 'Guardian de Confianza' });

    const answer = await s.choices([
      { id: 'ejemplo', label: 'Algo me esta generando mucho desagrado y necesito alejarme un momento.', icon: '🗣️' },
      { id: 'propio', label: 'Prefiero contarlo con mis palabras.', icon: '💬' }
    ], { title: '¿Como se lo cuentas?', columns: 1 });

    if (answer.id === 'propio') {
      await s.say('Tomate el tiempo que necesites. Decir "no estoy bien con esto" ya es suficiente para empezar.', { avatar: '🧙', who: 'Guardian de Confianza' });
    } else {
      await s.say('Gracias por contarmelo. Alejarte un momento no es huir: es cuidarte mientras decides que hacer.', { avatar: '🧙', who: 'Guardian de Confianza' });
    }

    s.burstParticles(12, '❤️');
    await s.showFeedback('Pedir apoyo tambien es una forma de cuidar tus emociones.', { title: 'Apoyo', tone: 'info' });
    completeActivity('disgust-apoyo', 10);
    s.addPoints(10);
    await s.reward('corazon-apoyo', 'Nombrar lo que sientes frente a alguien de confianza reduce el peso de sostenerlo solo.', 5);
  }

  /* ================================================== DESAFIO: PROTEGE LA ISLA */

  async protectIsland() {
    const s = this.stage;
    s.setScene('rechazo');
    s.setTitle('Protege la isla', 'Desafio final');
    await s.say(
      'Aparece <strong>La Reaccion Impulsiva</strong>: una criatura que crece cada vez que alguien responde sin pensar, grita o actua de golpe. No se vence con fuerza, se vence con tus herramientas.',
      { avatar: '👾', who: 'Guardianes del Desagrado' }
    );

    const situations = [
      { id: 1, icon: '🥫', text: 'Abres un recipiente y el olor es horrible. Alguien se rie de tu cara.' },
      { id: 2, icon: '🙅', text: 'Ves a alguien hacer algo que te parece asqueroso y te dan ganas de gritarle.' },
      { id: 3, icon: '🫧', text: 'El pantano huele cada vez peor y sientes que no aguantas mas.' },
      { id: 4, icon: '😖', text: 'Te sirven una comida que te da rechazo delante de otras personas.' },
      { id: 5, icon: '🌫️', text: 'La niebla verde vuelve y notas que te estas alterando.' }
    ];

    const tools = [
      { id: 'respiracion', icon: '💎', label: 'Respiracion consciente', note: 'Respiras despacio. El cuerpo baja la alarma y la criatura se encoge.' },
      { id: 'grounding', icon: '🪷', label: 'Anclaje 5-4-3-2-1', note: 'Vuelves al presente con tus sentidos. La criatura pierde fuerza.' },
      { id: 'aceptacion', icon: '🌱', label: 'Aceptacion', note: 'Reconoces el desagrado sin pelear con el. La criatura se calma.' },
      { id: 'reevaluacion', icon: '🔮', label: 'Reevaluacion', note: 'Cambias el pensamiento extremo por uno manejable. La criatura se achica.' },
      { id: 'apoyo', icon: '❤️‍🩹', label: 'Buscar apoyo', note: 'Se lo cuentas a alguien de confianza. La criatura deja de crecer.' }
    ];

    let size = 60;
    const props = s.setProps(`
      <div class="creature" data-creature style="--size:${size}">
        <span class="creature__body" aria-hidden="true">👾</span>
        <span class="creature__label">La Reaccion Impulsiva</span>
      </div>
    `);
    const creature = props.querySelector('[data-creature]');
    const update = () => creature.style.setProperty('--size', String(size));

    for (const sit of situations) {
      if (s.disposed) return;
      const options = [
        ...tools.map((t) => ({ id: t.id, icon: t.icon, label: t.label })),
        { id: 'impulso', icon: '💥', label: 'Reaccionar de golpe (gritar o irme dando un portazo)' }
      ];
      const pick = await s.choices(options, {
        title: sit.text,
        prompt: '¿Que haces con lo que sientes?',
        columns: 2
      });

      if (pick.id === 'impulso') {
        size = Math.min(140, size + 18);
        update();
        creature.classList.add('is-grow');
        setTimeout(() => creature.classList.remove('is-grow'), 600);
        s.playTone(160, 0.09);
        await s.showFeedback(
          'La criatura crecio. Reaccionar de golpe alivia un segundo y despues deja mas lio. Puedes probar otra herramienta con la misma situacion: nada se pierde.',
          { title: 'La Reaccion Impulsiva crecio', tone: 'info' }
        );
        const retry = await s.choices(
          tools.map((t) => ({ id: t.id, icon: t.icon, label: t.label })),
          { title: sit.text, prompt: 'Elige una herramienta de tu caja.', columns: 2 }
        );
        const tool = tools.find((t) => t.id === retry.id);
        this.usedTools.add(tool.id);
        size = Math.max(18, size - 22);
        update();
        s.burstParticles(10, tool.icon);
        s.addPoints(6);
        await s.showFeedback(tool.note, { title: tool.label });
      } else {
        const tool = tools.find((t) => t.id === pick.id);
        this.usedTools.add(tool.id);
        size = Math.max(18, size - 16);
        update();
        creature.classList.add('is-shrink');
        setTimeout(() => creature.classList.remove('is-shrink'), 600);
        s.burstParticles(10, tool.icon);
        s.playTone(720, 0.07);
        s.addPoints(8);
        await s.showFeedback(tool.note, { title: tool.label });
      }
      s.setAmbient(Math.max(0.1, size / 140));
    }

    // Asegura que las cinco herramientas se hayan usado al menos una vez
    while (this.usedTools.size < tools.length && !s.disposed) {
      const missing = tools.filter((t) => !this.usedTools.has(t.id));
      const pick = await s.choices(
        missing.map((t) => ({ id: t.id, icon: t.icon, label: t.label })),
        {
          title: 'La criatura aun respira',
          prompt: `Te falta usar ${missing.length} herramienta(s) para protegerla del todo.`,
          columns: 2
        }
      );
      const tool = tools.find((t) => t.id === pick.id);
      this.usedTools.add(tool.id);
      size = Math.max(12, size - 14);
      update();
      s.burstParticles(10, tool.icon);
      s.addPoints(5);
      await s.showFeedback(tool.note, { title: tool.label });
    }

    if (s.disposed) return;
    creature.classList.add('is-defeated');
    size = 10;
    update();
    s.setAmbient(0.1);
    await s.delay(700);
    s.clearProps();
    completeActivity('disgust-protege', 15);
    s.addPoints(15);
    await s.showFeedback(
      'La criatura se hizo pequena. No desaparecio del todo: el impulso siempre puede aparecer, y ahora tienes cinco formas de responder antes de que decida por ti.',
      { title: 'Isla protegida' }
    );
  }
}
