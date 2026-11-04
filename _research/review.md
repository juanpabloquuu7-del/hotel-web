spa.webp
suite-barichara.jpg
suite-curiti.jpg
suite-familiar.jpg
suite-giron.jpg
suite-nupcial.jpg
terraza.jpg
zaborarte.webp
[0m
[0m$ [0mdu -sh img/* | sort -h
36K	img/restaurante.webp
44K	img/zaborarte.webp
88K	img/spa.webp
172K	img/room-ejecutiva.jpg
180K	img/room-triple.jpg
220K	img/suite-familiar.jpg
232K	img/lobby.jpg
236K	img/salon.jpg
236K	img/suite-nupcial.jpg
240K	img/suite-curiti.jpg
248K	img/suite-giron.jpg
316K	img/suite-barichara.jpg
412K	img/terraza.jpg
424K	img/hero.jpg
[0m
- **L559** — `toISOString()` da fecha UTC; en Bogotá (UTC-5) desde las 19:00 el mínimo ya es mañana y no permite elegir hoy → usar la fecha local (`getFullYear/getMonth/getDate`).
- **L83/L309** — la marquesina anima a −50% pero los 9 `<li>` no están duplicados: el bucle salta y en pantallas anchas deja hueco → duplicar la lista y mantener −50%.
- **L338/L480** — el texto dice "12 habitaciones" pero `ROOMS` tiene 13 → cambiar a 13.
- **L670/L667** — el `<script>` inline con `defer` (ignorado) corre antes de three.js y `setZone(0)` solo se ejecuta en `load`, dejando el panel 3D vacío → llamar `setZone(0)` al parsear y `boot` en `DOMContentLoaded`.
- **L351** — `src=""` en `#spImg` provoca una petición a la propia página → quitar el atributo y asignarlo en `landTown`.
- **L314/L643** — el hint promete "arrastra el ratón" pero solo hay `pointermove` sin arrastre → implementar `pointerdown/up` o cambiar el texto.
- **L211** — `dialog{overflow:hidden}` recorta el contenido sin scroll en móvil apaisado → `max-height:90svh;overflow:auto`.
- **L232** — a ≤960px se ocultan todos los enlaces del nav y el sticky solo aparece ≤600px: entre 601–960 no hay navegación → dejar enlaces o añadir menú.
- **L551-L555** — el `requestAnimationFrame` del cursor corre a 60 fps siempre, aunque no haya movimiento → iniciarlo en `pointermove` y cancelarlo al salir.
- **L651/L664** — con `prefers-reduced-motion` se sigue renderizando WebGL en bucle → renderizar una vez y no reprogramar el frame.
- **L453/L284** — imágenes de 1920×1280 servidas a cards de ~370px y a móvil sin `srcset` → generar variantes y usar `srcset/sizes`.
- **L83/L87** — marquesina automática de 48 s sin pausa real (solo hover), incumple WCAG 2.2.2 (A) → añadir control de pausa y pausar en `focus`.
- **L380-L381** — citas en inglés sin `lang="en"`, incumple WCAG 3.1.2 (AA) → añadir `lang="en"` al `blockquote`.
- **L350/L519-L522** — `aria-live` en la tarjeta anuncia cada nombre del sorteo (~15 veces) → moverlo al resultado final o usar `aria-busy`.
- **L583** — botones del rail de 36×36 px, por debajo de los 44 px táctiles recomendados → 44×44 o más padding.
