'use strict'

const http = require('http')
const fs = require('fs')
const server = http.createServer(function (req, resp) {
  if (req.url === '/create') {
    fs.readFile('./complete-javascript-course/01-Fundamentals-Part-1/starter/index.html', function (error, pgResp) {
      if (error) {
        resp.writeHead(404)
        resp.write('Contents Not Found')
      } else {
        resp.writeHead(200, { 'Content-Type': 'text/html' })
        resp.write(pgResp)
      }

      resp.end()
    })
  } else {
    resp.writeHead(200, { 'Content-Type': 'text/html' })
    resp.write('<h1>Product Manager</h1><br /><br />To create product please enter: ' + req.url)
    resp.end()
  }
})
server.listen(4006)

console.log('Server started and listening on 4006')

const express = require('express')
const app = express()
app.listen(4004, () => {
  console.log('Application started and listening to port 4004')
})
app.get('' / '', (req, res) => {
  console.log(__dirname)
})
app.use(express.static('./complete-javascript-course/01-Fundamentals-Part-1/starter'))
app.get('/', (req, res) => {
  res.sendFile('./complete-javascript-course/01-Fundamentals-Part-1/starter' + '/index.html')
})

module.exports.helloWorld = async (event) => {
  return {
    statusCode: 200,
    headers: {
    	'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(
    	{

        	message: 'Go Serverless v1.0! Your function executed successfully',
    		input: event,
    		input: fs.createReadStream('./complete-javascript-course/01-Fundamentals-Part-1/starter/index.html')
    	},
    	null,
    	2
    )
  }
}
console.log('Program Ended')
