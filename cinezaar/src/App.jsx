import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import MovieDetails from './pages/MovieDetails'
import { useTheme } from './context/ThemeContext'
import styled from 'styled-components'
import './App.css'

const ThemeToggle = styled.button`
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 1.2rem;
  margin-left: 1.5rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s, border 0.2s;
  outline: none;
  &:hover {
    background: var(--color-accent);
    color: var(--color-primary);
  }
  &:focus {
    outline: 2px solid var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accent);
  }
`;

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Router>
      <div style={{ minHeight: '100vh', background: 'var(--color-primary)', color: 'var(--color-neutral)' }}>
        <header style={{
          background: 'var(--color-primary)',
          borderBottom: '2px solid var(--color-accent)',
          padding: '1.5rem 0 0.5rem 0',
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <span
              style={{
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-title)',
                fontWeight: 900,
                fontSize: '3.2rem',
                letterSpacing: '3px',
                textShadow: '0 2px 16px rgba(255,215,0,0.18)',
                textTransform: 'uppercase',
                lineHeight: 1.1,
              }}
            >
              Cinézaar
            </span>
            <span
              style={{
                color: 'var(--color-success)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1.3rem',
                letterSpacing: '1px',
                marginTop: '0.2rem',
                textShadow: '0 1px 8px rgba(46,204,113,0.10)',
              }}
            >
              Movie Explorer
            </span>
          </div>
          <div style={{ width: '100%', height: '2px', background: 'var(--color-accent)', margin: '1.2rem 0 0.7rem 0' }} />
          <nav style={{ marginTop: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/" style={{ margin: '0 1.5rem', fontWeight: 600, fontSize: '1.1rem' }}>Home</Link>
            <Link to="/favorites" style={{ margin: '0 1.5rem', fontWeight: 600, fontSize: '1.1rem' }}>Favorites</Link>
            <ThemeToggle onClick={toggleTheme} title="Toggle theme" aria-label="Toggle theme">
              {theme === 'dark' ? '🌙' : '☀️'}
            </ThemeToggle>
          </nav>
        </header>
        <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
