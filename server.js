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
