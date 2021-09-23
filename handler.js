'use strict'

const app = require('./app')
const fs = require('fs')
const path = require('path')

module.exports.helloWorld = async (event, context) => {
  const html = fs.readFile('./complete-javascript-course/01-Fundamentals-Part-1/starter/index.html', 'utf-8')
  return {
    statusCode: 200,
    headers: {
    	'Access-Control-Allow-Origin': '*',
    	'Content-Type': 'text/html'
    },
    body: html
  }

  context.succeed(html)
}
