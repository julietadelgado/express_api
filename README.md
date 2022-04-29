# Practice Launch X

### My first API

This repository is to practice the creation of an API and test endpoints.

To create our first API, follow this steps:

1. Create a project and an express server (you can follow [this tutorial](https://github.com/julietadelgado/express_basic) to create a server with Express.js)

2. Add endpoints in the app.js
```
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

app.post('/v1/explorers', (req,res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body // Params of a client
    res.status(201).json({message: 'Created'})
})

app.put('/v1/explorers/:id', (req,res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body // Params of a client
    res.status(200).json({message: 'Updated!'})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`DELETE explorer with id ${req.params.id}`)
    const requestBody = req.body // Params of a client
    res.status(200).json({message: 'Deleted'})
})
```

3. Install Postman.
4. Download the following file: [LaunchX.postman_collection.json (1).zip](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS/files/8515523/LaunchX.postman_collection.json.1.zip)

5. In Postman import the downloaded file. (It contains all the requests necessary for this practice)
6. Test each URL on Postman.
7. Verify that it answers the expected information and status.