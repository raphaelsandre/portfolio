import React from 'react'
import banner from '../assets/banner.svg'

export default function Hero() {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  }

  return (
    <section id="home" style={bannerStyle} aria-label="Hero">
      <div style={styles.content}>
        <h1 style={styles.title}>Desenvolvimento sob medida</h1>
        <p style={styles.subtitle}>Criamos software moderno e confiável para startups e empresas.</p>
        <button style={styles.cta}>Solicite um orçamento</button>
      </div>
    </section>
  )
}

const styles = {
  content: {
    textAlign: 'center',
    maxWidth: 800,
    padding: '0 16px',
  },
  title: {
    fontSize: '2.5rem',
    margin: 0,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '1.25rem',
    marginTop: '12px',
    opacity: 0.95,
  },
  cta: {
    marginTop: '20px',
    padding: '12px 22px',
    fontSize: '1rem',
    borderRadius: 6,
    border: 'none',
    background: '#22d3ee',
    color: '#001018',
    cursor: 'pointer'
  }
}
