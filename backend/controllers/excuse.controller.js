'use strict'

const Excuse = require('../models/excuse.model')

// Retrieve and return all excuses from the database.
module.exports.getAllExcuses = async (req, res) => {
  try {
    const excuses = await Excuse.find().exec()
    if (excuses.length > 0) {
      res.json(excuses)
    } else {
      res.status(202).json({ message: 'no excuses available' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}
