"""Build docs/ (GitHub Pages) sin Node.

Copia src/, three y solo los addons que el proyecto usa, quita los imports de
CSS del JS (el navegador no los entiende) y genera un index.html con importmap
y los <link> de las hojas de estilo en el mismo orden.

`npm run build` (vite) lo reemplaza cuando haya Node instalado.
"""
import io
import os
import posixpath
import re
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src')
DOCS = os.path.join(ROOT, 'docs')
THREE = os.path.join(ROOT, 'node_modules', 'three')
JSM = os.path.join(THREE, 'examples', 'jsm')

ENTRIES = [
    'postprocessing/EffectComposer.js',
    'postprocessing/RenderPass.js',
    'postprocessing/UnrealBloomPass.js',
    'postprocessing/OutputPass.js',
    'postprocessing/ShaderPass.js',
]

REL_IMPORT = re.compile(r"""from\s*['"](\.[^'"]+)['"]""")
CSS_IMPORT = re.compile(r"""^import\s+['"](\./[^'"]+\.css)['"];?[ \t]*\r?\n""", re.M)


def resolve_addons():
    """Sigue los imports relativos desde los addons de entrada."""
    seen, queue = set(), list(ENTRIES)
    while queue:
        rel = posixpath.normpath(queue.pop())
        if rel in seen:
            continue
        seen.add(rel)
        text = io.open(os.path.join(JSM, *rel.split('/')), encoding='utf-8').read()
        for dep in REL_IMPORT.findall(text):
            queue.append(posixpath.join(posixpath.dirname(rel), dep))
    return sorted(seen)


def build():
    if os.path.isdir(DOCS):
        shutil.rmtree(DOCS)
    os.makedirs(DOCS)

    shutil.copytree(SRC, os.path.join(DOCS, 'src'))

    main = os.path.join(DOCS, 'src', 'main.js')
    text = io.open(main, encoding='utf-8').read()
    css_files = [path[2:] for path in CSS_IMPORT.findall(text)]
    text = CSS_IMPORT.sub('', text)
    io.open(main, 'w', encoding='utf-8', newline='\n').write(text)

    vendor = os.path.join(DOCS, 'vendor')
    os.makedirs(vendor)
    for name in ('three.module.min.js', 'three.core.min.js'):
        shutil.copy(os.path.join(THREE, 'build', name), vendor)
    addons = resolve_addons()
    for rel in addons:
        dest = os.path.join(vendor, 'addons', *rel.split('/'))
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        shutil.copy(os.path.join(JSM, *rel.split('/')), dest)

    links = '\n'.join(
        '    <link rel="stylesheet" href="./src/%s" />' % f for f in css_files
    )
    html = """<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EMO-AVENTURA | Isla de las Emociones</title>
    <meta name="description" content="Vive la aventura de descubrir el poder de tus emociones." />
%s
    <script type="importmap">
      {
        "imports": {
          "three": "./vendor/three.module.min.js",
          "three/addons/": "./vendor/addons/"
        }
      }
    </script>
    <script type="module" src="./src/main.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
""" % links
    io.open(os.path.join(DOCS, 'index.html'), 'w', encoding='utf-8', newline='\n').write(html)

    print('css: %s' % ', '.join(css_files))
    print('addons: %d' % len(addons))


if __name__ == '__main__':
    build()
