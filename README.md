# Portfolio de Gisella Rodriguez

Portfolio personal estático hecho con HTML, CSS y JavaScript vanilla. Incluye proyectos, habilidades, trayectoria, presentación personal y contacto, con temas claro y oscuro adaptables a escritorio y dispositivos móviles.

[Prototipo de Figma](https://www.figma.com/design/Uhq3vH2mVkorierqNs5rHm/Sin-t%C3%ADtulo?node-id=39-15546&m=dev) · [Repositorio de GitHub](https://github.com/gisellasolrodriguez-oss)

## Estructura

```text
.
├── assets/
│   └── gisella-rodriguez.jpg
├── js/
│   └── portfolio.js
├── src/
│   ├── input.css
│   └── portfolio.css
├── index.html
├── package.json
├── package-lock.json
└── styles.css
```

`src/portfolio.css` contiene los estilos propios; `src/input.css` importa Tailwind CSS y Basecoat. `styles.css` es el archivo compilado que usa el sitio y debe incluirse para servir la página estática.

## Desarrollo local

- Node.js LTS (20.19 o posterior) y npm.
- Usa un servidor HTTP local para probar el sitio. No abras `index.html` con `file://`.

```sh
npm install
npm run build
```

La preferencia de tema se guarda en el navegador y, en la primera visita, se adapta a la preferencia del sistema.

## Diseño y publicación

- La publicación y configuración del hosting se harán manualmente. El proyecto no incluye un comando ni un flujo automatizado de despliegue.
