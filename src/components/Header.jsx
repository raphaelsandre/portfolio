import React from 'react'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="header" style={styles.header}>
      <div style={styles.brand}>
        <img src={logo} alt="Sandre.dev" style={styles.logo} />
      </div>
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
    padding: '20px 40px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(11, 18, 32, 0.85)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(6, 193, 242, 0.1)',
    zIndex: 100
  },
  brand: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    height: '40px',
    width: 'auto'
  },
  nav: {
    display: 'flex',
    gap: '32px'
  },
  link: { 
    color: '#eaf2ff', 
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    transition: 'color 0.2s'
  }
}
