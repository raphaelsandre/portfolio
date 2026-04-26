import React from 'react'

export default function Contact(){
  return (
    <section id="contact" aria-label="Contato" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Contato</h2>
        <form style={styles.form} onSubmit={(e)=>{e.preventDefault(); alert('Formulário simulado.');}}>
          <div style={styles.fieldRow}>
            <label htmlFor="name" style={styles.label}>Nome</label>
            <input id="name" name="name" required style={styles.input} />
          </div>
          <div style={styles.fieldRow}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input id="email" name="email" type="email" required style={styles.input} />
          </div>
          <div style={styles.fieldRow}>
            <label htmlFor="message" style={styles.label}>Mensagem</label>
            <textarea id="message" name="message" required rows={4} style={styles.textarea} />
          </div>
          <button type="submit" style={styles.button}>Enviar</button>
        </form>
      </div>
    </section>
  )
}

const styles = {
  section: { padding: '40px 20px' },
  container: { maxWidth: 800, margin: '0 auto' },
  title: { fontSize: 28, margin: '0 0 12px' },
  form: { display: 'flex', flexDirection: 'column', gap: 12 },
  fieldRow: { display: 'flex', flexDirection: 'column' },
  label: { fontSize: 14, marginBottom: 6 },
  input: { padding: 10, borderRadius: 6, border: '1px solid #ccc', fontSize: 14 },
  textarea: { padding: 10, borderRadius: 6, border: '1px solid #ccc', fontSize: 14, resize: 'vertical' },
  button: { padding: '12px 16px', borderRadius: 6, border: 'none', background: '#22d3ee', color: '#001018', cursor: 'pointer' }
}
