6+'use strict';
const http = require('http');
const fs = require('fs');
const htmlFile = './complete-javascript-course/01-Part-1/index.html';


module.exports.helloWorld = (event, context, callback) => {
  	const response = {
      	statusCode: 200,
    	headers: {
      		'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    	},
    	body: JSON.stringify({
      	message: 'Go Serverless v1.0! Your function executed successfully!',
      		input: event,
		}),
 	};
 };

 	callback(null, response) = {


module.exports.hellJava = fs.readFile(htmlFile, 'UTF-8', (err, data) =? {
	res.WriteHead(200, { 'content-type': 'text/html' });
	} else {
			send404(res);
		}
 	};
 	
console.log('server running on port 4000');
	
var nodegit = require('nodegit'),
    path = require('path');

var url = "",
    local = "",
    cloneOpts = {};

nodegit.Clone(url, local, cloneOpts).then(function (repo) {
    console.log("Cloned " + path.basename(url) + "to  " + repo.workdir());
}).catch(function (err) {
    console.log(err);
});
