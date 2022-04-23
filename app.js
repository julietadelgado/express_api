// Using express object
const express = require('express')

// Express App
const app = express()

app.use(express.json()) // Indicate that we are going to use json

// Port in wich we are going to see our app: localhost:3000
const port = 3000

// HTTP methods
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: 'Juls1'}
    const explorer2 = {id: 2, name: 'Juls2'}
    const explorer3 = {id: 3, name: 'Juls3'}
    const explorer4 = {id: 4, name: 'Juls4'}

    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)

})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: 'Julieta'}
    res.status(200).json(explorer)
})

// Initial path, this path will respond to the url localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})