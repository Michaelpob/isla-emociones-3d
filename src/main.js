import './styles.css';
import { EmotionIslandApp } from './ui/EmotionIslandApp.js';

const root = document.querySelector('#app');
const app = new EmotionIslandApp(root);

app.start();

// Contador de visitas invisible — sigue contando cada carga del link sin mostrar texto
fetch('https://abacus.jasoncameron.dev/hit/michaelpob-isla-emociones-3d', { cache: 'no-store' }).catch(() => {});
