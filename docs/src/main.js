import { EmotionIslandApp } from './ui/EmotionIslandApp.js?v=20260908174045';

const root = document.querySelector('#app');
const app = new EmotionIslandApp(root);

app.start();

// Punto de entrada para depuracion y pruebas automatizadas del recorrido.
window.emoAventura = app;

// Contador de visitas invisible — sigue contando cada carga del link sin mostrar texto
fetch('https://abacus.jasoncameron.dev/hit/michaelpob-isla-emociones-3d', { cache: 'no-store' }).catch(() => {});
