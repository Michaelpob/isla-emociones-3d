"""Build docs/ (GitHub Pages) sin Node: copia src/, three y solo los addons usados,
y genera un index.html con importmap. `npm run build` (vite) lo reemplaza cuando haya Node."""
import io, os, posixpath, re, shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src')
DOCS = os.path.join(ROOT, 'docs')
THREE = os.path.join(ROOT, 'node_modules', 'three')
JSM = os.path.join(THREE, 'examples', 'jsm')

ENTRIES = ['postprocessing/EffectComposer.js', 'postprocessing/RenderPass.js',
           'postprocessing/UnrealBloomPass.js', 'postprocessing/OutputPass.js',
           'postprocessing/ShaderPass.js']

IMPORT_RE = re.compile(r"""from\s*['"](\.[^'"]+)['"]""")

def resolve_addons():
    seen, queue = set(), list(ENTRIES)
    while queue:
        rel = posixpath.normpath(queue.pop())
        if rel in seen:
            continue
        seen.add(rel)
        text = io.open(os.path.join(JSM, *rel.split('/')), encoding='utf-8').read()
        for dep in IMPORT_RE.findall(text):
            queue.append(posixpath.join(posixpath.dirname(rel), dep))
    return sorted(seen)

if os.path.isdir(DOCS):
    shutil.rmtree(DOCS)
os.makedirs(DOCS)

shutil.copytree(SRC, os.path.join(DOCS, 'src'))
main = os.path.join(DOCS, 'src', 'main.js')
text = io.open(main, encoding='utf-8').read().replace("import './styles.css';\n", '')
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

io.open(os.path.join(DOCS, 'index.html'), 'w', encoding='utf-8', newline='\n').write("""<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Isla de las Emociones</title>
    <link rel="stylesheet" href="./src/styles.css" />
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
""")

print('addons: ' + ', '.join(addons))
