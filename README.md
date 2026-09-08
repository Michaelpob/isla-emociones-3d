# EMO-AVENTURA

> "Vive la aventura de descubrir el poder de tus emociones"

Videojuego web educativo sobre reconocimiento y regulacion emocional. El jugador
recorre un archipielago 3D, entra en cada isla, identifica una emocion, reconoce
sus manifestaciones, mide su intensidad, practica estrategias de regulacion en
minijuegos reales, reevalua como quedo y desbloquea la siguiente isla.

**Regla psicoeducativa central:** ninguna emocion es mala. Regular no significa
dejar de sentir, y ninguna eleccion del jugador resta puntos, vidas ni progreso.

## Ejecutar

```bash
npm run dev      # vite build + servidor local (requiere Node)
python scripts/build-docs.py   # build sin Node -> docs/ (GitHub Pages)
python -m http.server 8000 -d docs
```

`docs/` es lo que publica GitHub Pages. Si hay Node, `npm run build` (vite) lo
regenera; si no, `scripts/build-docs.py` arma la misma carpeta con un importmap
y three.js copiado desde `node_modules`.

## Islas

| Isla | Estado | Contenido |
|---|---|---|
| 1. Isla del Miedo | EMO-AVENTURA | Exploracion, manifestaciones, Refugio de la Respiracion, Espejo de los Pensamientos, Puente de la Exposicion Guiada |
| 2. Valle de la Luz (Alegria) | EMO-AVENTURA | Identificacion, Espejo de la Luz, intensidad, 7 estrategias con minijuego propio, Encuentra el equilibrio |
| 3. Volcan de las Emociones (Ira) | minijuego previo | Respiracion guiada (`BreathingCalmGame`, sin cambios) |
| 4. Guardianes del Desagrado | EMO-AVENTURA | 4 zonas, Espejo de las Reacciones, termometro, 6 estrategias, desafio "Protege la isla" |
| Tristeza · Sorpresa | en construccion | Fuera de la cadena de desbloqueo |

Desbloqueo: **Miedo → Alegria → Ira → Desagrado**. El progreso se guarda en
`localStorage` y sobrevive a recargas.

## Estructura

```
src/
├── data/
│   ├── islands.js      configuracion de islas del mapa 3D
│   ├── gameState.js    estado central (puntos, herramientas, insignias, desbloqueos)
│   ├── tools.js        catalogo de herramientas e insignias
│   └── player.js       perfil del jugador
├── engine/
│   ├── Stage.js        motor de escena: capas, personaje, dialogos, recompensas, HUD
│   └── activities.js   minijuegos reutilizables (respiracion, reevaluacion,
│                       espejo de senales, secuencias, puente, atencion,
│                       5-4-3-2-1, termometro, reevaluacion final)
├── minigames/
│   ├── fear/FearIslandGame.js
│   ├── joy/JoyValleyGame.js
│   ├── disgust/DisgustGuardiansGame.js
│   ├── BreathingCalmGame.js   (Isla del Enojo, intacto)
│   └── index.js               registro de minijuegos
├── three/              escena 3D del archipielago (mapa principal)
├── ui/
│   ├── EmotionIslandApp.js  flujo de pantallas, bloqueo/desbloqueo de islas
│   └── screens.js           caja de herramientas, progreso, final
└── styles/             emo · animations · fear · joy · disgust · responsive
```

## Sistema de estado

`src/data/gameState.js` expone las funciones reutilizables del juego:

```js
loadProgress() saveProgress() resetGame()
addPoints() completeActivity() addReward() addBadge()
unlockIsland() completeIsland() isUnlocked() allIslandsCompleted()
changeIntensity() setInitialIntensity() setStrategy() recordReevaluation()
getProgressSummary() setSetting() prefersReducedMotion()
```

Cada reevaluacion guarda `{ initialIntensity, strategy, finalIntensity }` y se
muestra en *Mi progreso* como INICIAL → ESTRATEGIA → FINAL. Que la intensidad
baje no se interpreta automaticamente como "ganar".

## Accesibilidad

Contraste alto, botones de 42px minimo, foco visible, navegacion por teclado,
`aria-live` en marcadores y feedback, texto ademas del color, boton para reducir
animaciones (ademas de respetar `prefers-reduced-motion`) y sonido opcional
con interruptor.

## Agregar una isla

1. Agrega su entrada en `src/data/islands.js` (`minigame: 'mi-isla'`).
2. Crea la clase del minijuego con `mount()` / `dispose()` y llama
   `onComplete({ islandId, success: true, emoAventura: true, badge, title, message })`.
3. Registrala en `src/minigames/index.js`.
4. Si entra en la cadena de desbloqueo, agregala a `ISLAND_CHAIN` en `gameState.js`.
