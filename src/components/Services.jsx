import React from 'react'

const services = [
  {
    icon: '🌐',
    title: 'Desenvolvimento Web',
    desc: 'Sites institucionais, landing pages e aplicações web modernas com as melhores tecnologias do mercado.'
  },
  {
    icon: '📱',
    title: 'Apps Mobile',
    desc: 'Aplicativos nativos e híbridos para iOS e Android, com experiência fluida e design intuitivo.'
  },
  {
    icon: '🎨',
    title: 'UX/UI Design',
    desc: 'Interfaces bonitas e funcionais que proporcionam a melhor experiência para seus usuários.'
  },
  {
    icon: '🚀',
    title: 'Performance',
    desc: 'Otimização avançada para carregamento rápido e excelente pontuação em SEO.'
  },
  {
    icon: '🔧',
    title: 'Manutenção',
    desc: 'Suporte contínuo, atualizações de segurança e melhorias constantes no seu projeto.'
  },
  {
    icon: '☁️',
    title: 'Cloud & Infraestrutura',
    desc: '部署 segura e escalável nas principais nuvens do mercado.'
  }
]

export default function Services(){
  return (
    <section id="services" style={styles.section} aria-label="Serviços">
      <div style={styles.container}>
        <h2 style={styles.title}>Nossos Serviços</h2>
        <p style={styles.subtitle}>Soluções completas para transformar sua ideia em um produto digital de sucesso</p>
        <div style={styles.grid}>
          {services.map((s, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.icon}>{s.icon}</div>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: { padding: '100px 20px', background: '#0b1220' },
  container: { maxWidth: '1200px', margin: '0 auto' },
  title: { 
    fontSize: '2.5rem', 
    fontWeight: 800, 
    margin: 0, 
    textAlign: 'center',
    color: '#fff'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#96a6b8',
    textAlign: 'center',
    marginTop: '12px',
    marginBottom: '60px'
  },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
    gap: '24px' 
  },
  card: { 
    padding: '32px', 
    borderRadius: '16px', 
    background: 'linear-gradient(145deg, rgba(17, 26, 41, 0.8) 0%, rgba(17, 26, 41, 0.4) 100%)',
    border: '1px solid rgba(6, 193, 242, 0.15)',
    textAlign: 'left',
    transition: 'all 0.3s ease'
  },
  icon: { fontSize: '2.5rem', marginBottom: '16px' },
  cardTitle: { 
    fontWeight: 700, 
    marginBottom: '12px',
    fontSize: '1.25rem',
    color: '#fff'
  },
  cardDesc: { 
    margin: 0, 
    color: '#96a6b8',
    lineHeight: 1.6
  }
}
