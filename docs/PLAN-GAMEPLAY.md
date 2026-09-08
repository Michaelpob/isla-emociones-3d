# PLAN-GAMEPLAY · Isla Emociones 3D → mundo 3D jugable

**Fase 0 · Auditoría del proyecto existente** (actualizado en cada fase con lo realmente implementado)

---

## 0.1 Verificación de arranque

| Comprobación | Resultado |
|---|---|
| `pnpm install` / `pnpm dev` | **No ejecutable en esta máquina**: no hay Node instalado (no aparece en PATH, ni en el registro de programas, ni existe `node.exe`). `pnpm-lock.yaml` y `node_modules/` sí existen (three 0.179.1 disponible). |
| Alternativa usada | `python scripts/build-docs.py` genera `docs/` sin Node (importmap + three copiado de `node_modules`) y `python -m http.server -d docs` sirve el sitio. |
| Arranque sin errores | **Sí.** Consola limpia salvo el contador de visitas externo (`abacus.jasoncameron.dev`), que da CORS al servir desde `127.0.0.1` y funciona en el dominio real. |
| Flujo completo recorrido | menú → perfil → mapa 3D → isla (bloqueada / disponible) → minijuego → salida → desbloqueo → caja de herramientas / progreso / final. Todo funciona. |

> Cuando haya Node, `pnpm build` (vite) sustituye a `scripts/build-docs.py` sin cambios en el código.

---

## 0.2 Estado actual por isla

Las emociones son exactamente las de `src/data/islands.js`: **joy, sadness, anger, fear, disgust, surprise**.

| Isla | Emoción | Mecánica actual | Problema | Nueva mecánica | Objetivo | Recompensa |
|---|---|---|---|---|---|---|
| **Isla del Miedo** (`fear`) | Miedo | `FearIslandGame` (overlay DOM): diálogos + panel de respiración (mantener pulsado) + espejo de pensamientos (elegir opción) + puente (ordenar 5 botones) | Todo ocurre en paneles HTML sobre un mapa 3D estático. El verbo real es *leer y pulsar*. La oscuridad es una capa CSS, no un espacio que se recorra | **Primera persona.** Linterna con batería: correr la agota, detenerse y respirar la recarga. Encender 5 faroles repartidos en un bosque oscuro con sustos suaves (sombra que cruza, sonido) | Encender los 5 faroles antes de quedarse sin luz — se puede reintentar siempre | Lupa de la Realidad + Aliento del Refugio + Puente de los Pasos Pequeños (se conservan) · insignia Guardián del Miedo |
| **Valle de la Luz** (`joy`) | Alegría | `JoyValleyGame` (overlay DOM): 7 estrategias, cada una es un panel de botones/secuencias | Mismo patrón que Miedo con otro color. Cero movimiento del jugador | **Tercera persona.** Plataformas flotantes y orbes de luz que se recogen saltando y corriendo; cada orbe añade color, partículas, capas de música y vegetación al valle. Combo si encadenas recogidas sin tocar el suelo | Recoger los orbes y elevar el valle a su versión luminosa | Rayo de Alegría, Estrella del Disfrute, Rayo de Energía… (se conservan) · insignia Guardián de la Alegría |
| **Volcán de las Emociones** (`anger`) | Enojo | `BreathingCalmGame` (overlay DOM, 2D). `volcano-control` quedó registrado pero sin isla asignada | **Isla incompleta** según el documento: se trata como trabajo nuevo, no como refactor | **Primera persona.** El entorno se agita (objetos que levitan, niebla roja, temblor de cámara, música en ascenso). 4 focos de tensión; en cada uno respiración sostenida 4-4-4-4 manteniendo pulsado. Soltar antes de tiempo rompe la esfera y se reintenta al instante, sin castigo | Apagar los 4 focos y devolver el volcán a la calma | Gota de Calma · insignia Guardián de la Ira |
| **Guardianes del Desagrado** (`disgust`) | Asco | `DisgustGuardiansGame` (overlay DOM): 4 zonas, espejo, termómetro, 6 estrategias en paneles | Igual que las anteriores: elegir opciones en tarjetas | **Manipular y ordenar.** Cuatro zonas contaminadas: empujar objetos físicamente a su contenedor, activar mecanismos, decidir qué se conserva y qué se descarta | Limpiar las 4 zonas | Cristal de Calma, Semilla de Aceptación, Estrella del Presente… (se conservan) · insignia Guardián del Desagrado |
| **Isla de la Tristeza** (`sadness`) | Tristeza | `ComingSoonGame` (panel vacío) | **En desarrollo**: trabajo nuevo | Mundo gris, con niebla densa y sin ambiente sonoro. Fragmentos de recuerdo esparcidos; cada uno recogido transforma el escenario (brota vegetación, cambia el cielo, entra una capa de audio). El progreso se ve en el paisaje, no en una barra | Recoger los fragmentos y restaurar la isla | Cristal del Recuerdo Positivo · (isla fuera de la cadena de desbloqueo actual) |
| **Isla de la Sorpresa** (`surprise`) | Sorpresa | `ComingSoonGame` (panel vacío) | **En desarrollo**: trabajo nuevo | El escenario cambia cuando el jugador no mira; hay que detectar qué cambió y acercarse a ello | Detectar los cambios | Por definir |

**Verbos resultantes (uno por isla, sin repetir):** explorar en la oscuridad · saltar y recoger · mantener bajo presión · manipular y ordenar · encontrar y restaurar · observar.

---

## 0.3 Cómo funciona hoy el proyecto

### `src/data/gameState.js` — guardado de progreso
Objeto único `gameState` persistido en `localStorage` bajo `emo-aventura-state`:
`currentIsland, unlockedIslands, completedIslands, emotionalPoints, rewards, badges, tools, currentIntensity, initialIntensity, finalIntensity, selectedStrategy, completedActivities, progress, reevaluations, settings{sound, reduceMotion}`.
API: `loadProgress/saveProgress/resetGame`, `addPoints`, `completeActivity`, `addReward`, `addBadge`, `unlockIsland`, `completeIsland` (marca, da insignia y desbloquea la siguiente), `isUnlocked`, `allIslandsCompleted`, `changeIntensity/setInitialIntensity/setStrategy/recordReevaluation`, `getProgressSummary`, `setSetting`, `prefersReducedMotion`.
Cadena de desbloqueo: `ISLAND_CHAIN = ['fear','joy','anger','disgust']`; `FREE_ISLANDS = ['sadness','surprise']` (visibles, sin candado).
**Se conserva tal cual.** El 3D no cambia el guardado: cada isla sigue llamando a las mismas funciones.

### `src/data/islands.js` — registro de islas
Array con `id, name, displayName, emoji, subtitle, chapter, badge, reward, palette{land,accent,foliage,glow,ui}, position[x,y,z], radius, height, minigame`. `minigameLabels` mapea la clave del minijuego a su nombre visible.
El campo `minigame` es la clave que busca `src/minigames/index.js`. **Añadir una isla 3D = cambiar esa clave**, nada más.

### `src/ui/EmotionIslandApp.js` — navegación
Estados: `start → profile → map → island → game → result`. Monta `WorldScene` (mapa 3D con las 6 islas, WASD + E) en `.scene-host` y todas las pantallas HTML en `.overlay-root`.
`launchMinigame(island)` instancia `new Game({ host, island, player, onComplete, onExit, onOpenToolbox })` y llama `mount()`. `exitMinigame()` llama `dispose()`.
`showResult(result)` es el punto donde se cierra el ciclo: con `success:true` marca la isla, entrega insignia, desbloquea la siguiente y muestra la pantalla de isla completada (o la final si están las 4).
**Contrato que debe respetar todo minijuego nuevo:** `mount()`, `dispose()`, y llamar `onComplete({ islandId, success:true, emoAventura:true, badge, title, message })`.

### `src/engine/Stage.js` — entrada/salida de escena (2D)
Motor de las islas actuales: crea el DOM del juego (capas de escenario, personaje, HUD, capas de diálogo/panel/overlay/toast), primitivas `say/choices/panel/reward/toast/showFeedback`, `walkTo/setCharacterState`, `setScene/setIntensity/setAmbient`, partículas, transiciones y `playTone` (WebAudio).
Gestiona el aborto: `dispose()` rechaza todas las promesas pendientes con `ABORTED` y limpia timers, para que salir a mitad de partida no deje residuo.
**No desaparece**: sigue sirviendo para las tarjetas psicoeducativas opcionales del cierre. Deja de ser el lugar donde se juega.

### `src/engine/activities.js` — minijuegos 2D reutilizables
10 actividades (`startBreathingExercise`, `startReevaluationGame`, `signalMirror`, `sequenceActivity`, `startExposureGame`, `startAttentionGame`, `startGroundingGame`, `intensityThermometer`, `alternativeStrategyNotice`, `reevaluationScreen`). Todas devuelven promesa y ninguna penaliza.
**Destino:** el contenido psicoeducativo (intensidad, reevaluación, estrategias) se conserva, pero pasa a la tarjeta final opcional; el reto en sí se juega en 3D.

### `src/three/WorldScene.js` — mapa principal
Escena Three.js del archipiélago: renderer con ACES + sombras PCF, cielo con gradiente, océano con shader de olas, islas low-poly (`createIslandMesh.js`), jugador con movimiento WASD, cámara orbital con drag, `EffectComposer` + `UnrealBloomPass` + viñeta, `setCompleted()` (insignia flotante) y `setLocked()` (desaturado + candado 🔒).
**Se conserva como hub.** Las islas 3D se montan como escenas propias sobre el mismo host.

---

## 0.4 Riesgos y decisiones declaradas

1. **Sin Node en la máquina.** El build de producción se genera con `scripts/build-docs.py` (equivalente al de vite: mismo `docs/`, importmap + three de `node_modules`). `pnpm build` seguirá funcionando donde haya Node.
2. **Sin assets externos.** No hay imágenes, modelos ni audio en el repo. El audio se sintetiza con WebAudio (osciladores + ruido filtrado) y la geometría es low-poly procedural, como el resto del proyecto.
3. **El contenido psicoeducativo no se borra.** Herramientas, insignias, puntos, intensidad y reevaluación siguen existiendo; cambia dónde ocurren: fuera del camino crítico del juego, en tarjetas opcionales al final de cada isla.
4. **Tristeza y Sorpresa** no están en `ISLAND_CHAIN`. Se implementan como islas jugables y se decide su lugar en la cadena al integrarlas.

---

## Estado de implementación

| Fase | Estado |
|---|---|
| 0 · Auditoría | ✅ este documento |
| 1 · Núcleo 3D compartido | ✅ `PlayerController` · `Interactable` · `MinigameBase` · `Feedback` · `AudioBus` · `worldkit` |
| 2 · Una mecánica por isla | 🔵 Enojo ✅ · Miedo ✅ · Tristeza ✅ · Alegría ✅ · Asco ✅ · Sorpresa ⏳ |
| 3 · UI, feedback y progreso | ✅ para las islas 3D ya migradas |
| 4 · Transiciones y cierre | ✅ portal físico + tarjeta final opcional |
| 5 · Audio | ✅ capas sintetizadas + PositionalAudio + ducking |

---

## Fase 1 · Núcleo 3D implementado

| Archivo | Qué aporta |
|---|---|
| `src/engine/PlayerController.js` | WASD relativo a cámara, mouse look con Pointer Lock (1ª persona) y órbita de seguimiento (3ª persona), SPACE saltar, SHIFT correr, E interactuar, gravedad + groundCheck, colisiones cilindro↔AABB/esfera con deslizamiento, límites invisibles, aceleración/frenado suavizados, head-bob e inercia. Eventos `jump/step/land/interact`. |
| `src/engine/Interactable.js` | `Interactable` (radio, icono, callbacks `onEnter/onExit/onInteract`, realce por escala + emisivo) y `InteractableManager` (proximidad + orientación de cámara, chip `[E]` sin párrafos). |
| `src/engine/MinigameBase.js` | Ciclo `init/start/update/pause/reset/dispose`. Renderer (ACES, sombras PCF 1024, `shadowMap.autoUpdate=false`), escena, cámara, bucle, HUD mínima, controles táctiles, menú de pausa (ESC), portal de salida, tarjeta final opcional, medidor de FPS (F3) y `dispose()` que libera geometrías, materiales, texturas, listeners, rAF, timers y contexto WebGL. |
| `src/engine/Feedback.js` | Partículas con pooling en un único `InstancedMesh`, flash de luz, shake de cámara, tweens de color (niebla/cielo/luz) y de valor. Cero `new` por frame. |
| `src/engine/AudioBus.js` | Sonidos generados por código (osciladores + ruido filtrado) cacheados como `AudioBuffer`; eventos, capas ambientales en bucle, `THREE.PositionalAudio` en el mundo y ducking al concentrarse. |
| `src/engine/worldkit.js` | Terreno con relieve determinista (la misma función alimenta la malla y el groundCheck), `InstancedMesh` para vegetación/rocas, cielo con gradiente por shader, luces con una sola sombra por escena y avatar low-poly para 3ª persona. |

`MinigameBase.step(dt)` acepta un delta explícito: permite avanzar el juego de forma determinista en pruebas automatizadas, sin depender de `requestAnimationFrame`.

## Fase 2 · Isla del Enojo (implementada)

`src/minigames/anger/AngerVolcanoGame.js` · primera persona · verbo **mantener bajo presión**.

- El mundo es la barra de progreso: `tension` (1 → 0) controla niebla, color del cielo, brillo del cráter y de las grietas, opacidad de la lava, amplitud de las rocas que levitan, temblor de cámara, volumen del retumbo y **la velocidad del jugador** (con ira alta camina más lento).
- 4 focos de tensión repartidos por el terreno; cada uno se activa con `[E]` y pide una respiración **4-4-4-4** manteniendo pulsado (clic, E o botón táctil). La esfera crece al inhalar, se sostiene y baja al exhalar.
- Soltar durante *inhala* o *sostén* rompe la esfera: partículas, temblor, sonido suave y reintento inmediato. **Sin texto de fallo y sin castigo.** Si el jugador sigue pulsando durante *exhala*, la fase espera y aparece `SUELTA` (tampoco penaliza).
- Al apagar un foco su cristal pasa de rojo a azul, baja el temblor y la niebla vira. Con los 4 apagados el volcán se calma y **se abre un portal físico**: el jugador camina hasta él y lo cruza por su propia voluntad.
- Recompensa: Gota de Calma + insignia Guardián de la Ira. La explicación psicoeducativa está en la tarjeta final, que se puede leer o saltar.

**Verificado:** gravedad y aterrizaje, movimiento, colisión contra el cono del volcán, límites del mapa, chip `[E]`, rotura y reintento de la respiración, los 4 focos, apertura del portal, cierre completo con insignia y desbloqueo, y `dispose()` sin fugas (3 ciclos montar/liberar: 30 geometrías, 1 textura, 7 programas y 29 draw calls idénticos, 0 canvas huérfanos).


## Fase 2 · Isla del Miedo (implementada)

`src/minigames/fear/FearNightGame.js` · primera persona · verbo **explorar en la oscuridad**.

- **Linterna con batería** montada en la cámara. Correr la gasta ~3,4× más rápido que caminar (medido: 0,186 vs 0,054 en 3 s); detenerse y mantener pulsado activa la respiración y la recarga. Con poca batería la luz parpadea.
- **Quedarse a oscuras no es perder**: el bosque se apaga, aparece `PÁRATE Y RESPIRA`, el jugador va más lento y basta respirar para recuperar la luz. Sin pantalla de fallo.
- **5 faroles** repartidos por el bosque; cada uno encendido aclara la niebla, sube la luz ambiental y devuelve algo de batería.
- **Sustos suaves**: cada 16-30 s una silueta cruza a media distancia, con un sonido grave y un temblor mínimo; aparece y se desvanece sola. Nunca salta encima ni bloquea.
- Con los 5 faroles **amanece**: la niebla se abre, el cielo vira a naranja y se abre el portal.
- 150 árboles en dos `InstancedMesh` (tronco y copa) + 260 matas: 12 draw calls, ~14.800 triángulos.

**Verificado:** aterrizaje, gasto y recarga de batería, estado de oscuridad y recuperación, colisión contra troncos (el jugador se detiene a 0,8 m), los 5 faroles, amanecer, portal, tarjeta final e insignia.

## Fase 2 · Isla de la Tristeza (implementada)

`src/minigames/sadness/SadnessRestoreGame.js` · **tercera persona** · verbo **encontrar y restaurar**.

- El mundo arranca gris, con niebla densa y **sin capas de audio**: solo el viento del propio jugador.
- **6 fragmentos de recuerdo** flotando. Cada uno recogido dispara cuatro cosas a la vez:
  1. una **onda de vegetación** que brota desde el fragmento (hierba, flores y árboles que ya existían con escala 0 y crecen con retardo según la distancia);
  2. una **estructura caída que se reconstruye** pieza a pieza;
  3. una **capa de audio** nueva (pad, agua, viento, campanas);
  4. cielo, niebla, luz, color del suelo y color del propio avatar un paso más cálidos.
- **No hay barra de progreso**: el paisaje es el progreso. Los puntos del HUD solo cuentan fragmentos.
- Cada recuerdo se nombra en 3-4 palabras (`UNA TARDE DE LLUVIA`), nunca en párrafos.
- Con los 6 recogidos el mundo florece y se abre el portal.

Tristeza y Sorpresa tienen ahora insignia propia (Guardián de la Tristeza 💧, Guardián de la Sorpresa ✨) y la pantalla de isla completada funciona también para las islas fuera de la cadena de desbloqueo.

**Verificado:** tercera persona con avatar animado, recogida de los 6 fragmentos, brote de vegetación, reconstrucción de las 6 estructuras, 4 capas de audio, transición completa del color, portal, tarjeta final e insignia. 15 draw calls, ~12.700 triángulos.

### Mejora de build
`scripts/build-docs.py` añade un sello de versión (`?v=AAAAMMDDhhmmss`) a los imports de nuestros módulos y a las hojas de estilo. Sin él, el navegador servía módulos cacheados tras una actualización (lo detectamos al no aparecer una insignia recién añadida). `docs/*.md` se conserva entre reconstrucciones.

## Fase 2 · Valle de la Luz / Alegría (implementada)

`src/minigames/joy/JoyOrbsGame.js` · **tercera persona** · verbo **saltar y recoger**.

- 10 **plataformas flotantes** (de un solo sentido: sostienen solo si caes desde arriba) con un balanceo mínimo, y 12 **orbes de luz** sobre ellas y en el aire.
- Los orbes **no se pulsan**: se recogen por contacto corriendo y saltando. El tono del sonido sube con el combo.
- **Combo**: cada orbe recogido en el aire suma; tocar el suelo lo reinicia. Romperlo no penaliza, solo deja de sumar. El mejor combo de la partida se muestra al final.
- Cada orbe **hace crecer el valle** (flores y árboles brotando desde la posición del jugador), sube la luz del sol, aclara la niebla, calienta el cielo y, cada tres orbes, entra una capa de música.
- Con los 12 recogidos el valle brilla y se abre el portal.
- La lectura psicoeducativa es la contraria a "bajar" la emoción: aquí la alegría se usa como impulso y llega más lejos.

**Verificado:** salto y aterrizaje sobre plataforma (y = 1,80 exacto), recogida por contacto, combo en el aire (11 encadenados en la prueba), crecimiento de vegetación, 4 capas de audio, portal, tarjeta final e insignia.

## Fase 2 · Guardianes del Desagrado / Asco (implementada)

`src/minigames/disgust/DisgustSortGame.js` · primera persona · verbo **manipular y ordenar**.

- Cuatro zonas del pantano (Olores, Sabores, Imágenes, Rechazo), cada una con **dos contenedores** (🚫 descartar / 💚 conservar) y **tres objetos**.
- Los objetos **se empujan con el cuerpo**: no hay botón de recoger. La fuerza del empuje depende de la velocidad del jugador, hay rozamiento y los objetos ruedan. En la prueba, caminar contra un objeto lo desplazó 8,2 m hasta el contenedor.
- **Contenedor equivocado = sin castigo**: el objeto sale rebotado con un sonido suave y unas partículas, y se puede volver a intentar. Nunca aparece un texto de error.
- Con los tres objetos ordenados se enciende la **válvula** de la zona; activarla con `[E]` aclara el agua estancada, sube la luz y abre la niebla un paso.
- Las cuatro zonas limpias abren el portal.
- Cada zona incluye a propósito **algo que merece conservarse**: cuando el rechazo lo ocupa todo, también se tira lo bueno.

**Verificado:** empuje físico, colocación correcta, rebote en el contenedor equivocado, activación de las 4 válvulas, aclarado progresivo del pantano, portal, tarjeta final e insignia. 12 draw calls, ~10.300 triángulos.