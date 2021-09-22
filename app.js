const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')


app.get('' / '', (req, res) => {
  console.log(__dirname)
})
app.use(express.static('./complete-javascript-course/01-Fundamentals-Part-1/starter'))
app.get('/', (req, res) => {
  res.sendFile('./complete-javascript-course/01-Fundamentals-Part-1/starter' + '/index.html')
})

module.exports = app
