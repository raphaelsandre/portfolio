// Node.js server for Plesk Passenger - serves from 'public' folder
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import mysql from 'mysql2/promise'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())

// DB pool (MariaDB) - configure via env vars or defaults for local/dev
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'contacts_user',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'contacts_site',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

const publicPath = path.join(__dirname, 'public')

// API routes should be registered before static catch-all
app.use('/api', (req, res, next) => next())
app.use(express.static(publicPath))

app.post('/api/contacts', async (req, res) => {
  const { name, email, subject, message } = req.body || {}
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes: name, email ou message' })
  }
  // Capture requester info
  const ip = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || req.ip
  const userAgent = req.headers['user-agent'] || ''
  try {
    const [result] = await pool.execute(
      `INSERT INTO contacts (name, email, subject, message, ip_address, user_agent, created_at, status) VALUES (?, ?, ?, ?, ?, ?, NOW(), 'new')`,
      [name, email, subject, message, ip, userAgent]
    )
    return res.status(201).json({ id: result.insertId, ok: true })
  } catch (err) {
    console.error('DB insert error:', err)
    return res.status(500).json({ error: 'Erro ao registrar contato' })
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
