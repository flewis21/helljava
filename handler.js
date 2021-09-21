const fs = require('fs')
fs.readFile('./complete-javascript-course/01-Fundamentals-Part-1/starter/index.html', (err, data) => {
  if (err) return console.error(err)
  console.log(data.toString())
})
console.log('Program Ended')
