const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>hello aditya my first node1 project is deploy use pipeline</h1>')
      <h2> 1.0.0</h2>
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
