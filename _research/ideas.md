[0m
> build · deepseek-v4.1-flash-free
[0m
[0m$ [0mls -la
total 24
drwxr-xr-x 1 juanp 197609     0 Oct 21 00:58 .
drwxr-xr-x 1 juanp 197609     0 Oct 21 00:52 ..
-rw-r--r-- 1 juanp 197609  5958 Oct 21 00:50 facts.md
-rw-r--r-- 1 juanp 197609     0 Oct 21 00:58 ideas.md
-rw-r--r-- 1 juanp 197609 11129 Oct 21 00:46 research.md
[0m
[0m→ [0mRead research.md
[0m→ [0mRead facts.md
**Técnicas de hoteles de lujo/boutique, implementables sin frameworks**

- **Hero cinemático** — video loop mudo de 8-15 s con titular serif encima. → `<video autoplay muted loop playsinline poster>` + `object-fit:cover`, degradado y fallback a imagen con `prefers-reduced-motion`.
- **Scroll storytelling con sección pinned** — el scroll mueve ejes y opacidades sin avanzar la página. → `position:sticky` + contenedor de 300vh + `IntersectionObserver`, o CSS `animation-timeline: scroll()` / `view()`.
- **Parallax multicapa** — fondo, figura y texto a velocidades distintas. → `translate3d(0, scroll*factor, 0)` en `requestAnimationFrame` pasivo; nunca `background-attachment:fixed` en móvil.
- **Secuencia de imágenes en canvas** — fotogramas atados al scroll (recorrido por el hotel). → precargar 40-80 WebP y dibujar `frame = progreso*(n-1)`; limitar `devicePixelRatio` a 2.
- **Three.js ambiental** — plano texturizado con distorsión/refracción sutil, no un modelo 3D pesado. → `PlaneGeometry` + `ShaderMaterial` con `u_time`/`u_scroll`; pausar fuera del viewport.
- **Transición de página compartida** — la foto de la card se convierte en el hero del detalle. → View Transitions API: `@view-transition{navigation:auto}` o `startViewTransition()`, con `view-transition-name` único por imagen.
- **Reveal con clip-path** — imágenes descubiertas desde una línea, no con fade genérico. → `clip-path:inset(0 100% 0 0)` → `inset(0)`, activado por `IntersectionObserver`, 900 ms `cubic-bezier(.77,0,.18,1)`.
- **Texto partido con stagger** — titulares que suben palabra a palabra. → palabras en `<span>` dentro de `overflow:hidden`, `translateY(110%)` → 0 con `transition-delay:i*40ms`.
- **Hover cinematográfico en cards** — zoom lento de foto y desplazamiento del texto. → contenedor `overflow:hidden`, `img{transform:scale(1.06)}` a 700 ms; mismo easing en el texto.
- **Preview en video al hover** — la card reproduce un clip al pasar el ratón (Rosewood/Aman). → `<video preload="none" muted loop>`, `play()` en `mouseenter` y `pause()` en `mouseleave`, solo bajo `(hover:hover)`.
- **Cursor propio y botones magnéticos** — el puntero se vuelve etiqueta "Ver suite". → `<div>` fijo con `mix-blend-mode:difference` y lerp (`x += (tx-x)*.15`); botón atraído al cursor con límite de 8 px.
- **Menú overlay full-screen** — navegación tipográfica enorme con stagger y foco atrapado. → `<dialog>` + `showModal()`, `aria-expanded`, cierre con Esc y `backdrop-filter:blur(12px)`.
- **Buscador de habitaciones flotante** — fechas, huéspedes y CTA siempre a mano. → `form` con `<input type="date" min>` y `type="number"`, validar rango, persistir en la URL y consultar disponibilidad con `fetch` + `aria-live`.
- **Calendario de rango propio** — un solo calendario para entrada y salida. → dos inputs date sincronizados + grid de días en CSS, pintando `.in-range` al hover y al seleccionar.
- **Sticky booking bar** — barra de reserva que entra tras pasar el hero. → `IntersectionObserver` sobre el hero, `translateY(100%)` → 0, `position:fixed` con `env(safe-area-inset-bottom)`.
- **Galería FLIP** — la miniatura se expande a pantalla completa con continuidad espacial. → medir `getBoundingClientRect()` origen/destino, invertir con `transform` y animar; o `startViewTransition`.
- **Marquee infinito** — tira de servicios o prensa en bucle continuo (Ace/Soho). → duplicar el contenido y `@keyframes translateX(-50%)` lineal infinito; pausar en hover y con reduced-motion.
- **Preloader con contador** — 0→100 % mientras cargan fuentes e imágenes, salida tipo telón. → `document.fonts.ready` + `Promise.all` con `img.decode()`, contador por rAF y salida con `clip-path`.
- **Microinteracciones de formulario** — carga, éxito y error visibles en la reserva. → `:focus-visible`, skeleton con gradiente animado, `data-state="loading"` con spinner CSS; nunca deshabilitar sin feedback.
- **Tipografía y rejilla editorial** — serif display + sans neutra, asimetría y mucho aire. → `clamp()` para escala fluida, `max-width:65ch` y grid de 12 columnas con offsets.
- **Base de rendimiento y accesibilidad** — sin esto lo anterior se vuelve humo. → `prefers-reduced-motion`, `srcset` AVIF/WebP, JS < 100 KB, pausar WebGL y video fuera de pantalla.

Elige 3-4 de estas como firma del sitio y ejecútalas perfectas; el resto, sobrio.
