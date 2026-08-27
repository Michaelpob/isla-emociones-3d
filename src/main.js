import './styles.css';
import { EmotionIslandApp } from './ui/EmotionIslandApp.js';

const root = document.querySelector('#app');
const app = new EmotionIslandApp(root);

app.start();

// Contador de visitas visible — incrementa en cada carga del link
function initVisitCounter() {
  let el = document.getElementById('visit-counter');
  if (!el) {
    el = document.createElement('div');
    el.id = 'visit-counter';
    el.className = 'visit-counter';
    el.textContent = '👁️ cargando...';
    document.body.appendChild(el);
  }
  // API gratuita sin backend propio — cuenta cada hit al link
  fetch('https://abacus.jasoncameron.dev/hit/michaelpob-isla-emociones-3d', { cache: 'no-store' })
    .then((r) => r.json())
    .then((data) => {
      const n = typeof data.value === 'number' ? data.value : data.count ?? 0;
      el.textContent = `👁️ ${Number(n).toLocaleString('es-CO')} visitas`;
    })
    .catch(() => {
      // fallback si la API falla: muestra badge estático
      el.textContent = '👁️ visitas';
    });
}
initVisitCounter();
