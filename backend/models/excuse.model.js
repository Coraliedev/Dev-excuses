'use strict'

const mongoose = require('mongoose')

const excuseSchema = new mongoose.Schema({
  http_code: {
    type: Number,
    minlength: 3,
    maxlength: 3,
    unique: true
  },
  tag: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  message: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true,
    unique: true
  }
})

const ExcuseModel = mongoose.model('Excuse', excuseSchema)
module.exports = ExcuseModel
