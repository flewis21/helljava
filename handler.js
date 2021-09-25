const serverless = require('serverless-http');
const Dotenv = require('dotenv').config();
const app = require('./server')

module.exports.handler = serverless({ app })
