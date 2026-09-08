import { defineConfig } from 'vite';
import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// docs/ es a la vez la carpeta publicada y la que vite vacia en cada build:
// el plan de gameplay vive en la raiz y se copia dentro al terminar.
function copyDocs() {
  return {
    name: 'copy-plan-gameplay',
    closeBundle() {
      const from = resolve(process.cwd(), 'PLAN-GAMEPLAY.md');
      if (existsSync(from)) {
        copyFileSync(from, resolve(process.cwd(), 'docs/PLAN-GAMEPLAY.md'));
      }
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [copyDocs()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // three cambia rara vez: en su propio chunk se cachea entre versiones
        manualChunks: { three: ['three'] }
      }
    }
  }
});
