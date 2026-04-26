import React from 'react'

export default function Services(){
  return (
    <section id="services" style={styles.section} aria-label="Serviços">
      <h2 style={styles.subtitle}>Serviços</h2>
      <div style={styles.grid}>
        {['Desenvolvimento Web','Apps Mobile','UX/UI'].map((t,i)=> (
          <div key={i} style={styles.card}>
            <div style={styles.cardTitle}>{t}</div>
            <p style={styles.cardDesc}>Descrição breve do serviço oferecido pela empresa.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: { padding: '60px 20px', textAlign: 'center' },
  subtitle: { fontSize: '28px', margin: '0 0 24px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, maxWidth: 1000, margin: '0 auto' },
  card: { padding: 20, border: '1px solid #e5e7eb', borderRadius: 8, background: '#fff', textAlign: 'left' },
  cardTitle: { fontWeight: 700, marginBottom: 6 },
  cardDesc: { margin: 0, color: '#555' }
}
