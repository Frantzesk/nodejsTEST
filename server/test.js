const express = require('express')
const app = express()

app.use(express.static("client"))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000)