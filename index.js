
const express = require('express')

const app = express()
const port = 5000
https://github.com/adityaghaywat-cmd/node1/edit/main/index.js
app.get('/', (req, res) => {
    res.send(`
        <h1>Hello Aditya 👋</h1>
        <h2>My first Node1 project is deployed using Jenkins Pipeline1</h2>
        <h2>Version: 4.0.0</h2>
    `)
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
})
