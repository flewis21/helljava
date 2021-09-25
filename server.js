// Load Node modules
const bodyParser = require('body-parser')
const express = require('express')
const ejs = require('ejs')
// Initialise Express
const app = express()
// Render static files
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
// Set the view engine to ejs
app.set('view engine', 'ejs')
// Port website will run on
// app.listen(4000)

// *** GET Routes - display pages ***
// Route Route
app.get('/', function (req, res) {
  res.render('pages/index', {data: {}, error: null})
})

module.exports = app
