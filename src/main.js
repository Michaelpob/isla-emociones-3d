import './styles.css';
import { EmotionIslandApp } from './ui/EmotionIslandApp.js';

const root = document.querySelector('#app');
const app = new EmotionIslandApp(root);

app.start();
