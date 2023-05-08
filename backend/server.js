'use strict'

const express = require('express')
require('dotenv').config()
require('./config/database')
const excusesRoutes = require('./routes/excuse.routes')

const PORT = process.env.PORT

// create an Express application
const app = express()

// routes
app.use('/api/excuse', excusesRoutes)

// server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
