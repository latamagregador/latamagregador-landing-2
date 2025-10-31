# LATAM Agregador Casino — Enterprise Frontend
Stack: **React + Vite + TypeScript + Styled-Components + GSAP (ScrollTrigger) + Framer Motion**.
## Cómo correr
```bash
npm install
npm run dev
```
Colocá tu video de fondo en: `public/hero.mp4` (loop corto, 15–25s, 1080p H.264, ~6–15MB).
## Fuentes de video libre de derechos (profesional)
- **Pexels Videos** — `network`, `data city`, `latam`, `aerial night`, `digital map`
- **Coverr** — `technology`, `network`, `city skyline`, `bokeh`
- **Mixkit** — `tech background`, `data flow`, `digital grid`
- **Videvo** — `world map network`, `particles`, `abstract tech`
## Qué incluye
- Hero con **video de fondo** + overlay y **parallax** al scroll.
- **Animaciones de entrada** (GSAP) y **microinteracciones** (Framer Motion).
- **Texturas**, **glassmorphism**, **sombras suaves**.
- **Grid de proveedores** con logos embebidos desde tu ZIP (no se rompen rutas).
- Íconos vectoriales personalizados con animación hover.
- Diseño **responsive** y accesible.
## Producción
```bash
npm run build
npm run preview
```

### Nota: versión sin video
El hero usa un fondo animado por CSS. Si luego querés usar video, agregá `public/hero.mp4` y reemplazá la capa `.animatedBg` por el `<video className="bgVideo" .../>` que está comentado en `Hero.tsx`.
