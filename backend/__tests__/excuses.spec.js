const request = require('supertest')
const app = require('../server')
const mongoose = require('mongoose')
const ExcuseModel = require('../models/excuse.model')

beforeAll(async () => {
  // delete all excuses
  await ExcuseModel.deleteMany({})
})

afterAll(async () => {
  // close the connection to the database
  await mongoose.connection.close()
})

test('#1 GET / - Without data return 202', async () => {
  const res = await request(app).get('/api/excuse')
  expect(res).toBeDefined()
  expect(res.statusCode).toBe(202)
  expect(res.body.message).toBe('no excuses available')
})
