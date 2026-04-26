import React from 'react'
import logo from '../assets/logo.svg'

export default function Footer(){
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.brand}>
            <img src={logo} alt="Sandre.dev" style={styles.logo} />
            <p style={styles.desc}>Desenvolvimento de soluções digitais modernas e de alta performance.</p>
            <div style={styles.social}>
              <a href="#" style={styles.socialLink}>GitHub</a>
              <a href="#" style={styles.socialLink}>LinkedIn</a>
              <a href="#" style={styles.socialLink}>Twitter</a>
            </div>
          </div>
          
          <div style={styles.links}>
            <h4 style={styles.linksTitle}>Links Rápidos</h4>
            <a href="#home" style={styles.link}>Início</a>
            <a href="#about" style={styles.link}>Sobre</a>
            <a href="#services" style={styles.link}>Serviços</a>
            <a href="#contact" style={styles.link}>Contato</a>
          </div>
          
          <div style={styles.links}>
            <h4 style={styles.linksTitle}>Serviços</h4>
            <a href="#" style={styles.link}>Desenvolvimento Web</a>
            <a href="#" style={styles.link}>Apps Mobile</a>
            <a href="#" style={styles.link}>UX/UI Design</a>
            <a href="#" style={styles.link}>Consultoria</a>
          </div>
          
          <div style={styles.links}>
            <h4 style={styles.linksTitle}>Contato</h4>
            <p style={styles.contactItem}>📧 contato@sandre.dev</p>
            <p style={styles.contactItem}>📱 +55 (11) 99999-9999</p>
            <p style={styles.contactItem}>📍 São Paulo, SP</p>
          </div>
        </div>
        
        <div style={styles.bottom}>
          <p>© {new Date().getFullYear()} Sandre.dev. Todos os direitos reservados.</p>
          <div style={styles.legal}>
            <a href="#" style={styles.legalLink}>Privacidade</a>
            <span style={styles.separator}>·</span>
            <a href="#" style={styles.legalLink}>Termos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: { background: '#0a0f17', color: '#fff', padding: '60px 0 20px' },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
    gap: '40px',
    marginBottom: '40px'
  },
  brand: {},
  logo: { height: '40px', width: 'auto' },
  desc: { color: '#96a6b8', marginTop: '16px', lineHeight: 1.6 },
  social: { display: 'flex', gap: '16px', marginTop: '20px' },
  socialLink: { color: '#06C1F2', textDecoration: 'none', fontSize: '0.9rem' },
  links: {},
  linksTitle: { fontSize: '1rem', fontWeight: 700, marginBottom: '16px', color: '#fff' },
  link: { display: 'block', color: '#96a6b8', textDecoration: 'none', marginBottom: '10px', fontSize: '0.95rem' },
  contactItem: { color: '#96a6b8', marginBottom: '10px', fontSize: '0.95rem' },
  bottom: { 
    borderTop: '1px solid rgba(255,255,255,0.1)', 
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px'
  },
  legal: { display: 'flex', alignItems: 'center', gap: '8px' },
  legalLink: { color: '#96a6b8', textDecoration: 'none', fontSize: '0.9rem' },
  separator: { color: '#96a6b8' }
}
