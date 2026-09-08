// EMO-AVENTURA · Actividades reutilizables
// Cada funcion es un minijuego real: devuelve una promesa que se resuelve
// cuando el jugador completa la interaccion. Ninguna resta puntos ni vidas.

import { prefersReducedMotion } from '../data/gameState.js?v=20260908174459';

/* ============================================================ RESPIRACION */

/**
 * Respiracion guiada interactiva: INHALAR -> MANTENER -> EXHALAR.
 * El circulo crece al inhalar y baja al exhalar. Cada ciclo completo
 * reduce el ambiente (niebla / lava / activacion) mediante onCycle.
 */
export function startBreathingExercise(stage, {
  cycles = 3,
  inhale = 4000,
  hold = 2000,
  exhale = 6000,
  title = 'Respiracion guiada',
  subtitle = 'Sigue el ritmo con el circulo.',
  holdLabel = 'Manten presionado para inhalar',
  releaseLabel = 'Suelta para exhalar',
  onCycle = null,
  closingText = ''
} = {}) {
  return stage.panel((body, done) => {
    let cycle = 0;
    let phase = 'idle';
    let raf = null;
    let phaseStart = 0;
    let auto = false;
    let pressed = false;

    body.innerHTML = `
      <div class="breath">
        <div class="breath__stage">
          <div class="breath__ring" data-ring>
            <div class="breath__circle" data-circle>
              <span class="breath__phase" data-phase>Listo</span>
              <span class="breath__count" data-count></span>
            </div>
          </div>
        </div>
        <p class="breath__hint" data-hint>${holdLabel}</p>
        <div class="breath__dots" data-dots>
          ${Array.from({ length: cycles }, (_, i) => `<i data-dot="${i}"></i>`).join('')}
        </div>
        <div class="breath__actions">
          <button class="emo-btn emo-btn--primary breath__btn" type="button" data-breathe>
            Inhalar
          </button>
          <button class="emo-btn emo-btn--ghost" type="button" data-auto>Guiarme automaticamente</button>
        </div>
      </div>
    `;

    const circle = body.querySelector('[data-circle]');
    const phaseEl = body.querySelector('[data-phase]');
    const countEl = body.querySelector('[data-count]');
    const hintEl = body.querySelector('[data-hint]');
    const btn = body.querySelector('[data-breathe]');
    const autoBtn = body.querySelector('[data-auto]');

    const setScale = (v) => circle.style.setProperty('--scale', v.toFixed(3));

    const finishCycle = () => {
      cycle += 1;
      const dot = body.querySelector(`[data-dot="${cycle - 1}"]`);
      if (dot) dot.classList.add('is-done');
      onCycle?.(cycle, cycles);
      stage.playTone(430, 0.05);
      if (cycle >= cycles) {
        phase = 'done';
        phaseEl.textContent = 'Listo';
        countEl.textContent = '';
        hintEl.textContent = closingText || 'Tu cuerpo se estabilizo un poco. La emocion puede seguir ahi, y esta bien.';
        btn.textContent = 'Continuar';
        btn.dataset.finish = 'true';
        autoBtn.hidden = true;
        stopClock();
        setScale(1);
        return true;
      }
      return false;
    };

    // Reloj propio con setInterval: sigue avanzando aunque el navegador
    // congele requestAnimationFrame (pestana en segundo plano, ahorro de bateria).
    const startClock = () => {
      clearInterval(raf);
      raf = setInterval(() => loop(performance.now()), 60);
    };
    const stopClock = () => clearInterval(raf);

    const loop = (now) => {
      if (stage.disposed) { stopClock(); return; }
      const elapsed = now - phaseStart;
      if (phase === 'inhale') {
        const p = Math.min(1, elapsed / inhale);
        setScale(1 + p * 0.75);
        countEl.textContent = Math.ceil((inhale - elapsed) / 1000);
        if (!auto && !pressed && p < 0.85) {
          phase = 'idle';
          phaseEl.textContent = 'Sin apuro';
          hintEl.textContent = 'Vuelve a empezar cuando quieras: no hay error posible.';
          setScale(1);
          btn.textContent = 'Inhalar';
          return;
        }
        if (p >= 1) { phase = 'hold'; phaseStart = now; phaseEl.textContent = 'MANTENER'; hintEl.textContent = 'Sostén el aire un momento'; }
      } else if (phase === 'hold') {
        const p = Math.min(1, elapsed / hold);
        countEl.textContent = Math.ceil((hold - elapsed) / 1000);
        if (p >= 1) {
          phase = 'exhale';
          phaseStart = now;
          phaseEl.textContent = 'EXHALAR';
          hintEl.textContent = auto ? 'Deja salir el aire despacio' : releaseLabel;
          btn.textContent = 'Exhalando...';
        }
      } else if (phase === 'exhale') {
        const p = Math.min(1, elapsed / exhale);
        setScale(1.75 - p * 0.75);
        countEl.textContent = Math.ceil((exhale - elapsed) / 1000);
        if (p >= 1) {
          const ended = finishCycle();
          if (ended) return;
          phase = 'idle';
          phaseEl.textContent = 'Listo';
          countEl.textContent = '';
          btn.textContent = 'Inhalar';
          hintEl.textContent = auto ? 'Siguiente ciclo...' : holdLabel;
          if (auto) { startInhale(); return; }
        }
      }
    };

    const startInhale = () => {
      phase = 'inhale';
      phaseStart = performance.now();
      phaseEl.textContent = 'INHALAR';
      hintEl.textContent = auto ? 'Toma aire lentamente por la nariz' : 'Manten presionado';
      btn.textContent = 'Inhalando...';
      stage.setCharacterState('breathe');
      startClock();
    };

    btn.addEventListener('pointerdown', () => {
      if (btn.dataset.finish) return;
      pressed = true;
      if (phase === 'idle') startInhale();
    });
    const release = () => {
      pressed = false;
      if (phase === 'inhale' && !auto) {
        // soltó antes de tiempo: sin penalizacion, se reinicia el ciclo
        phase = 'idle';
        phaseEl.textContent = 'Sin apuro';
        hintEl.textContent = 'Puedes intentarlo de nuevo, a tu ritmo.';
        setScale(1);
        btn.textContent = 'Inhalar';
        stopClock();
      }
    };
    btn.addEventListener('pointerup', release);
    btn.addEventListener('pointerleave', release);
    btn.addEventListener('pointercancel', release);

    btn.addEventListener('click', () => {
      if (btn.dataset.finish) {
        stopClock();
        stage.setCharacterState('idle');
        done({ cycles: cycle });
      }
    });

    // Accesibilidad: teclado / guiado automatico
    btn.addEventListener('keydown', (e) => {
      if ((e.key === ' ' || e.key === 'Enter') && !btn.dataset.finish && phase === 'idle') {
        auto = true;
        autoBtn.hidden = true;
        startInhale();
      }
    });
    autoBtn.addEventListener('click', () => {
      auto = true;
      autoBtn.hidden = true;
      hintEl.textContent = 'Solo sigue el ritmo del circulo.';
      if (phase === 'idle') startInhale();
    });

    setScale(1);
  }, { title, subtitle, className: 'emo-panel--breath' });
}

/* ==================================================== REEVALUACION COGNITIVA */

/**
 * Espejo de pensamientos: cada pensamiento extremo se transforma al elegir
 * una alternativa equilibrada. Elegir otra opcion no penaliza: explica y sigue.
 */
export function startReevaluationGame(stage, {
  title = 'Espejo de los Pensamientos',
  subtitle = 'Toca un pensamiento y elige una forma mas equilibrada de mirarlo.',
  thoughts = [],
  onTransform = null,
  transformedLabel = 'Pensamiento equilibrado'
} = {}) {
  return stage.panel((body, done) => {
    let solved = 0;

    body.innerHTML = `
      <div class="mirror">
        <div class="mirror__bubbles" data-bubbles>
          ${thoughts.map((t, i) => `
            <button class="thought" type="button" data-thought="${i}">
              <span class="thought__shadow" aria-hidden="true"></span>
              <span class="thought__text">"${t.text}"</span>
              <span class="thought__tag">tocar</span>
            </button>
          `).join('')}
        </div>
        <div class="mirror__work" data-work hidden></div>
        <p class="mirror__progress" data-progress>0 de ${thoughts.length} transformados</p>
        <button class="emo-btn emo-btn--primary" type="button" data-finish hidden>Continuar</button>
      </div>
    `;

    const work = body.querySelector('[data-work]');
    const progress = body.querySelector('[data-progress]');
    const finishBtn = body.querySelector('[data-finish]');

    const openThought = (idx) => {
      const t = thoughts[idx];
      const bubble = body.querySelector(`[data-thought="${idx}"]`);
      if (!bubble || bubble.classList.contains('is-done')) return;
      work.hidden = false;
      work.innerHTML = `
        <p class="mirror__question">"${t.text}"</p>
        <p class="mirror__hint">¿Que otra forma de verlo puede ser mas ajustada a la realidad?</p>
        <div class="mirror__options">
          ${t.options.map((o, i) => `
            <button class="emo-choice emo-choice--wide" type="button" data-opt="${i}">
              <span class="emo-choice__text"><strong>${o.label}</strong>${o.detail ? `<small>${o.detail}</small>` : ''}</span>
            </button>
          `).join('')}
        </div>
      `;
      work.scrollIntoView({ block: 'nearest', behavior: prefersReducedMotion() ? 'auto' : 'smooth' });

      work.querySelectorAll('[data-opt]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const opt = t.options[Number(btn.dataset.opt)];
          if (opt.balanced) {
            bubble.classList.add('is-transforming');
            stage.playTone(760, 0.08);
            setTimeout(() => {
              bubble.classList.remove('is-transforming');
              bubble.classList.add('is-done');
              bubble.querySelector('.thought__text').textContent = `"${opt.label}"`;
              bubble.querySelector('.thought__tag').textContent = transformedLabel;
            }, prefersReducedMotion() ? 60 : 620);
            solved += 1;
            progress.textContent = `${solved} de ${thoughts.length} transformados`;
            onTransform?.(solved, thoughts.length);
            work.innerHTML = `<p class="mirror__ok">${opt.feedback ?? 'La sombra se aclara: el pensamiento sigue ahi, pero ahora cabe la duda y otras posibilidades.'}</p>`;
            if (solved >= thoughts.length) {
              finishBtn.hidden = false;
              finishBtn.focus({ preventScroll: true });
            }
          } else {
            work.querySelectorAll('[data-opt]').forEach((b) => b.classList.remove('is-picked'));
            btn.classList.add('is-picked');
            const note = work.querySelector('.mirror__note') ?? document.createElement('p');
            note.className = 'mirror__note';
            note.innerHTML = opt.feedback ?? 'Esa idea tambien puede aparecer. Fijate si es la unica explicacion posible o si hay otra que se ajuste mejor a lo que realmente esta pasando.';
            work.appendChild(note);
          }
        });
      });
    };

    body.querySelectorAll('[data-thought]').forEach((b) => {
      b.addEventListener('click', () => openThought(Number(b.dataset.thought)));
    });
    finishBtn.addEventListener('click', () => done({ solved }));
  }, { title, subtitle, className: 'emo-panel--mirror' });
}

/* ================================================== ESPEJO DE MANIFESTACIONES */

/**
 * Espejo de senales: el jugador toca cada manifestacion (fisica, cognitiva o
 * conductual) y recibe una explicacion. Debe revisarlas todas para avanzar.
 */
export function signalMirror(stage, {
  title = 'Espejo de las Reacciones',
  subtitle = 'Toca cada senal para descubrir que te esta contando tu cuerpo.',
  groups = [],
  cta = 'Continuar'
} = {}) {
  const all = groups.flatMap((g) => g.items);
  return stage.panel((body, done) => {
    let seen = 0;

    body.innerHTML = `
      <div class="signals">
        ${groups.map((g) => `
          <section class="signals__group">
            <h4>${g.icon ? `<span aria-hidden="true">${g.icon}</span> ` : ''}${g.title}</h4>
            <div class="signals__grid">
              ${g.items.map((it) => `
                <button class="signal" type="button" data-id="${it.id}">
                  <span class="signal__icon" aria-hidden="true">${it.icon ?? '•'}</span>
                  <span class="signal__label">${it.label}</span>
                </button>
              `).join('')}
            </div>
          </section>
        `).join('')}
        <div class="signals__detail" data-detail aria-live="polite">
          <p>Selecciona una senal para leer que significa.</p>
        </div>
        <p class="signals__progress" data-progress>0 de ${all.length} revisadas</p>
        <button class="emo-btn emo-btn--primary" type="button" data-finish hidden>${cta}</button>
      </div>
    `;

    const detail = body.querySelector('[data-detail]');
    const progress = body.querySelector('[data-progress]');
    const finishBtn = body.querySelector('[data-finish]');

    body.querySelectorAll('.signal').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = all.find((i) => i.id === btn.dataset.id);
        if (!item) return;
        body.querySelectorAll('.signal').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        detail.innerHTML = `
          <p class="signals__detail-title"><span aria-hidden="true">${item.icon ?? '•'}</span> ${item.label}</p>
          <p>${item.text}</p>
        `;
        if (!btn.classList.contains('is-seen')) {
          btn.classList.add('is-seen');
          seen += 1;
          progress.textContent = `${seen} de ${all.length} revisadas`;
          stage.playTone(600 + seen * 20, 0.05);
          if (seen >= all.length) {
            finishBtn.hidden = false;
            finishBtn.focus({ preventScroll: true });
          }
        }
      });
    });

    finishBtn.addEventListener('click', () => done({ seen }));
  }, { title, subtitle, className: 'emo-panel--signals' });
}

/* ======================================================= SECUENCIA DE PASOS */

/**
 * Secuencia ordenada tipo OBSERVAR -> IDENTIFICAR -> APRECIAR -> DISFRUTAR.
 * El jugador debe tocar cada paso en orden. Tocar otro paso no penaliza:
 * explica cual viene primero.
 */
export function sequenceActivity(stage, {
  title = '',
  subtitle = '',
  steps = [],
  onStep = null,
  cta = 'Continuar',
  finalText = ''
} = {}) {
  return stage.panel((body, done) => {
    let index = 0;

    body.innerHTML = `
      <div class="sequence">
        <ol class="sequence__list" data-list>
          ${steps.map((s, i) => `
            <li class="sequence__item" data-step="${i}">
              <button class="sequence__btn" type="button" data-idx="${i}">
                <span class="sequence__num">${i + 1}</span>
                <span class="sequence__body">
                  <strong>${s.label}</strong>
                  <small>${s.text ?? ''}</small>
                </span>
                <span class="sequence__check" aria-hidden="true">✓</span>
              </button>
            </li>
          `).join('')}
        </ol>
        <p class="sequence__note" data-note aria-live="polite">Toca el paso 1 para comenzar.</p>
        <button class="emo-btn emo-btn--primary" type="button" data-finish hidden>${cta}</button>
      </div>
    `;

    const note = body.querySelector('[data-note]');
    const finishBtn = body.querySelector('[data-finish]');
    body.querySelector('[data-step="0"]')?.classList.add('is-next');

    body.querySelectorAll('[data-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.idx);
        const item = body.querySelector(`[data-step="${i}"]`);
        if (item.classList.contains('is-done')) return;
        if (i !== index) {
          note.textContent = `Ese paso viene despues. Primero: ${steps[index].label}.`;
          item.classList.add('is-shake');
          setTimeout(() => item.classList.remove('is-shake'), 420);
          return;
        }
        item.classList.remove('is-next');
        item.classList.add('is-done');
        stage.playTone(520 + i * 90, 0.07);
        onStep?.(steps[i], i, steps.length);
        note.innerHTML = steps[i].feedback ?? `<strong>${steps[i].label}</strong> completado.`;
        index += 1;
        if (index < steps.length) {
          body.querySelector(`[data-step="${index}"]`)?.classList.add('is-next');
        } else {
          if (finalText) note.innerHTML = finalText;
          finishBtn.hidden = false;
          finishBtn.focus({ preventScroll: true });
        }
      });
    });

    finishBtn.addEventListener('click', () => done({ completed: index }));
  }, { title, subtitle, className: 'emo-panel--sequence' });
}

/* ================================================== EXPOSICION PROGRESIVA */

/**
 * Puente de la exposicion guiada: el jugador coloca los peldanos de menor a
 * mayor dificultad. Elegir un paso mas grande no penaliza: se explica y sigue.
 */
export function startExposureGame(stage, {
  title = 'Puente de la Exposicion Guiada',
  subtitle = 'Coloca los pasos del mas pequeno al mas grande. El puente se construye solo si vas de a poco.',
  steps = [],
  onPlank = null
} = {}) {
  const ordered = [...steps].sort((a, b) => a.level - b.level);
  const shuffled = [...steps].sort(() => Math.random() - 0.5);

  return stage.panel((body, done) => {
    let placed = 0;

    body.innerHTML = `
      <div class="bridge">
        <div class="bridge__scene" data-scene>
          <div class="bridge__cliff bridge__cliff--left"></div>
          <div class="bridge__planks" data-planks>
            ${ordered.map((_, i) => `<span class="bridge__plank" data-plank="${i}"></span>`).join('')}
          </div>
          <div class="bridge__cliff bridge__cliff--right"><span class="bridge__goal" aria-hidden="true">🏁</span></div>
          <div class="bridge__walker" data-walker style="--p:0">${stage.player?.avatar ?? '🧒'}</div>
        </div>
        <p class="bridge__note" data-note aria-live="polite">Elige el paso mas pequeno para empezar.</p>
        <div class="bridge__options" data-options>
          ${shuffled.map((s) => `
            <button class="emo-choice emo-choice--wide" type="button" data-level="${s.level}">
              <span class="emo-choice__icon" aria-hidden="true">${s.icon ?? '🪜'}</span>
              <span class="emo-choice__text"><strong>${s.label}</strong>${s.detail ? `<small>${s.detail}</small>` : ''}</span>
            </button>
          `).join('')}
        </div>
        <button class="emo-btn emo-btn--primary" type="button" data-finish hidden>Cruzar el puente</button>
      </div>
    `;

    const note = body.querySelector('[data-note]');
    const walker = body.querySelector('[data-walker]');
    const finishBtn = body.querySelector('[data-finish]');

    body.querySelectorAll('[data-level]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const level = Number(btn.dataset.level);
        const expected = ordered[placed];
        if (level !== expected.level) {
          note.innerHTML = `Ese paso es mas grande de lo que necesitas ahora. La exposicion funciona <strong>de a poco</strong>: busca el mas pequeno que aun no hayas puesto.`;
          btn.classList.add('is-shake');
          setTimeout(() => btn.classList.remove('is-shake'), 420);
          return;
        }
        btn.disabled = true;
        btn.classList.add('is-placed');
        const plank = body.querySelector(`[data-plank="${placed}"]`);
        plank?.classList.add('is-on');
        placed += 1;
        walker.style.setProperty('--p', String(placed / ordered.length));
        stage.playTone(430 + placed * 70, 0.08);
        onPlank?.(placed, ordered.length, expected);
        note.innerHTML = expected.feedback ?? `Peldano firme. Diste un paso mas sin saltarte ninguno.`;
        if (placed >= ordered.length) {
          note.innerHTML = 'El puente esta completo. Cada paso pequeno hizo posible el siguiente.';
          finishBtn.hidden = false;
          finishBtn.focus({ preventScroll: true });
        }
      });
    });

    finishBtn.addEventListener('click', () => done({ placed }));
  }, { title, subtitle, className: 'emo-panel--bridge' });
}

/* ================================================== DESPLIEGUE ATENCIONAL */

/**
 * Encuentra N objetos: minijuego real de atencion. Cada objeto se marca.
 */
export function startAttentionGame(stage, {
  title = 'Cambio mi atencion',
  subtitle = 'Encuentra 5 objetos de color diferente.',
  count = 5,
  targetColor = '#ffb703',
  targetLabel = 'dorado',
  items = [],
  message = ''
} = {}) {
  return stage.panel((body, done) => {
    let found = 0;

    body.innerHTML = `
      <div class="attention">
        <div class="attention__field" data-field>
          ${items.map((it, i) => `
            <button class="attention__item ${it.target ? 'is-target' : ''}" type="button"
                    data-idx="${i}" data-target="${it.target ? 'true' : 'false'}"
                    style="--x:${it.x}%; --y:${it.y}%; --c:${it.target ? targetColor : it.color};"
                    aria-label="${it.label}">
              <span aria-hidden="true">${it.icon}</span>
            </button>
          `).join('')}
        </div>
        <div class="attention__counter">
          <span data-found>0</span> / ${count} objetos ${targetLabel}
          <div class="attention__slots" data-slots>
            ${Array.from({ length: count }, (_, i) => `<i data-slot="${i}"></i>`).join('')}
          </div>
        </div>
        <p class="attention__note" data-note aria-live="polite">Mira con calma: estan repartidos por la escena.</p>
        <button class="emo-btn emo-btn--primary" type="button" data-finish hidden>Continuar</button>
      </div>
    `;

    const foundEl = body.querySelector('[data-found]');
    const note = body.querySelector('[data-note]');
    const finishBtn = body.querySelector('[data-finish]');

    body.querySelectorAll('.attention__item').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('is-found')) return;
        if (btn.dataset.target === 'true') {
          btn.classList.add('is-found');
          found += 1;
          foundEl.textContent = String(found);
          body.querySelector(`[data-slot="${found - 1}"]`)?.classList.add('is-on');
          stage.playTone(560 + found * 80, 0.07);
          note.textContent = found >= count
            ? 'Los encontraste todos.'
            : `Muy bien. Te faltan ${count - found}.`;
          if (found >= count) {
            if (message) note.innerHTML = message;
            finishBtn.hidden = false;
            finishBtn.focus({ preventScroll: true });
          }
        } else {
          btn.classList.add('is-shake');
          setTimeout(() => btn.classList.remove('is-shake'), 400);
          note.textContent = 'Ese es de otro color. Sigue buscando, sin apuro.';
        }
      });
    });

    finishBtn.addEventListener('click', () => done({ found }));
  }, { title, subtitle, className: 'emo-panel--attention' });
}

/* ============================================================= 5-4-3-2-1 */

/**
 * Anclaje al presente: 5 cosas que ves, 4 que tocas, 3 sonidos, 2 olores, 1 sabor.
 * Cada elemento encontrado se resalta y queda registrado.
 */
export function startGroundingGame(stage, {
  title = 'Regreso al presente',
  subtitle = 'Ancla tu atencion en lo que hay aqui y ahora.',
  senses = [],
  closing = 'Estoy aqui. Puedo detenerme y decidir que hacer.'
} = {}) {
  return stage.panel((body, done) => {
    let senseIndex = 0;
    const log = [];

    body.innerHTML = `
      <div class="grounding">
        <div class="grounding__steps" data-steps>
          ${senses.map((s, i) => `<span class="grounding__step" data-step="${i}">${s.count} ${s.icon}</span>`).join('')}
        </div>
        <h4 class="grounding__title" data-sense-title></h4>
        <div class="grounding__field" data-field></div>
        <p class="grounding__log" data-log aria-live="polite"></p>
        <button class="emo-btn emo-btn--primary" type="button" data-finish hidden>Continuar</button>
      </div>
    `;

    const titleEl = body.querySelector('[data-sense-title]');
    const field = body.querySelector('[data-field]');
    const logEl = body.querySelector('[data-log]');
    const finishBtn = body.querySelector('[data-finish]');

    const renderSense = () => {
      const sense = senses[senseIndex];
      body.querySelectorAll('.grounding__step').forEach((el, i) => {
        el.classList.toggle('is-active', i === senseIndex);
        el.classList.toggle('is-done', i < senseIndex);
      });
      let picked = 0;
      titleEl.innerHTML = `${sense.icon} <strong>${sense.count}</strong> ${sense.prompt}`;
      field.innerHTML = sense.items.map((it, i) => `
        <button class="grounding__item" type="button" data-idx="${i}">
          <span aria-hidden="true">${it.icon}</span>
          <span>${it.label}</span>
        </button>
      `).join('');

      field.querySelectorAll('[data-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (btn.classList.contains('is-picked')) return;
          btn.classList.add('is-picked');
          picked += 1;
          const item = sense.items[Number(btn.dataset.idx)];
          log.push(`${sense.icon} ${item.label}`);
          logEl.textContent = log.join(' · ');
          stage.playTone(500 + picked * 60, 0.06);
          if (picked >= sense.count) {
            senseIndex += 1;
            if (senseIndex < senses.length) {
              setTimeout(renderSense, prefersReducedMotion() ? 60 : 480);
            } else {
              body.querySelectorAll('.grounding__step').forEach((el) => el.classList.add('is-done'));
              titleEl.innerHTML = `🪷 <strong>${closing}</strong>`;
              field.innerHTML = '';
              finishBtn.hidden = false;
              finishBtn.focus({ preventScroll: true });
            }
          }
        });
      });
    };

    renderSense();
    finishBtn.addEventListener('click', () => done({ log }));
  }, { title, subtitle, className: 'emo-panel--grounding' });
}

/* ============================================================ TERMOMETRO */

/**
 * Termometro interactivo de intensidad. Al mover el nivel cambia el ambiente
 * de la isla en tiempo real (stage.setIntensity + onChange).
 */
export function intensityThermometer(stage, {
  title = '¿Que tan intensa esta tu emocion?',
  subtitle = '',
  emotion = 'emocion',
  levels = [
    { id: 'baja', label: 'BAJA', text: 'Me incomoda, pero puedo manejarlo.' },
    { id: 'media', label: 'MEDIA', text: 'Esta aumentando.' },
    { id: 'alta', label: 'ALTA', text: 'Esta muy fuerte y necesito detenerme.' }
  ],
  onChange = null,
  cta = 'Confirmar'
} = {}) {
  return stage.panel((body, done) => {
    let current = null;

    body.innerHTML = `
      <div class="thermo">
        <div class="thermo__tube">
          <div class="thermo__fill" data-fill></div>
          <div class="thermo__bulb"></div>
        </div>
        <div class="thermo__levels">
          ${levels.map((l, i) => `
            <button class="thermo__level" type="button" data-id="${l.id}" data-i="${i}">
              <strong>${l.label}</strong>
              <small>${l.text}</small>
            </button>
          `).join('')}
        </div>
        <p class="thermo__hint" data-hint>Toca un nivel: veras como cambia el ambiente de la isla.</p>
        <button class="emo-btn emo-btn--primary" type="button" data-finish disabled>${cta}</button>
      </div>
    `;

    const fill = body.querySelector('[data-fill]');
    const hint = body.querySelector('[data-hint]');
    const finishBtn = body.querySelector('[data-finish]');

    body.querySelectorAll('.thermo__level').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.i);
        const level = levels[idx];
        current = level;
        body.querySelectorAll('.thermo__level').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        fill.style.setProperty('--h', `${((idx + 1) / levels.length) * 100}%`);
        fill.dataset.level = level.id;
        hint.textContent = level.text;
        finishBtn.disabled = false;
        stage.setIntensity(level.id, { label: level.label });
        stage.setAmbient((idx + 1) / levels.length);
        onChange?.(level.id, idx);
        stage.playTone(360 + idx * 120, 0.06);
      });
    });

    finishBtn.addEventListener('click', () => current && done(current));
  }, { title, subtitle: subtitle || `Marca el nivel de tu ${emotion}.`, className: 'emo-panel--thermo' });
}

/* ================================================ ESTRATEGIA ALTERNATIVA */

/**
 * Aviso cuando el jugador elige una estrategia distinta a la sugerida.
 * NO quita puntos ni vidas. Devuelve 'continue' o 'others'.
 */
export function alternativeStrategyNotice(stage) {
  return stage.panel((body, done) => {
    body.innerHTML = `
      <div class="alt-strategy">
        <p class="alt-strategy__lead">Esta estrategia tambien puede utilizarse.</p>
        <p>De acuerdo con la intensidad que identificaste, otra estrategia podria ayudarte en este momento.</p>
        <p>Puedes continuar con la estrategia seleccionada o explorar otra alternativa.</p>
        <div class="alt-strategy__actions">
          <button class="emo-btn emo-btn--primary" type="button" data-continue>CONTINUAR CON ESTA ESTRATEGIA</button>
          <button class="emo-btn" type="button" data-others>VER OTRAS ESTRATEGIAS</button>
        </div>
      </div>
    `;
    body.querySelector('[data-continue]').focus({ preventScroll: true });
    body.querySelector('[data-continue]').addEventListener('click', () => done('continue'));
    body.querySelector('[data-others]').addEventListener('click', () => done('others'));
  }, { title: 'Otra ruta posible', className: 'emo-panel--alt' });
}

/* =========================================================== REEVALUACION */

/**
 * Reevaluacion general: pregunta la intensidad final, la compara con la inicial
 * y muestra INTENSIDAD INICIAL -> ESTRATEGIA -> INTENSIDAD FINAL.
 * Devuelve { finalIntensity, direction, again }.
 */
export function reevaluationScreen(stage, {
  emotion = 'emocion',
  question = '¿COMO ESTA AHORA TU EMOCION?',
  initial = 'media',
  strategyLabel = '',
  levels = ['baja', 'media', 'alta'],
  allowRetry = true
} = {}) {
  const order = { baja: 1, media: 2, alta: 3 };
  return stage.panel((body, done) => {
    body.innerHTML = `
      <div class="reeval">
        <h4 class="reeval__q">${question}</h4>
        <div class="reeval__levels">
          ${levels.map((l) => `<button class="emo-btn emo-btn--level" type="button" data-level="${l}">${l.toUpperCase()}</button>`).join('')}
        </div>
        <div class="reeval__result" data-result hidden></div>
      </div>
    `;

    const result = body.querySelector('[data-result]');

    body.querySelectorAll('[data-level]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const final = btn.dataset.level;
        body.querySelectorAll('[data-level]').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const diff = order[final] - order[initial];
        const direction = diff < 0 ? 'down' : diff === 0 ? 'same' : 'up';
        stage.setIntensity(final);

        const messages = {
          down: `<p class="reeval__msg">La intensidad de tu ${emotion} disminuyo.</p>
                 <p>Regular no significa dejar de sentir: la emocion puede seguir presente, pero ahora ocupa menos espacio.</p>`,
          same: `<p class="reeval__msg">La ${emotion} continua presente.</p>
                 <p>Una estrategia no siempre cambia inmediatamente la intensidad de una emocion. Puedes practicar otra vez o probar otra estrategia.</p>`,
          up: `<p class="reeval__msg">La ${emotion} continua siendo intensa.</p>
               <p>Haz una pausa antes de actuar y considera buscar apoyo de una persona de confianza o de un profesional si lo necesitas.</p>`
        };

        result.hidden = false;
        result.innerHTML = `
          <div class="reeval__track">
            <span class="reeval__chip" data-k="ini">Inicial<strong>${initial.toUpperCase()}</strong></span>
            <span class="reeval__arrow" aria-hidden="true">→</span>
            <span class="reeval__chip" data-k="str">Estrategia<strong>${strategyLabel || '—'}</strong></span>
            <span class="reeval__arrow" aria-hidden="true">→</span>
            <span class="reeval__chip" data-k="fin">Final<strong>${final.toUpperCase()}</strong></span>
          </div>
          ${messages[direction]}
          <div class="reeval__actions">
            ${allowRetry && direction !== 'down' ? '<button class="emo-btn" type="button" data-again>Practicar otra vez</button>' : ''}
            <button class="emo-btn emo-btn--primary" type="button" data-ok>Continuar</button>
          </div>
        `;
        result.querySelector('[data-ok]').focus({ preventScroll: true });
        result.querySelector('[data-ok]').addEventListener('click', () => done({ finalIntensity: final, direction, again: false }));
        result.querySelector('[data-again]')?.addEventListener('click', () => done({ finalIntensity: final, direction, again: true }));
      });
    });
  }, { title: 'Reevaluacion', subtitle: 'Comparemos como estabas al empezar y como estas ahora.', className: 'emo-panel--reeval' });
}
