import React from 'react'
import banner from '../assets/banner.svg'

export default function Hero() {
  return (
    <section id="home" style={styles.hero} aria-label="Hero">
      <div style={styles.background}>
        <img src={banner} alt="" style={styles.bannerImg} />
      </div>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>
          <span style={styles.highlight}>Desenvolvimento</span> sob medida
        </h1>
        <p style={styles.subtitle}>
          Criamos soluções digitais modernas, escaláveis e de alta performance para transformar sua visão em realidade.
        </p>
        <div style={styles.ctaGroup}>
          <button style={styles.ctaPrimary}>Solicite um orçamento</button>
          <button style={styles.ctaSecondary}>Ver projetos</button>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: '80px'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0
  },
  bannerImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(11, 18, 32, 0.92) 0%, rgba(11, 18, 32, 0.75) 50%, rgba(6, 193, 242, 0.1) 100%)',
    zIndex: 1
  },
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '900px',
    padding: '0 24px',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    margin: 0,
    color: '#fff',
    letterSpacing: '-0.02em'
  },
  highlight: {
    background: 'linear-gradient(135deg, #06C1F2 0%, #0595F1 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    marginTop: '24px',
    color: '#96a6b8',
    lineHeight: 1.6,
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  ctaGroup: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    marginTop: '40px',
    flexWrap: 'wrap'
  },
  ctaPrimary: {
    padding: '16px 32px',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(135deg, #06C1F2 0%, #0595F1 100%)',
    color: '#0b1220',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  ctaSecondary: {
    padding: '16px 32px',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '8px',
    border: '2px solid rgba(6, 193, 242, 0.5)',
    background: 'transparent',
    color: '#06C1F2',
    cursor: 'pointer',
    transition: 'all 0.2s'
  }
}
