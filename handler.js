'use strict'

const app = require('./app')

module.exports.helloWorld = async (app, event) => {
  return {
    statusCode: 200,
    headers: {
    	'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(
    	{

        	message: 'Go Serverless v1.0! Your function executed successfully',
    		input: app
    	},
    	null,
    	2
    )
  }
}
