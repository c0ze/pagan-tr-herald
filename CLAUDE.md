# Pagan TR Herald

Official website for Pagan, a Turkish black metal band.

## Tech Stack

- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4 + CSS custom properties (HSL)
- **Component Library**: shadcn/ui (Radix UI primitives)
- **State Management**: TanStack React Query 5
- **Routing**: React Router DOM 6
- **Theme Management**: next-themes
- **Deployment**: GitHub Pages (pagan.tr)

## Project Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Root component with providers
├── index.css             # Design system (CSS variables, Tailwind)
├── pages/
│   ├── Index.tsx         # Main page (Hero, Bio, Discography, Media, Links)
│   └── NotFound.tsx      # 404 page
├── components/
│   ├── Hero.tsx          # Band logo and tagline
│   ├── Biography.tsx     # Band history and lineup
│   ├── Discography.tsx   # Release cards
│   ├── Media.tsx         # YouTube video and social links
│   ├── Links.tsx         # External links section
│   ├── Footer.tsx        # Footer with social links
│   ├── ThemeToggle.tsx   # Dark/light theme toggle
│   └── ui/               # shadcn/ui components
└── assets/
    ├── pagan-logo.jpg    # Band logo
    ├── pagan-band-photo.jpg
    └── fog.css           # Atmospheric fog animation
```

## Design System

### Themes

- **Dark (default)**: Black metal aesthetic with icy blue accents
- **Light**: Inverted theme for accessibility

### Color Tokens (HSL)

- `--background`: Page background
- `--foreground`: Text color
- `--primary`: Icy blue accent (200 90% 55%)
- `--secondary`: Subtle backgrounds
- `--muted`: Disabled/subtle elements
- `--card`: Card backgrounds
- `--border`: Border color

### Custom Utilities

- `.text-shadow-glow`: Glowing text effect
- `.border-glow`: Glowing border effect
- `.bg-gradient-dark`: Dark gradient background

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (includes sitemap generation)
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Notes

- Single-page application with semantic sections
- SEO optimized with JSON-LD structured data (MusicGroup schema)
- Mobile responsive design
- Atmospheric fog CSS animation layer
