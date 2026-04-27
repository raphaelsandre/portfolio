import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="contact" aria-label="Contato" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Vamos criar algo <span style={styles.highlight}>incrível</span> juntos?</h2>
        <p style={styles.subtitle}>Entre em contato para discutirmos seu projeto</p>
        
        <div className="wrapper" style={styles.wrapper}>
        <form className="form" style={styles.form} onSubmit={async (e)=>{
            e.preventDefault()
            const form = e.currentTarget
            const formData = new FormData(form)
            const payload = Object.fromEntries(formData.entries())
            try {
              const resp = await fetch('/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
              })
              if (!resp.ok) throw new Error('HTTP error')
              const data = await resp.json()
              if (data?.id) {
                alert('Contato registrado com sucesso! ID: ' + data.id)
                form.reset()
              } else {
                alert('Falha ao registrar contato')
              }
            } catch (err) {
              console.error(err)
              alert('Erro de conexão com o servidor')
            }
          }}>
            <div className="row" style={styles.row}>
              <div style={styles.field}>
                <label htmlFor="name" style={styles.label}>Nome</label>
                <input id="name" name="name" placeholder="Seu nome" required style={styles.input} />
              </div>
              <div style={styles.field}>
                <label htmlFor="email" style={styles.label}>Email</label>
                <input id="email" name="email" type="email" placeholder="seu@email.com" required style={styles.input} />
              </div>
            </div>
            <div style={styles.field}>
              <label htmlFor="subject" style={styles.label}>Assunto</label>
              <input id="subject" name="subject" placeholder="Qual é o projeto?" required style={styles.input} />
            </div>
            <div style={styles.field}>
              <label htmlFor="message" style={styles.label}>Mensagem</label>
              <textarea id="message" name="message" placeholder="Conte-nos sobre seu projeto..." required rows={5} style={styles.textarea} />
            </div>
            <button type="submit" style={styles.button}>Enviar Mensagem</button>
            <button type="button" style={styles.whatsAppButton} onClick={()=>{ window.open('https://wa.me/556230985660', '_blank'); }}>
              Conversar no WhatsApp
            </button>
          </form>
          
          <div style={styles.info}>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>📧</span>
              <div>
                <strong style={styles.infoLabel}>Email</strong>
                <p style={styles.infoValue}>contato@sandre.dev</p>
              </div>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>📱</span>
              <div>
                <strong style={styles.infoLabel}>WhatsApp</strong>
                <p style={styles.infoValue}>+55 (62) 3098-5660</p>
              </div>
            </div>
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
  highlight: { color: '#06C1F2' },
  subtitle: {
    fontSize: '1.1rem',
    color: '#96a6b8',
    textAlign: 'center',
    marginTop: '12px',
    marginBottom: '50px'
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '60px',
    alignItems: 'start'
  },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  row: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' },
  field: { display: 'flex', flexDirection: 'column' },
  label: { fontSize: '0.9rem', marginBottom: '8px', color: '#eaf2ff', fontWeight: 500 },
  input: { 
    padding: '14px 16px', 
    borderRadius: '8px', 
    border: '1px solid rgba(6, 193, 242, 0.2)', 
    fontSize: '1rem',
    background: 'rgba(17, 26, 41, 0.8)',
    color: '#eaf2ff',
    outline: 'none',
    transition: 'border-color 0.2s'
  },
  textarea: { 
    padding: '14px 16px', 
    borderRadius: '8px', 
    border: '1px solid rgba(6, 193, 242, 0.2)', 
    fontSize: '1rem',
    background: 'rgba(17, 26, 41, 0.8)',
    color: '#eaf2ff',
    resize: 'vertical',
    outline: 'none'
  },
  button: { 
    padding: '16px 32px', 
    borderRadius: '8px', 
    border: 'none', 
    background: 'linear-gradient(135deg, #06C1F2 0%, #0595F1 100%)', 
    color: '#0b1220', 
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 600,
    marginTop: '10px'
  },
  whatsAppButton: {
    padding: '16px 20px',
    borderRadius: '8px',
    border: 'none',
    background: '#25D366',
    color: '#0b1220',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 600,
    marginTop: '10px',
  },
  info: { display: 'flex', flexDirection: 'column', gap: '24px' },
  infoItem: { display: 'flex', alignItems: 'center', gap: '16px' },
  infoIcon: { fontSize: '2rem' },
  infoLabel: { display: 'block', fontSize: '0.9rem', color: '#96a6b8' },
  infoValue: { margin: '4px 0 0', color: '#eaf2ff', fontSize: '1.1rem' }
}
