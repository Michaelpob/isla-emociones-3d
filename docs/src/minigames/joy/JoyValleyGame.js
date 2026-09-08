// EMO-AVENTURA · VALLE DE LA LUZ (Isla de la Alegria)
// INICIO -> EXPLORACION -> IDENTIFICACION -> MANIFESTACIONES -> INTENSIDAD ->
// ESTRATEGIAS -> MINIJUEGO -> REEVALUACION -> RETROALIMENTACION ->
// ENCUENTRA EL EQUILIBRIO -> RECOMPENSA
//
// Regla especial: la alegria NO tiene que disminuir. Puede mantenerse,
// modularse o bajar segun el contexto. Nunca se penaliza una eleccion.

import { Stage, ABORTED } from '../../engine/Stage.js?v=20260908175209';
import {
  signalMirror,
  sequenceActivity,
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

export class JoyValleyGame {
  constructor({ host, island, player, onComplete, onExit, onOpenToolbox }) {
    this.host = host;
    this.island = island;
    this.player = player;
    this.onComplete = onComplete;
    this.onExit = onExit;
    this.onOpenToolbox = onOpenToolbox;
    this.doneStrategies = new Set();
  }

  mount() {
    this.stage = new Stage({
      host: this.host,
      island: this.island,
      theme: 'joy',
      player: this.player,
      onExit: () => this.onExit?.(),
      onOpenToolbox: this.onOpenToolbox
    });
    this.stage.mount();
    this.run().catch((err) => {
      if (err !== ABORTED) console.error('[valle-de-la-luz]', err);
    });
  }

  dispose() {
    this.stage?.dispose();
    this.stage = null;
  }

  async run() {
    const s = this.stage;
    s.setScene('valle');
    s.setAmbient(0.5);
    s.ambientSound('joy');
    s.setTitle('Valle de la Luz', 'Alegria');

    /* -------------------------------------------------------------- INICIO */
    await s.say(
      'Entras al <strong>Valle de la Luz</strong>. Hay flores que se mueven con el viento, mariposas y rayos de sol entre los arboles.',
      { avatar: '🌻', who: 'Valle de la Luz' }
    );
    await s.say(
      'La alegria tambien se aprende a regular. No para sentir menos, sino para saber que hacer con ella segun el momento.',
      { avatar: '☀️', who: 'Guia del valle' }
    );

    /* ---------------------------------------------------------- EXPLORACION */
    await this.exploreValley();

    /* -------------------------------------------------------- IDENTIFICACION */
    await s.transition('Identificacion');
    await this.identifyJoy();

    /* ------------------------------------------------------- MANIFESTACIONES */
    await s.transition('Espejo de la Luz');
    await s.say(
      'El <strong>Espejo de la Luz</strong> muestra como se ve la alegria por fuera. Toca cada personaje para ver que esta expresando.',
      { avatar: '🪞', who: 'Espejo de la Luz' }
    );
    await signalMirror(s, {
      title: 'Espejo de la Luz',
      subtitle: 'Cada figura muestra una manifestacion de la alegria.',
      groups: [
        {
          title: 'En el cuerpo y el gesto',
          icon: '😊',
          items: [
            { id: 'bienestar', icon: '🌤️', label: 'Bienestar', text: 'Una sensacion agradable y tranquila en el cuerpo: los hombros bajan y la respiracion se suelta.' },
            { id: 'sonrisa', icon: '🙂', label: 'Sonrisa', text: 'El gesto mas reconocible de la alegria. Aparece incluso antes de que la nombremos.' },
            { id: 'risa', icon: '😄', label: 'Risa', text: 'Libera tension y se contagia. Es alegria que sale del cuerpo hacia afuera.' },
            { id: 'energia', icon: '⚡', label: 'Energia', text: 'Ganas de moverte y hacer cosas. Cuando es mucha, conviene dirigirla hacia algo concreto.' }
          ]
        },
        {
          title: 'En lo que hago con otros',
          icon: '🤝',
          items: [
            { id: 'participacion', icon: '🙋', label: 'Participacion', text: 'La alegria empuja a sumarse, proponer y colaborar.' },
            { id: 'social', icon: '👥', label: 'Interaccion social', text: 'Buscamos a otras personas para compartir lo que sentimos. Compartirlo lo sostiene mas tiempo.' },
            { id: 'entusiasmo', icon: '🎉', label: 'Entusiasmo', text: 'Mucha activacion e interes. Es agradable y tambien conviene poder regularla.' },
            { id: 'exploracion', icon: '🧭', label: 'Exploracion', text: 'Cuando estamos alegres nos animamos a probar cosas nuevas y a descubrir.' }
          ]
        }
      ]
    });
    completeActivity('joy-manifestaciones', 5);
    s.addPoints(5);

    /* ------------------------------------------------------------ INTENSIDAD */
    await s.transition('Intensidad');
    const level = await intensityThermometer(s, {
      title: '¿Que tan intensa esta tu alegria?',
      emotion: 'alegria',
      levels: [
        { id: 'baja', label: 'BAJA', text: 'Estoy tranquilo y a gusto, sin mucha energia.' },
        { id: 'media', label: 'MEDIA', text: 'Me siento contento y con ganas de compartirlo.' },
        { id: 'alta', label: 'ALTA', text: 'Estoy muy activado, casi sin poder parar.' }
      ],
      onChange: (id) => {
        s.setAmbient({ baja: 0.35, media: 0.7, alta: 1 }[id] ?? 0.6);
      }
    });
    setInitialIntensity(level.id);
    s.setIntensity(level.id);

    if (level.id === 'alta') {
      await s.say(
        'La emocion es muy intensa. Haz una pausa y selecciona una estrategia para organizar tu activacion y continuar de manera adecuada.',
        { avatar: '🌟', who: 'Valle de la Luz' }
      );
    }

    /* ------------------------------------------------ ESTRATEGIAS + MINIJUEGOS */
    await this.strategyLoop(level.id);

    /* ---------------------------------------------------------- REEVALUACION */
    await s.transition('Reevaluacion');
    const result = await reevaluationScreen(s, {
      emotion: 'alegria',
      question: '¿COMO ESTA AHORA TU ALEGRIA?',
      initial: gameState.initialIntensity ?? 'media',
      strategyLabel: [...this.doneStrategies].join(' + ') || 'Estrategias del valle',
      allowRetry: false
    });
    recordReevaluation('joy', gameState.initialIntensity ?? 'media', [...this.doneStrategies].join(' + '), result.finalIntensity);

    /* ------------------------------------------------------- RETROALIMENTACION */
    const feedbackByDirection = {
      down: 'Tu alegria se modulo. Eso no significa perderla: significa que ahora ocupa un espacio que puedes manejar.',
      same: 'Tu alegria se mantuvo. Con la alegria eso suele ser buena noticia: regularla no significa apagarla.',
      up: 'Tu alegria aumento. Si te sirve para conectar y hacer cosas, esta bien; si te desborda, ya tienes estrategias para organizarla.'
    };
    await s.showFeedback(feedbackByDirection[result.direction], { title: 'Retroalimentacion', tone: 'ok' });

    /* -------------------------------------------------- ENCUENTRA EL EQUILIBRIO */
    await s.transition('Encuentra el equilibrio');
    await this.balanceChallenge();

    /* ------------------------------------------------------------ RECOMPENSA */
    s.setCharacterState('celebrate');
    s.burstParticles(28, '🌟');
    await s.say(
      'El valle brilla contigo. Aprendiste a reconocer la alegria, a expresarla y a organizarla segun el momento.',
      { avatar: '🌻', who: 'Valle de la Luz', cta: 'Recibir insignia' }
    );

    this.onComplete?.({
      islandId: 'joy',
      success: true,
      emoAventura: true,
      badge: 'joy',
      title: 'Valle de la Luz',
      message: 'Identificaste la alegria, reconociste sus manifestaciones y practicaste estrategias para regularla sin apagarla.'
    });
  }

  /* =================================================== EXPLORACION DEL VALLE */

  async exploreValley() {
    const s = this.stage;
    const spots = [
      { id: 'flores', x: 20, icon: '🌸', label: 'Un cantero de flores', text: 'Las flores se abren cuando pasas cerca. Detenerte a mirarlas es una forma pequena de disfrutar.' },
      { id: 'mariposa', x: 48, icon: '🦋', label: 'Mariposas', text: 'Vuelan alrededor sin apuro. La alegria tambien puede ser tranquila, no siempre es euforia.' },
      { id: 'rayo', x: 76, icon: '🌞', label: 'Un rayo de luz', text: 'La luz entra entre los arboles y calienta el suelo. El cuerpo lo nota antes que la cabeza.' }
    ];
    let visited = 0;

    await s.say('Recorre el valle y acercate a lo que te llame la atencion.', { avatar: '🧭', cta: 'Explorar' });

    return s.interaction((done) => {
      const props = s.setProps(spots.map((sp) => `
        <button class="joy-spot" type="button" data-spot="${sp.id}" style="--x:${sp.x}%">
          <span class="joy-spot__icon" aria-hidden="true">${sp.icon}</span>
          <span class="joy-spot__label">${sp.label}</span>
        </button>
      `).join(''));

      const counter = document.createElement('p');
      counter.className = 'emo-hint';
      counter.textContent = 'Visita los 3 rincones del valle (0/3)';
      props.appendChild(counter);

      props.addEventListener('click', async (e) => {
        const btn = e.target.closest('[data-spot]');
        if (!btn || btn.classList.contains('is-done')) return;
        const spot = spots.find((sp) => sp.id === btn.dataset.spot);
        props.querySelectorAll('[data-spot]').forEach((b) => { b.disabled = true; });
        try {
          await s.walkTo(spot.x, { speed: 'rapida' });
          await s.react('joy', 600);
          s.burstParticles(8, spot.icon);
          await s.say(spot.text, { avatar: spot.icon, who: spot.label });
        } catch (err) {
          if (err === ABORTED) return;
          throw err;
        }
        if (s.disposed) return;
        btn.classList.add('is-done');
        visited += 1;
        counter.textContent = `Visita los 3 rincones del valle (${visited}/3)`;
        props.querySelectorAll('[data-spot]').forEach((b) => { b.disabled = b.classList.contains('is-done'); });
        s.addPoints(3, { silent: true });
        if (visited >= spots.length) {
          completeActivity('joy-exploracion', 5);
          s.clearProps();
          done(true);
        }
      });
    });
  }

  /* ==================================================== IDENTIFICAR ALEGRIA */

  async identifyJoy() {
    const s = this.stage;
    const situations = [
      {
        text: 'Terminas algo que te costo mucho y alguien te dice que lo hiciste muy bien.',
        icon: '🏅',
        answer: 'alegria'
      },
      {
        text: 'Te encuentras por sorpresa con una persona que querias ver hace tiempo.',
        icon: '👋',
        answer: 'alegria'
      },
      {
        text: 'Estas jugando con tus amigos y todo sale bien; quisieras que no termine.',
        icon: '🎈',
        answer: 'alegria'
      }
    ];

    await s.say(
      'Vamos a reconocer la alegria en distintas situaciones. Elige la emocion que aparecería. <strong>Ninguna respuesta resta puntos.</strong>',
      { avatar: '💡' }
    );

    for (const sit of situations) {
      const choice = await s.choices(
        [
          { id: 'alegria', label: 'Alegria', icon: '😄', correct: true },
          { id: 'tristeza', label: 'Tristeza', icon: '😢' },
          { id: 'enojo', label: 'Enojo', icon: '😠' },
          { id: 'miedo', label: 'Miedo', icon: '😨' }
        ],
        { title: sit.text, prompt: '¿Que emocion aparece aqui?', columns: 2 }
      );
      if (choice.id === sit.answer) {
        s.burstParticles(10, '⚡');
        s.addPoints(4);
        await s.showFeedback(
          'Si: esta situacion suele traer alegria. Reconocerla es el primer paso para poder disfrutarla y regularla.',
          { title: 'Alegria identificada' }
        );
      } else {
        await s.showFeedback(
          `Tambien puede aparecer <strong>${choice.label.toLowerCase()}</strong>: las situaciones despiertan mas de una emocion y no todas las personas sienten lo mismo. En este caso, lo mas frecuente es la alegria.`,
          { title: 'Otra lectura posible', tone: 'info' }
        );
        s.addPoints(2);
      }
    }
    completeActivity('joy-identificacion', 5);
    await s.reward('rayo-alegria', 'Reconocer la alegria cuando aparece hace que puedas sostenerla mas tiempo.', 5);
  }

  /* ======================================================= MENU ESTRATEGIAS */

  async strategyLoop(intensity) {
    const s = this.stage;

    const strategies = [
      {
        id: 'reconoce', label: 'Reconoce lo positivo', icon: '🌸',
        detail: 'Jardin de los Momentos · alegria baja', levels: ['baja'],
        run: () => this.gardenOfMoments()
      },
      {
        id: 'explora', label: 'Explora la alegria', icon: '🧭',
        detail: 'Recorrido de descubrimiento · alegria baja', levels: ['baja'],
        run: () => this.exploreJoyRoute()
      },
      {
        id: 'guarda', label: 'Guarda el momento', icon: '💠',
        detail: 'Mirador de los Recuerdos · alegria media', levels: ['media'],
        run: () => this.saveMoment()
      },
      {
        id: 'comparte', label: 'Comparte la alegria', icon: '💞',
        detail: 'Encuentro con otros · alegria media', levels: ['media'],
        run: () => this.shareJoy()
      },
      {
        id: 'disfruta', label: 'Disfruta sin perder el control', icon: '🌟',
        detail: 'Detenerse, observar, apreciar y continuar · alegria alta', levels: ['alta'],
        run: () => this.enjoyWithControl()
      },
      {
        id: 'energia', label: 'Utiliza tu energia', icon: '🔆',
        detail: 'Canalizar la activacion · alegria alta', levels: ['alta'],
        run: () => this.useEnergy()
      },
      {
        id: 'expresa', label: 'Comparte lo que sientes', icon: '🗣️',
        detail: 'Expresion y conexion social · alegria alta', levels: ['alta'],
        run: () => this.shareFeelings()
      }
    ];

    const recommended = strategies.filter((st) => st.levels.includes(intensity));
    // Se cuentan estrategias sugeridas *distintas*: repetir una no cuenta como otra.
    const doneRecommended = new Set();

    while (true) {
      if (s.disposed) return;
      const options = strategies.map((st) => ({
        id: st.id,
        label: `${st.label}${this.doneStrategies.has(st.label) ? ' ✓' : ''}`,
        detail: st.detail + (st.levels.includes(intensity) ? ' · sugerida para tu nivel' : ''),
        icon: st.icon
      }));
      if (doneRecommended.size >= recommended.length || this.doneStrategies.size >= 2) {
        options.push({ id: '__done', label: 'Seguir hacia la reevaluacion', icon: '➡️', detail: 'Ya practicaste lo suficiente para revisar como estas.' });
      }

      const picked = await s.choices(options, {
        title: 'Elige una estrategia',
        prompt: `Tu alegria esta en nivel <strong>${intensity.toUpperCase()}</strong>. Las sugeridas aparecen marcadas, pero puedes elegir cualquiera.`,
        columns: 2
      });

      if (picked.id === '__done') return;

      const strategy = strategies.find((st) => st.id === picked.id);
      if (this.doneStrategies.has(strategy.label)) {
        await s.showFeedback('Ya practicaste esta estrategia. Puedes repetirla o probar otra.', { tone: 'info' });
      }

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

  /* ------------------------------------------- ALEGRIA BAJA: reconocer lo positivo */

  async gardenOfMoments() {
    const s = this.stage;
    s.setScene('jardin');
    s.setTitle('Jardin de los Momentos', 'Reconoce lo positivo');
    await s.walkTo(35, { speed: 'normal' });
    await s.say(
      'Este es el <strong>Jardin de los Momentos</strong>. Cada capullo guarda algo bueno que ya esta ocurriendo. Toca los que reconozcas como positivos: se abriran.',
      { avatar: '🌱', who: 'Jardin' }
    );

    const buds = [
      { id: 1, icon: '🌼', label: 'Alguien me escucho hoy', positive: true },
      { id: 2, icon: '🌧️', label: 'Me quede sin bateria', positive: false },
      { id: 3, icon: '🌻', label: 'Comi algo que me gusta', positive: true },
      { id: 4, icon: '🌷', label: 'Termine una tarea pendiente', positive: true },
      { id: 5, icon: '🌫️', label: 'Perdi el autobus', positive: false },
      { id: 6, icon: '🌺', label: 'Me rei con alguien', positive: true },
      { id: 7, icon: '🍀', label: 'Dormi bien anoche', positive: true }
    ];
    const targetCount = buds.filter((b) => b.positive).length;

    await s.panel((body, done) => {
      let opened = 0;
      body.innerHTML = `
        <div class="garden">
          <div class="garden__field">
            ${buds.map((b) => `
              <button class="bud" type="button" data-id="${b.id}">
                <span class="bud__icon" aria-hidden="true">${b.icon}</span>
                <span class="bud__label">${b.label}</span>
              </button>
            `).join('')}
          </div>
          <p class="garden__note" data-note aria-live="polite">Flores abiertas: <strong>0</strong> de ${targetCount}</p>
          <button class="emo-btn emo-btn--primary" type="button" data-finish hidden>Continuar</button>
        </div>
      `;
      const note = body.querySelector('[data-note]');
      const finish = body.querySelector('[data-finish]');
      body.querySelectorAll('[data-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const bud = buds.find((b) => String(b.id) === btn.dataset.id);
          if (btn.classList.contains('is-open')) return;
          if (bud.positive) {
            btn.classList.add('is-open');
            opened += 1;
            s.playTone(600 + opened * 40, 0.06);
            s.setAmbient(Math.min(1, 0.35 + (opened / targetCount) * 0.5));
            s.burstParticles(5, '✿');
            note.innerHTML = `Flores abiertas: <strong>${opened}</strong> de ${targetCount}`;
            if (opened >= targetCount) {
              note.innerHTML = 'El jardin se ilumino. Lo bueno ya estaba ahi: reconocerlo lo hace visible.';
              finish.hidden = false;
              finish.focus({ preventScroll: true });
            }
          } else {
            btn.classList.add('is-shake');
            setTimeout(() => btn.classList.remove('is-shake'), 400);
            note.textContent = 'Ese momento fue incomodo, y tambien es parte del dia. Aqui buscamos los que te hicieron bien.';
          }
        });
      });
      finish.addEventListener('click', () => done({ opened }));
    }, { title: 'Jardin de los Momentos', subtitle: 'Toca los momentos positivos de tu dia.', className: 'emo-panel--garden' });

    await sequenceActivity(s, {
      title: 'Reconoce lo positivo',
      subtitle: 'Sigue los cuatro pasos en orden.',
      steps: [
        { label: 'OBSERVAR', text: 'Mira alrededor sin apuro. ¿Que hay hoy que este bien?', feedback: 'La luz del jardin sube un poco.' },
        { label: 'IDENTIFICAR', text: 'Ponle nombre a eso positivo que encontraste.', feedback: 'Nombrarlo lo vuelve concreto.' },
        { label: 'APRECIAR', text: 'Quedate unos segundos con eso. No lo apures.', feedback: 'Apreciar es dejar que dure un poco mas.' },
        { label: 'DISFRUTAR', text: 'Permite que la sensacion agradable ocupe su lugar.', feedback: 'Disfrutar tambien se practica.' }
      ],
      onStep: (step, i, total) => {
        s.setAmbient(Math.min(1, 0.5 + ((i + 1) / total) * 0.5));
        s.burstParticles(6, '✧');
      },
      finalText: 'Reconocer lo positivo no niega lo dificil: le da espacio a lo que tambien esta pasando.'
    });

    completeActivity('joy-reconoce', 10);
    s.addPoints(10);
    await s.reward('estrella-disfrute', 'Detenerte a apreciar lo bueno hace que la alegria dure mas que el instante.', 5);
  }

  async exploreJoyRoute() {
    const s = this.stage;
    s.setScene('sendero');
    s.setTitle('Sendero del Descubrimiento', 'Explora la alegria');
    await s.say(
      'La alegria tambien crece cuando exploramos. Sigue el sendero y recoge lo que encuentres: hay <strong>4 hallazgos</strong> repartidos.',
      { avatar: '🧭', who: 'Sendero' }
    );

    const stops = [
      { id: 'a', x: 18, icon: '🪶', label: 'Una pluma de colores', text: 'La miras de cerca: nunca habias notado los reflejos.' },
      { id: 'b', x: 42, icon: '🍓', label: 'Frutos del camino', text: 'Algo simple y agradable que estaba a la vista.' },
      { id: 'c', x: 66, icon: '🎵', label: 'Un sonido lejano', text: 'Alguien canta a lo lejos. Te dan ganas de acercarte.' },
      { id: 'd', x: 88, icon: '🌈', label: 'Un arcoiris pequeno', text: 'Aparece entre el agua y la luz. Estuvo ahi todo el tiempo.' }
    ];
    let found = 0;

    await s.interaction((done) => {
      const props = s.setProps(stops.map((sp) => `
        <button class="joy-spot joy-spot--route" type="button" data-spot="${sp.id}" style="--x:${sp.x}%">
          <span class="joy-spot__icon" aria-hidden="true">${sp.icon}</span>
          <span class="joy-spot__label">${sp.label}</span>
        </button>
      `).join(''));
      const counter = document.createElement('p');
      counter.className = 'emo-hint';
      counter.textContent = 'Hallazgos: 0/4';
      props.appendChild(counter);

      props.addEventListener('click', async (e) => {
        const btn = e.target.closest('[data-spot]');
        if (!btn || btn.classList.contains('is-done')) return;
        const spot = stops.find((sp) => sp.id === btn.dataset.spot);
        props.querySelectorAll('[data-spot]').forEach((b) => { b.disabled = true; });
        try {
          await s.walkTo(spot.x, { speed: 'rapida' });
          await s.react('joy', 500);
          s.burstParticles(8, spot.icon);
          await s.say(spot.text, { avatar: spot.icon, who: spot.label });
        } catch (err) {
          if (err === ABORTED) return;
          throw err;
        }
        if (s.disposed) return;
        btn.classList.add('is-done');
        found += 1;
        counter.textContent = `Hallazgos: ${found}/4`;
        props.querySelectorAll('[data-spot]').forEach((b) => { b.disabled = b.classList.contains('is-done'); });
        s.addPoints(3, { silent: true });
        if (found >= stops.length) {
          s.clearProps();
          done(true);
        }
      });
    });

    completeActivity('joy-explora', 10);
    s.addPoints(8);
    await s.reward('pieza-exploracion', 'Explorar abre la alegria hacia afuera: aparecen cosas que no estabas buscando.', 5);
  }

  /* --------------------------------------------- ALEGRIA MEDIA: guardar y compartir */

  async saveMoment() {
    const s = this.stage;
    s.setScene('mirador');
    s.setTitle('Mirador de los Recuerdos', 'Guarda el momento');
    await s.walkTo(60, { speed: 'normal' });
    await s.say(
      'Desde el <strong>Mirador de los Recuerdos</strong> se ve todo el valle. Aqui los momentos buenos se guardan con detalle para poder volver a ellos.',
      { avatar: '💠', who: 'Mirador' }
    );

    const memory = await s.choices([
      { id: 'logro', label: 'Algo que lograste', icon: '🏅', detail: 'Un esfuerzo que salio bien.' },
      { id: 'persona', label: 'Un momento con alguien', icon: '👥', detail: 'Una conversacion, un abrazo, una risa.' },
      { id: 'lugar', label: 'Un lugar donde estuviste bien', icon: '🏞️', detail: 'Un sitio al que te gusta volver.' }
    ], { title: '¿Que momento quieres guardar?', columns: 1 });

    await s.panel((body, done) => {
      const details = {
        logro: [
          { icon: '👀', label: 'Lo que viste en ese momento' },
          { icon: '🫀', label: 'Lo que sentiste en el cuerpo' },
          { icon: '🗣️', label: 'Lo que alguien te dijo' }
        ],
        persona: [
          { icon: '😄', label: 'La cara de esa persona' },
          { icon: '🔊', label: 'Lo que se escuchaba' },
          { icon: '🫀', label: 'Como se sintio estar ahi' }
        ],
        lugar: [
          { icon: '🌅', label: 'La luz de ese lugar' },
          { icon: '🌬️', label: 'El aire o la temperatura' },
          { icon: '🫀', label: 'La calma que te dio' }
        ]
      }[memory.id];

      let picked = 0;
      body.innerHTML = `
        <div class="memory">
          <div class="memory__crystal" data-crystal><span aria-hidden="true">💠</span></div>
          <p class="memory__lead">Toca los <strong>3 detalles</strong> que quieres guardar dentro del cristal.</p>
          <div class="memory__details">
            ${details.map((d, i) => `
              <button class="memory__detail" type="button" data-i="${i}">
                <span aria-hidden="true">${d.icon}</span><span>${d.label}</span>
              </button>
            `).join('')}
          </div>
          <p class="memory__note" data-note aria-live="polite">Guardados: 0 de 3</p>
          <button class="emo-btn emo-btn--primary" type="button" data-finish hidden>Guardar el recuerdo</button>
        </div>
      `;
      const crystal = body.querySelector('[data-crystal]');
      const note = body.querySelector('[data-note]');
      const finish = body.querySelector('[data-finish]');
      body.querySelectorAll('[data-i]').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (btn.classList.contains('is-picked')) return;
          btn.classList.add('is-picked');
          picked += 1;
          crystal.style.setProperty('--charge', String(picked / 3));
          crystal.classList.add('is-pulse');
          setTimeout(() => crystal.classList.remove('is-pulse'), 400);
          s.playTone(520 + picked * 90, 0.06);
          note.textContent = `Guardados: ${picked} de 3`;
          if (picked >= 3) {
            note.textContent = 'El cristal quedo cargado con ese momento.';
            finish.hidden = false;
            finish.focus({ preventScroll: true });
          }
        });
      });
      finish.addEventListener('click', () => done({ picked }));
    }, { title: 'Guarda el momento', subtitle: 'Un recuerdo con detalles se conserva mejor.', className: 'emo-panel--memory' });

    await sequenceActivity(s, {
      title: 'Guarda el momento',
      steps: [
        { label: 'RECONOCER', text: 'Date cuenta de que este momento te esta haciendo bien.', feedback: 'Reconocerlo mientras ocurre es la clave.' },
        { label: 'APRECIAR', text: 'Quedate ahi unos segundos mas, sin correr al siguiente.', feedback: 'Apreciar alarga el momento.' },
        { label: 'RECORDAR', text: 'Guarda un detalle concreto para poder volver.', feedback: 'Un detalle preciso funciona mejor que un recuerdo general.' }
      ],
      onStep: () => s.burstParticles(5, '💠')
    });

    completeActivity('joy-guarda', 10);
    s.addPoints(10);
    await s.reward('cristal-recuerdo', 'Los recuerdos positivos guardados con detalle sirven de apoyo en los dias dificiles.', 5);
  }

  async shareJoy() {
    const s = this.stage;
    s.setScene('encuentro');
    s.setTitle('Compartir la alegria', 'Alegria media');
    await s.say(
      'Hay personas del valle cerca. Acercate y comparte lo que sientes: la alegria compartida <strong>se sostiene mejor</strong>.',
      { avatar: '💞', who: 'Valle' }
    );

    const friends = [
      { id: 'f1', x: 25, icon: '🧑', name: 'Nube' },
      { id: 'f2', x: 55, icon: '🧒', name: 'Rio' },
      { id: 'f3', x: 82, icon: '🧓', name: 'Sauce' }
    ];
    let greeted = 0;

    await s.interaction((done) => {
      const props = s.setProps(friends.map((f) => `
        <div class="joy-friend" data-friend="${f.id}" style="--x:${f.x}%">
          <button class="joy-friend__btn" type="button" data-go="${f.id}">
            <span class="joy-friend__icon" aria-hidden="true">${f.icon}</span>
            <span class="joy-friend__name">${f.name}</span>
          </button>
        </div>
      `).join(''));
      const counter = document.createElement('p');
      counter.className = 'emo-hint';
      counter.textContent = 'Personas saludadas: 0/3';
      props.appendChild(counter);

      props.addEventListener('click', async (e) => {
        const btn = e.target.closest('[data-go]');
        if (!btn) return;
        const friend = friends.find((f) => f.id === btn.dataset.go);
        const node = props.querySelector(`[data-friend="${friend.id}"]`);
        if (node.classList.contains('is-done')) return;
        props.querySelectorAll('[data-go]').forEach((b) => { b.disabled = true; });
        try {
          await s.walkTo(Math.max(5, friend.x - 8), { speed: 'rapida' });
          node.classList.add('is-near');
          const how = await s.choices([
            { id: 'contar', label: 'Contarle lo que me paso', icon: '🗣️' },
            { id: 'invitar', label: 'Invitarle a hacer algo juntos', icon: '🤝' },
            { id: 'agradecer', label: 'Agradecerle algo que hizo', icon: '💛' }
          ], { title: `Te acercas a ${friend.name}`, prompt: '¿Como compartes tu alegria?' });
          node.classList.add('is-happy');
          s.burstParticles(10, '💞');
          await s.react('joy', 600);
          const reactions = {
            contar: `${friend.name} se rie contigo y te pide detalles. Contarlo hizo que el momento creciera.`,
            invitar: `${friend.name} acepta enseguida. La alegria compartida se convierte en un plan.`,
            agradecer: `${friend.name} se emociona. Agradecer conecta y devuelve alegria a los dos.`
          };
          await s.say(reactions[how.id], { avatar: friend.icon, who: friend.name });
        } catch (err) {
          if (err === ABORTED) return;
          throw err;
        }
        if (s.disposed) return;
        node.classList.add('is-done');
        greeted += 1;
        counter.textContent = `Personas saludadas: ${greeted}/3`;
        props.querySelectorAll('[data-go]').forEach((b) => {
          b.disabled = b.closest('[data-friend]').classList.contains('is-done');
        });
        s.addPoints(4, { silent: true });
        if (greeted >= friends.length) {
          s.clearProps();
          done(true);
        }
      });
    });

    completeActivity('joy-comparte', 10);
    s.addPoints(8);
    await s.reward('corazon-conexion', 'Compartir lo que sientes acerca a los demas y sostiene la emocion mas tiempo.', 5);
  }

  /* ------------------------------------------------ ALEGRIA ALTA: regular la activacion */

  async enjoyWithControl() {
    const s = this.stage;
    s.setScene('valle');
    s.setTitle('Disfruta sin perder el control', 'Alegria alta');
    await s.say(
      'Tu energia esta muy alta. No vamos a apagarla: vamos a <strong>organizarla</strong> para que puedas seguir disfrutando sin quedar desbordado.',
      { avatar: '🌟', who: 'Guia del valle' }
    );

    await sequenceActivity(s, {
      title: 'Disfruta sin perder el control',
      subtitle: 'Cuatro pasos para que la alegria no se convierta en descontrol.',
      steps: [
        { label: 'DETENERSE', text: 'Frena un momento el movimiento.', feedback: 'El personaje baja la velocidad: el cuerpo se ordena.' },
        { label: 'OBSERVAR', text: 'Mira que esta pasando a tu alrededor y en ti.', feedback: 'Observar evita reaccionar en automatico.' },
        { label: 'APRECIAR', text: 'Reconoce lo bueno del momento.', feedback: 'Sigues disfrutando, ahora con mas control.' },
        { label: 'CONTINUAR', text: 'Retoma la actividad de manera adecuada.', feedback: 'Continuas, pero eligiendo como.' }
      ],
      onStep: async (step, i) => {
        if (i === 0) {
          s.setCharacterState('pause');
          s.el.world.dataset.slow = 'true';
        }
        if (i === 1) s.setCharacterState('think');
        if (i === 2) { s.setCharacterState('joy'); s.burstParticles(8, '🌟'); }
        if (i === 3) {
          delete s.el.world.dataset.slow;
          s.setCharacterState('walk');
          setTimeout(() => !s.disposed && s.setCharacterState('idle'), 900);
        }
      },
      finalText: 'La alegria sigue ahi. Lo que cambio es que ahora la conduces tu.'
    });

    completeActivity('joy-control', 10);
    s.addPoints(10);
    await s.reward('estrella-disfrute', 'Disfrutar con control no es disfrutar menos: es poder sostenerlo sin que te desborde.', 5);
  }

  async useEnergy() {
    const s = this.stage;
    s.setScene('obstaculos');
    s.setTitle('Utiliza tu energia', 'Alegria alta');
    await s.say(
      'Hay obstaculos en el camino del valle. Toda esa energia puede <strong>dirigirse</strong> hacia algo util en lugar de dispersarse.',
      { avatar: '🔆', who: 'Valle' }
    );

    await sequenceActivity(s, {
      title: 'Utiliza tu energia',
      steps: [
        { label: 'ACTIVAR', text: 'Reconoce la energia que tienes disponible.', feedback: 'La energia se vuelve visible.' },
        { label: 'DIRIGIR', text: 'Elige hacia donde la vas a mandar.', feedback: 'Dirigirla evita que se disperse.' },
        { label: 'ACTUAR', text: 'Usala en algo concreto.', feedback: 'La accion transforma la activacion en resultado.' },
        { label: 'COMPLETAR', text: 'Termina lo que empezaste.', feedback: 'Completar cierra el ciclo y deja satisfaccion.' }
      ],
      onStep: (step, i) => {
        s.burstParticles(8, '🔆');
        if (i === 0) s.setCharacterState('joy');
      }
    });

    await s.panel((body, done) => {
      const obstacles = [
        { id: 1, icon: '🪨', label: 'Una roca en el sendero' },
        { id: 2, icon: '🌵', label: 'Ramas cruzadas' },
        { id: 3, icon: '🧱', label: 'Un muro bajo' },
        { id: 4, icon: '🕳️', label: 'Un hueco en el camino' }
      ];
      let cleared = 0;
      body.innerHTML = `
        <div class="energy">
          <p class="energy__lead">Toca cada obstaculo para dirigir tu energia hacia el.</p>
          <div class="energy__field">
            ${obstacles.map((o) => `
              <button class="energy__obstacle" type="button" data-id="${o.id}">
                <span class="energy__icon" aria-hidden="true">${o.icon}</span>
                <span>${o.label}</span>
                <span class="energy__beam" aria-hidden="true"></span>
              </button>
            `).join('')}
          </div>
          <p class="energy__note" data-note aria-live="polite">Obstaculos superados: 0 de 4</p>
          <button class="emo-btn emo-btn--primary" type="button" data-finish hidden>Continuar</button>
        </div>
      `;
      const note = body.querySelector('[data-note]');
      const finish = body.querySelector('[data-finish]');
      body.querySelectorAll('[data-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (btn.classList.contains('is-cleared')) return;
          btn.classList.add('is-beaming');
          s.playTone(700, 0.07);
          setTimeout(() => {
            btn.classList.remove('is-beaming');
            btn.classList.add('is-cleared');
            cleared += 1;
            note.textContent = `Obstaculos superados: ${cleared} de 4`;
            s.burstParticles(6, '⚡');
            if (cleared >= obstacles.length) {
              note.textContent = 'Usaste la energia para avanzar en lugar de dispersarla.';
              finish.hidden = false;
              finish.focus({ preventScroll: true });
            }
          }, 420);
        });
      });
      finish.addEventListener('click', () => done({ cleared }));
    }, { title: 'Dirige tu energia', subtitle: 'La activacion alta puede volverse impulso util.', className: 'emo-panel--energy' });

    completeActivity('joy-energia', 10);
    s.addPoints(10);
    await s.reward('rayo-energia', 'La energia de la alegria rinde mas cuando tiene una direccion clara.', 5);
  }

  async shareFeelings() {
    const s = this.stage;
    s.setScene('encuentro');
    s.setTitle('Comparte lo que sientes', 'Alegria alta');
    await s.say(
      'Cuando la alegria es muy intensa, ponerla en palabras ayuda a organizarla y a conectar con los demas.',
      { avatar: '🗣️', who: 'Guia del valle' }
    );

    const how = await s.choices([
      { id: 'nombrar', label: '"Estoy muy contento y con mucha energia"', icon: '💬', detail: 'Nombrar lo que sientes lo ordena.' },
      { id: 'invitar', label: '"¿Quieres hacer esto conmigo?"', icon: '🤝', detail: 'Compartir la actividad reparte la activacion.' },
      { id: 'agradecer', label: '"Gracias por estar aqui"', icon: '💛', detail: 'Agradecer conecta y da calma.' }
    ], { title: '¿Como lo expresas?', prompt: 'Elige la forma que mas se parezca a ti. Todas sirven.' });

    s.burstParticles(14, '💞');
    await s.react('joy', 700);
    await s.showFeedback(
      `Lo expresaste: <em>"${how.label.replace(/"/g, '')}"</em>. Poner la emocion en palabras baja la activacion sin quitarte la alegria.`,
      { title: 'Expresado' }
    );

    completeActivity('joy-expresa', 10);
    s.addPoints(10);
    await s.reward('corazon-conexion', 'Expresar lo que sientes organiza la emocion y acerca a las personas.', 5);
  }

  /* ================================================== ENCUENTRA EL EQUILIBRIO */

  async balanceChallenge() {
    const s = this.stage;
    s.setScene('equilibrio');
    s.setTitle('Encuentra el equilibrio', 'Desafio final');
    await s.say(
      'Ultimo desafio del valle: <strong>encuentra el equilibrio</strong>. En cada situacion elige que hacer con tu alegria. No hay una unica respuesta correcta: depende del contexto.',
      { avatar: '⚖️', who: 'Valle de la Luz' }
    );

    const situations = [
      {
        text: 'Estas muy contento y tu amigo acaba de recibir una mala noticia.',
        options: [
          { id: 'modular', label: 'Bajar un poco mi entusiasmo y escucharle', best: true, note: 'Modular no es apagar: es ajustar la alegria al momento del otro.' },
          { id: 'mantener', label: 'Contarle igual lo mio con toda mi energia', note: 'Tu alegria es valida, y aqui puede pasar por encima de lo que el necesita. Se puede compartir despues.' },
          { id: 'ocultar', label: 'Fingir que no siento nada', note: 'Tampoco hace falta esconderla. Ajustarla es distinto de negarla.' }
        ]
      },
      {
        text: 'Terminaste un trabajo que te costo mucho y estas solo en casa.',
        options: [
          { id: 'mantener', label: 'Celebrarlo y disfrutarlo a fondo', best: true, note: 'Aqui no hay motivo para bajarla: disfrutar plenamente tambien es regular bien.' },
          { id: 'modular', label: 'Contenerme para no exagerar', note: 'Puedes, pero no hace falta. La alegria no siempre tiene que reducirse.' },
          { id: 'compartir', label: 'Llamar a alguien para contarlo', note: 'Excelente tambien: compartirla la sostiene mas tiempo.' }
        ]
      },
      {
        text: 'Estas tan entusiasmado que te cuesta concentrarte en algo importante.',
        options: [
          { id: 'canalizar', label: 'Usar esa energia en la tarea', best: true, note: 'Canalizar convierte la activacion en impulso util.' },
          { id: 'mantener', label: 'Seguir con la euforia y dejar la tarea', note: 'Puede pasar. Fijate el costo: la alegria sigue, la tarea se acumula.' },
          { id: 'parar', label: 'Detenerme, respirar y retomar', note: 'Tambien funciona: una pausa breve ordena la activacion.' }
        ]
      }
    ];

    let balance = 50;
    for (const sit of situations) {
      const pick = await s.choices(
        sit.options.map((o) => ({ ...o, detail: undefined })),
        { title: sit.text, prompt: '¿Que haces con tu alegria aqui?', columns: 1 }
      );
      const option = sit.options.find((o) => o.id === pick.id);
      balance += option.best ? 18 : 6;
      s.setAmbient(Math.min(1, 0.4 + balance / 200));
      s.burstParticles(8, '⚖️');
      await s.showFeedback(option.note, { title: option.best ? 'Ajuste equilibrado' : 'Otra opcion posible', tone: option.best ? 'ok' : 'info' });
      s.addPoints(option.best ? 6 : 4);
    }

    completeActivity('joy-equilibrio', 10);
    await s.showFeedback(
      'Encontraste el equilibrio: la alegria no siempre debe bajar. A veces se mantiene, a veces se ajusta y a veces se comparte. Regularla es elegir que hacer con ella.',
      { title: 'Equilibrio encontrado' }
    );
  }
}
