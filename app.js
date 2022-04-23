// Using express object
const express = require('express')

// Express App
const app = express()

app.use(express.json()) // Indicate that we are going to use json

// Port in wich we are going to see our app: localhost:3000
const port = 3000

// Initial path, this path will respond to the url localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})