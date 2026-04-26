import React from 'react'

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.brand}>Sandre.dev</div>
      <nav aria-label="menu-principal" style={styles.nav}>
        <a href="#home" style={styles.link}>Início</a>
        <a href="#about" style={styles.link}>Sobre</a>
        <a href="#services" style={styles.link}>Serviços</a>
        <a href="#contact" style={styles.link}>Contato</a>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    position: 'sticky',
    top: 0,
    background: 'rgba(0,0,0,0.6)',
    color: '#fff',
    zIndex: 10
  },
  brand: {
    fontWeight: 700,
    letterSpacing: 0.5
  },
  nav: {
    display: 'flex',
    gap: '16px'
  },
  link: { color: '#fff', textDecoration: 'none' }
}
