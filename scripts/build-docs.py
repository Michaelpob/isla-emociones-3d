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
import time

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
# Imports relativos a .js dentro de nuestro codigo: se les anade ?v=BUILD para
# que el navegador no sirva modulos cacheados tras una actualizacion.
SRC_IMPORT = re.compile(r"""(from\s*['"])(\.{1,2}/[^'"]+\.js)(['"])""")
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
    # La documentacion escrita a mano (PLAN-GAMEPLAY.md, etc.) vive en docs/
    # junto al build: se conserva entre reconstrucciones.
    keep = {}
    if os.path.isdir(DOCS):
        for name in os.listdir(DOCS):
            if name.lower().endswith('.md'):
                keep[name] = io.open(os.path.join(DOCS, name), encoding='utf-8').read()
        shutil.rmtree(DOCS)
    os.makedirs(DOCS)
    for name, content in keep.items():
        io.open(os.path.join(DOCS, name), 'w', encoding='utf-8', newline='\n').write(content)

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

    # Sello de version: evita que el navegador sirva modulos u hojas de estilo
    # cacheados despues de una actualizacion (vite lo resuelve con hashes).
    build_id = time.strftime('%Y%m%d%H%M%S')
    for root, _dirs, files in os.walk(os.path.join(DOCS, 'src')):
        for name in files:
            if not name.endswith('.js'):
                continue
            path = os.path.join(root, name)
            code = io.open(path, encoding='utf-8').read()
            versioned = SRC_IMPORT.sub(
                lambda m: '%s%s?v=%s%s' % (m.group(1), m.group(2), build_id, m.group(3)), code
            )
            if versioned != code:
                io.open(path, 'w', encoding='utf-8', newline='\n').write(versioned)

    links = '\n'.join(
        '    <link rel="stylesheet" href="./src/%s?v=%s" />' % (f, build_id) for f in css_files
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
    <script type="module" src="./src/main.js?v=%s"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
""" % (links, build_id)
    io.open(os.path.join(DOCS, 'index.html'), 'w', encoding='utf-8', newline='\n').write(html)

    print('build %s' % build_id)
    print('css: %s' % ', '.join(css_files))
    print('addons: %d' % len(addons))


if __name__ == '__main__':
    build()
