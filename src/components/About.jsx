import React from 'react'

export default function About(){
  return (
    <section id="about" style={styles.section} aria-label="Sobre a empresa">
      <div style={styles.container}>
        <h2 style={styles.title}>Quem somos</h2>
        <p style={styles.text}>Somos uma equipe de desenvolvedores focada em entregar software moderno, estável e de alto desempenho para startups e empresas estabelecidas. Priorizamos simplicidade, qualidade de código e experiência do usuário.
        </p>
      </div>
    </section>
  )
}

const styles = {
  section: { padding: '40px 20px', background: '#f7f7f7' },
  container: { maxWidth: 1000, margin: '0 auto' },
  title: { fontSize: 28, margin: '0 0 12px' },
  text: { fontSize: 16, lineHeight: 1.6, color: '#333' }
}
