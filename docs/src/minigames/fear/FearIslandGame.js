// EMO-AVENTURA · ISLA DEL MIEDO
// INICIO -> EXPLORACION -> RECONOCIMIENTO DE MANIFESTACIONES ->
// NIVEL 1 REFUGIO DE LA RESPIRACION -> NIVEL 2 ESPEJO DE LOS PENSAMIENTOS ->
// NIVEL 3 PUENTE DE LA EXPOSICION GUIADA -> CIERRE -> DESBLOQUEO

import { Stage, ABORTED } from '../../engine/Stage.js';
import {
  startBreathingExercise,
  startReevaluationGame,
  startExposureGame,
  signalMirror,
  intensityThermometer,
  reevaluationScreen
} from '../../engine/activities.js';
import {
  completeActivity,
  setInitialIntensity,
  setStrategy,
  recordReevaluation,
  gameState
} from '../../data/gameState.js';

export class FearIslandGame {
  constructor({ host, island, player, onComplete, onExit, onOpenToolbox }) {
    this.host = host;
    this.island = island;
    this.player = player;
    this.onComplete = onComplete;
    this.onExit = onExit;
    this.onOpenToolbox = onOpenToolbox;
  }

  mount() {
    this.stage = new Stage({
      host: this.host,
      island: this.island,
      theme: 'fear',
      player: this.player,
      onExit: () => this.onExit?.(),
      onOpenToolbox: this.onOpenToolbox
    });
    this.stage.mount();
    this.run().catch((err) => {
      if (err !== ABORTED) console.error('[isla-del-miedo]', err);
    });
  }

  dispose() {
    this.stage?.dispose();
    this.stage = null;
  }

  async run() {
    const s = this.stage;
    s.setScene('entrada');
    s.setAmbient(1);
    s.ambientSound('fear');

    /* ------------------------------------------------------------- INICIO */
    await s.say(
      'Llegas a la <strong>Isla del Miedo</strong>. La niebla se mueve despacio y no deja ver el camino completo.',
      { avatar: '🌫️', who: 'Isla del Miedo' }
    );
    await s.say(
      'El miedo no es una emocion mala: es una senal que aparece cuando algo nos parece peligroso o incierto. Aqui vas a aprender a reconocerla y a moverte con ella.',
      { avatar: '🕯️', who: 'Guia de la isla' }
    );

    const initial = await intensityThermometer(s, {
      title: '¿Que tan intenso esta tu miedo al entrar?',
      emotion: 'miedo',
      levels: [
        { id: 'baja', label: 'BAJO', text: 'Estoy alerta, pero puedo avanzar.' },
        { id: 'media', label: 'MEDIO', text: 'Siento tension y prefiero ir despacio.' },
        { id: 'alta', label: 'ALTO', text: 'Es muy fuerte y me cuesta moverme.' }
      ],
      onChange: (level) => {
        s.setAmbient({ baja: 0.35, media: 0.65, alta: 1 }[level] ?? 0.65);
      }
    });
    setInitialIntensity(initial.id);
    s.setIntensity(initial.id);

    /* --------------------------------------------------------- EXPLORACION */
    await s.transition('Exploracion');
    s.setScene('bosque');
    await s.say(
      'Camina por la isla y acercate a lo que llama tu atencion. El personaje avanza <strong>de a poco</strong>: asi funciona el miedo, paso a paso.',
      { avatar: '🧭', cta: 'Explorar' }
    );

    await this.explore();

    /* ------------------------------------------- RECONOCER MANIFESTACIONES */
    await s.transition('Reconocimiento');
    await s.say(
      'El miedo se nota en tres lugares: <strong>el cuerpo</strong>, <strong>los pensamientos</strong> y <strong>lo que hacemos</strong>. Revisemos cada senal.',
      { avatar: '🔎' }
    );

    await signalMirror(s, {
      title: 'Espejo de las Manifestaciones',
      subtitle: 'Toca cada senal del miedo para descubrir que te esta contando.',
      groups: [
        {
          title: 'En el cuerpo',
          icon: '🫀',
          items: [
            { id: 'corazon', icon: '💓', label: 'Corazon acelerado', text: 'Tu cuerpo manda mas sangre a los musculos por si necesitas reaccionar. Es incomodo, pero no es peligroso.' },
            { id: 'respiracion', icon: '🌬️', label: 'Respiracion corta', text: 'La respiracion se vuelve rapida y superficial. Por eso respirar despacio ayuda a estabilizar el cuerpo.' },
            { id: 'tension', icon: '🧊', label: 'Tension o temblor', text: 'Los musculos se preparan para actuar. El temblor es energia acumulada, no debilidad.' },
            { id: 'estomago', icon: '🌀', label: 'Nudo en el estomago', text: 'La digestion se frena cuando el cuerpo se pone en alerta. Suele pasar antes de algo importante.' }
          ]
        },
        {
          title: 'En los pensamientos',
          icon: '💭',
          items: [
            { id: 'anticipar', icon: '⚠️', label: 'Anticipar lo peor', text: 'La mente imagina el peor final para prepararte. Casi nunca es la unica posibilidad.' },
            { id: 'dudar', icon: '❓', label: '"No voy a poder"', text: 'El miedo suele subestimar tus recursos. Vale la pena revisar esa idea con datos.' }
          ]
        },
        {
          title: 'En lo que hago',
          icon: '🏃',
          items: [
            { id: 'evitar', icon: '🚪', label: 'Evitar la situacion', text: 'Evitar calma rapido, pero hace que la proxima vez el miedo sea mas grande.' },
            { id: 'paralizar', icon: '🧍', label: 'Quedarme quieto', text: 'Bloquearse tambien es una respuesta de proteccion. Reconocerla ayuda a salir de ella con pasos pequenos.' }
          ]
        }
      ]
    });
    completeActivity('fear-manifestaciones', 5);
    s.addPoints(5);
    await s.showFeedback(
      'Reconociste como se manifiesta el miedo. Ponerle nombre a lo que sientes ya baja un poco la alarma.',
      { title: 'Manifestaciones reconocidas' }
    );

    /* ------------------------------------- NIVEL 1 REFUGIO DE LA RESPIRACION */
    await s.transition('Nivel 1 · Refugio de la Respiracion');
    s.setScene('refugio');
    s.setTitle('Refugio de la Respiracion', 'Nivel 1');
    await s.walkTo(30, { speed: 'normal' });
    await s.say(
      'Encontraste un refugio entre las rocas. Aqui el aire se siente mas estable. Vamos a respirar juntos: <strong>inhalar, mantener, exhalar</strong>.',
      { avatar: '🕯️', who: 'Refugio' }
    );
    setStrategy('respiracion');

    let fogLevel = 1;
    await startBreathingExercise(s, {
      cycles: 4,
      title: 'Refugio de la Respiracion',
      subtitle: 'Manten presionado para inhalar y suelta para exhalar. El circulo te marca el ritmo.',
      onCycle: (done, total) => {
        fogLevel = Math.max(0.35, 1 - (done / total) * 0.65);
        s.setAmbient(fogLevel);
        s.burstParticles(4, '·');
      },
      closingText: 'La niebla bajo y el escenario se estabilizo. El miedo puede seguir ahi: no desaparece del todo, y esta bien.'
    });
    completeActivity('fear-respiracion', 10);
    s.addPoints(10);
    await s.reward('gota-aire', 'La niebla no desaparecio por completo, y no hace falta. Tu cuerpo esta mas estable para seguir avanzando.', 5);

    /* --------------------------------- NIVEL 2 ESPEJO DE LOS PENSAMIENTOS */
    await s.transition('Nivel 2 · Espejo de los Pensamientos');
    s.setScene('espejo');
    s.setTitle('Espejo de los Pensamientos', 'Nivel 2');
    await s.walkTo(55, { speed: 'normal' });
    await s.react('think', 900);
    await s.say(
      'Frente a ti hay un espejo antiguo. En el flotan pensamientos que aparecen cuando el miedo crece. Toca cada uno y busca una forma mas ajustada de mirarlo.',
      { avatar: '🪞', who: 'Espejo' }
    );
    setStrategy('reevaluacion');

    await startReevaluationGame(s, {
      title: 'Espejo de los Pensamientos',
      subtitle: 'Toca un pensamiento y elige una alternativa equilibrada. Ninguna eleccion te quita puntos.',
      thoughts: [
        {
          text: 'No vas a poder',
          options: [
            { label: 'Es dificil, pero puedo intentarlo por partes.', balanced: true, feedback: 'La sombra se aclara. Cambiaste una sentencia por una posibilidad concreta.' },
            { label: 'Tienen razon, mejor no lo intento.', feedback: 'Esa idea aparece seguido cuando hay miedo. Fijate si tienes pruebas de que sea cierta, o si es una prediccion.' },
            { label: 'Nada me sale bien nunca.', feedback: '"Nunca" y "nada" suelen ser exageraciones del miedo. ¿Hubo alguna vez en que si pudiste?' }
          ]
        },
        {
          text: 'Algo malo va a pasar',
          options: [
            { label: 'No se que va a pasar; puedo prepararme y ver.', balanced: true, feedback: 'La incertidumbre sigue, pero ya no equivale a catastrofe.' },
            { label: 'Seguro pasa lo peor.', feedback: 'El miedo anticipa el peor final para protegerte. Casi nunca es el unico final posible.' },
            { label: 'Mejor me voy antes de que ocurra.', feedback: 'Evitar calma rapido, pero suele hacer el miedo mas grande la proxima vez.' }
          ]
        },
        {
          text: 'Vas a fallar',
          options: [
            { label: 'Puedo equivocarme y aun asi aprender de esto.', balanced: true, feedback: 'El error deja de ser una amenaza y pasa a ser informacion.' },
            { label: 'Si fallo, todo estara arruinado.', feedback: 'Revisa el tamano real de la consecuencia. ¿Que pasaria exactamente si sale mal?' },
            { label: 'Solo sirve si sale perfecto.', feedback: 'La exigencia extrema alimenta el miedo. ¿Le pedirias eso mismo a alguien que quieres?' }
          ]
        }
      ],
      onTransform: (solved, total) => {
        s.setAmbient(Math.max(0.2, fogLevel - (solved / total) * 0.35));
        s.el.world.dataset.path = String(solved);
        s.burstParticles(6, '✦');
      }
    });
    completeActivity('fear-espejo', 10);
    s.addPoints(10);
    await s.say(
      'Las sombras se aclaran y aparece un camino que antes no se veia. Los pensamientos siguen ahi, pero ahora tienen mas de una lectura.',
      { avatar: '🌉' }
    );
    await s.reward('lupa-realidad', 'Revisar un pensamiento no es obligarse a pensar en positivo: es comprobar si de verdad es asi.', 5);

    /* ------------------------------ NIVEL 3 PUENTE DE LA EXPOSICION GUIADA */
    await s.transition('Nivel 3 · Puente de la Exposicion Guiada');
    s.setScene('puente');
    s.setTitle('Puente de la Exposicion Guiada', 'Nivel 3');
    await s.walkTo(20, { speed: 'normal' });
    await s.react('fear', 800);
    await s.say(
      'Al final de la isla hay un abismo. No se cruza de un salto: se cruza construyendo <strong>pasos pequenos</strong>, del mas facil al mas dificil.',
      { avatar: '🌉', who: 'Puente' }
    );
    setStrategy('exposicion');

    await startExposureGame(s, {
      steps: [
        { level: 1, icon: '👀', label: 'Mirar el abismo desde lejos', detail: 'Solo observar, sin acercarte.', feedback: 'Primer peldano. Mirar ya es exponerse un poco.' },
        { level: 2, icon: '🚶', label: 'Acercarme al borde y respirar', detail: 'Quedarte ahi unos segundos.', feedback: 'El cuerpo se acostumbra cuando le das tiempo.' },
        { level: 3, icon: '🦶', label: 'Poner un pie en el primer tablon', detail: 'Sin soltar la cuerda.', feedback: 'Peldano firme: probaste que puedes sostenerte.' },
        { level: 4, icon: '🪜', label: 'Cruzar la mitad y detenerme', detail: 'Comprobar que puedes parar cuando quieras.', feedback: 'Poder detenerte hace que avanzar sea menos amenazante.' },
        { level: 5, icon: '🏁', label: 'Cruzar el puente completo', detail: 'Con el miedo presente, pero manejable.', feedback: 'Lo cruzaste con miedo, no sin miedo. Esa es la diferencia.' }
      ],
      onPlank: (placed, total) => {
        s.setAmbient(Math.max(0.15, 0.55 - (placed / total) * 0.4));
        s.burstParticles(5, '✧');
      }
    });
    await s.walkTo(85, { speed: 'normal' });
    await s.react('celebrate', 900);
    completeActivity('fear-puente', 10);
    s.addPoints(10);
    await s.reward('puente-pasos', 'Cruzaste con el miedo presente. Exponerse de a poco ensena al cuerpo que puede sostener lo que antes evitaba.', 5);

    /* --------------------------------------------------------------- CIERRE */
    await s.transition('Cierre');
    s.setScene('cierre');
    s.setAmbient(0.2);

    let result = await reevaluationScreen(s, {
      emotion: 'miedo',
      question: '¿COMO ESTA AHORA TU MIEDO?',
      initial: gameState.initialIntensity ?? 'media',
      strategyLabel: 'Respiracion + reevaluacion + exposicion'
    });
    while (result.again) {
      await startBreathingExercise(s, {
        cycles: 3,
        title: 'Practicamos otra vez',
        subtitle: 'Sin apuro. Repetir tambien es parte de aprender.',
        onCycle: () => s.burstParticles(3, '·')
      });
      result = await reevaluationScreen(s, {
        emotion: 'miedo',
        question: '¿COMO ESTA AHORA TU MIEDO?',
        initial: gameState.initialIntensity ?? 'media',
        strategyLabel: 'Respiracion guiada'
      });
    }
    recordReevaluation('fear', gameState.initialIntensity ?? 'media', 'Respiracion + reevaluacion + exposicion', result.finalIntensity);

    await s.say(
      'Saliste de la niebla con tres herramientas nuevas. Regular el miedo no fue hacerlo desaparecer: fue poder avanzar mientras estaba ahi.',
      { avatar: '🕯️', who: 'Isla del Miedo', cta: 'Recibir insignia' }
    );

    s.setCharacterState('celebrate');
    s.burstParticles(26, '✨');
    this.onComplete?.({
      islandId: 'fear',
      success: true,
      emoAventura: true,
      badge: 'fear',
      title: 'Isla del Miedo',
      message: 'Reconociste el miedo, respiraste, revisaste tus pensamientos y cruzaste el puente paso a paso.'
    });
  }

  /* ------------------------------------------------------ exploracion libre */

  async explore() {
    const s = this.stage;
    const spots = [
      { id: 'sombra', x: 22, icon: '👤', label: 'Una sombra que se mueve', state: 'fear', text: 'Te detienes. La sombra resulta ser una rama movida por el viento. El cuerpo reacciono <strong>antes</strong> de que pudieras comprobarlo: asi funciona la alarma del miedo.' },
      { id: 'ruido', x: 52, icon: '🔊', label: 'Un ruido entre los arboles', state: 'surprise', text: 'Un crujido. Te sobresaltas y luego escuchas con atencion. El susto dura poco cuando podemos revisar que lo produjo.' },
      { id: 'puerta', x: 78, icon: '🚪', label: 'Una puerta entreabierta', state: 'think', text: 'No sabes que hay del otro lado. La incertidumbre es incomoda, y aun asi puedes decidir acercarte de a poco.' }
    ];
    let visited = 0;

    return s.interaction((done) => {
      const props = s.setProps(`
        ${spots.map((sp) => `
          <button class="fear-spot" type="button" data-spot="${sp.id}" style="--x:${sp.x}%">
            <span class="fear-spot__icon" aria-hidden="true">${sp.icon}</span>
            <span class="fear-spot__label">${sp.label}</span>
          </button>
        `).join('')}
      `);

      const counter = document.createElement('p');
      counter.className = 'emo-hint';
      counter.textContent = `Explora los 3 puntos de la isla (0/3)`;
      props.appendChild(counter);

      props.addEventListener('click', async (e) => {
        const btn = e.target.closest('[data-spot]');
        if (!btn || btn.classList.contains('is-done')) return;
        const spot = spots.find((sp) => sp.id === btn.dataset.spot);
        props.querySelectorAll('[data-spot]').forEach((b) => { b.disabled = true; });
        try {
          await s.walkTo(spot.x, { speed: 'lenta' });
          await s.react(spot.state, 700);
          await s.say(spot.text, { avatar: spot.icon, who: spot.label });
        } catch (err) {
          if (err === ABORTED) return;
          throw err;
        }
        if (s.disposed) return;
        btn.classList.add('is-done');
        visited += 1;
        counter.textContent = `Explora los 3 puntos de la isla (${visited}/3)`;
        props.querySelectorAll('[data-spot]').forEach((b) => {
          b.disabled = b.classList.contains('is-done');
        });
        s.addPoints(3, { silent: true });
        if (visited >= spots.length) {
          completeActivity('fear-exploracion', 5);
          s.clearProps();
          done(true);
        }
      });
    });
  }
}
