import React from 'react'

export default function Footer(){
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div>© {new Date().getFullYear()} Sandre.dev. Todos os direitos reservados.</div>
        <div>
          <a href="#" style={styles.link}>Privacy</a>
          <span style={{margin: '0 8px'}}>·</span>
          <a href="#" style={styles.link}>Termos</a>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: { background: '#0b1220', color: '#fff', padding: '20px 0' },
  inner: { maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'space-between', padding: '0 20px' },
  link: { color: '#fff', textDecoration: 'none' }
}
