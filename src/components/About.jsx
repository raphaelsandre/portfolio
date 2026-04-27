import React from 'react'
import logo from '../assets/logo.svg'

const stats = [
  { number: '50+', label: 'Projetos Entregues' },
  { number: '5+', label: 'Anos de Experiência' },
  { number: '30+', label: 'Clientes Satisfeitos' },
  { number: '99%', label: 'Taxa de Satisfação' }
]

export default function About(){
  return (
    <section id="about" className="about" style={styles.section} aria-label="Sobre a empresa">
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.content}>
            <h2 style={styles.title}>Transformamos ideias em <span style={styles.highlight}>resultados</span></h2>
            <p style={styles.text}>
              Somos uma equipe de desenvolvedores e designers apaixonados por criar soluções digitais inovadoras. 
              Nosso foco é entregar software de alta qualidade que realmente faz diferença para o negócio dos nossos clientes.
            </p>
            <p style={styles.text}>
              Com experiência em diversas tecnologias e setores, we've helped empresas de todos os tamanhos a alcançar 
              seus objetivos através da transformação digital. Da concepção ao lançamento, estamos juntos em cada etapa.
            </p>
            <div className="stats" style={styles.stats}>
              {stats.map((stat, i) => (
                <div key={i} className="stat" style={styles.stat}>
                  <span className="stat-number" style={styles.statNumber}>{stat.number}</span>
                  <span style={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={styles.imageWrapper}>
            <img src={logo} alt="Sandre.dev" className="logo" style={styles.logo} />
            <div style={styles.badge}>
              <span style={styles.badgeText}>Desenvolvimento</span>
              <span style={styles.badgeText}>Design</span>
              <span style={styles.badgeText}>Inovação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: { padding: '100px 20px', background: '#111a29' },
  container: { maxWidth: '1000px', margin: '0 auto'},
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
    gap: '60px',
    alignItems: 'center'
  },
  content: {},
  title: { 
    fontSize: '2.5rem', 
    fontWeight: 800, 
    margin: 0, 
    color: '#fff',
    lineHeight: 1.2
  },
  highlight: {
    color: '#06C1F2'
  },
  text: { 
    fontSize: '1.1rem', 
    lineHeight: 1.8, 
    padding: "0px 15px",
    color: '#96a6b8',
    marginTop: '20px'
  },
  stats: {
    display: 'flex',
    gap: '40px',
    marginTop: '40px',
    flexWrap: 'wrap'
  },
  stat: {
    display: 'flex',
    flexDirection: 'column'
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#06C1F2'
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#96a6b8'
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px'
  },
  logo: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto'
  },
  badge: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  badgeText: {
    padding: '8px 16px',
    background: 'rgba(6, 193, 242, 0.15)',
    border: '1px solid rgba(6, 193, 242, 0.3)',
    borderRadius: '20px',
    fontSize: '0.875rem',
    color: '#06C1F2'
  }
}
