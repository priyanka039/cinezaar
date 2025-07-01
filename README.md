# Cinézaar — Movie Explorer

A beautiful, modern, and installable React app to search, filter, and favorite movies. 
---

## Features
- **Search** movies by title (OMDB API)
- **Filter** by year and type (movie, series, episode)
- **Favorites** with LocalStorage persistence
- **Movie Details** with full info (plot, actors, ratings, etc.)
- **Responsive** and mobile-friendly
- **Dark/Light Theme Toggle**
- **PWA**: Installable on desktop/mobile
- **Loading Skeletons** and error boundaries
- **Formik + Yup** for validated search
- **Unit tests** for key components (Jest + React Testing Library)

---

## Tech Stack
- **React** (Vite)
- **Axios** (API calls)
- **Formik + Yup** (form validation)
- **React Router DOM** (routing)
- **Context API** (global state)
- **Styled Components** (theming)
- **Vitest + React Testing Library** (testing)
- **PWA Manifest**

---

## Color Palette
- **Primary:** Midnight Blue `#0D1B2A`
- **Accent:** Royal Gold `#FFD700`
- **Neutral:** Light Grey `#E0E0E0`
- **Error:** Soft Coral `#FF7675`
- **Success:** Emerald Green `#2ECC71`

---

## Getting Started

1. **Clone the repo:**
   ```sh
   git clone <repo-url>
   cd cinezaar
   npm install
   ```
2. **Add your OMDB API key:**
   - Get a free key at [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
   - Edit `src/api/useMovies.js` and set your key.
3. **Run the app:**
   ```sh
   npm run dev
   ```
4. **Run tests:**
   ```sh
   npm test
   ```
5. **Build for production:**
   ```sh
   npm run build
   ```

---

## PWA & Installability
- Add to home screen on mobile or desktop for a native app feel.
- Works offline (with service worker, see Vite PWA plugin for advanced setup).

---

## Screenshots
![Screenshot 2025-07-01 171015](https://github.com/user-attachments/assets/e6424182-1d2b-4ba7-8645-ce0c35c05e6a)
![Screenshot 2025-07-01 171056](https://github.com/user-attachments/assets/9d0a293c-49ad-48a6-b758-ae2ecbb1122b)
![Screenshot 2025-07-01 171158](https://github.com/user-attachments/assets/e36907c7-d7d9-49df-bafa-1eff9e3a71cd)


