'use strict'

const express = require('express')
require('dotenv').config()
require('./config/database')

const PORT = process.env.PORT

// create an Express application
const app = express()

// server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
