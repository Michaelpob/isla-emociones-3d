# Isla de las Emociones

Demo web 3D en una sola pagina para aprendizaje socioemocional. Incluye un hub con cinco islas y un minijuego completo para la Isla de la Alegria.

## Ejecutar

```bash
pnpm install
pnpm dev
```

## Estructura

- `src/data/islands.js`: configuracion de emociones, colores, posiciones y minijuegos.
- `src/three/WorldScene.js`: escena Three.js del archipielago, seleccion y progreso.
- `src/three/createIslandMesh.js`: constructor visual de islas low-poly.
- `src/minigames/JoyStarsGame.js`: minijuego terminado de Alegria.
- `src/minigames/ComingSoonGame.js`: base para islas futuras.
- `src/minigames/index.js`: registro extensible de minijuegos.
- `src/ui/EmotionIslandApp.js`: flujo de pantallas e interfaz HUD.

Para sumar otra emocion, agrega una entrada en `islands.js`, crea su clase de minijuego y registrala en `src/minigames/index.js`.
