require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const offices = require('./offices')

const app = express()
const port = process.env.PORT

app.use(bodyParser.json())



const whitelist = ['http://example1.com', 'http://example2.com', 'https://distilando-v1.netlify.app']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions))

app.get('/', function (req, res) {
    console.log(req.hostname);
    console.log(req.get('host'));
    console.log(req.get('origin'));
    res.send("hi");
})


// app.get('/', function(req, res) {

//     res.json([
//         {
//             offices: ['GET /api/offices', 'GET /api/offices/:id', 'POST /api/offices', 'PUT /api/offices/:id', 'DELETE /api/offices/:id']
//         },
//         {
//             employees: ['homework?']
//         }
//     ])
// })

// app.get('/api/offices', function(req, res) {

//     offices.findAll().then(function(response) {
//         res.json(response)
//     }).catch(function(error) {
//         res.status(400).send()
//     })

// })

// app.get('/api/offices/:id', function(req, res) {

//     const id = req.params.id

//     offices.findById(id).then(function(response) {
//         res.json(response)
//     }).catch(function(error) {
//         res.status(400).send()
//     })

// })

// app.post('/api/offices', function(req, res) {

//     const office = {
//         officeCode: req.body.officeCode,
//         city: req.body.city,
//         phone: req.body.phone,
//         addressLine1: req.body.addressLine1,
//         addressLine2: req.body.addressLine2,
//         state: req.body.state,
//         country: req.body.country,
//         postalCode: req.body.postalCode,
//         territory: req.body.territory
//     }

//     offices.insert(office).then(function(response) {
//         res.json(response)
//     }).catch(function(error) {
//         res.status(400).send()
//     })

// })

// app.put('/api/offices/:id', function(req, res) {

//     const id = req.params.id

//     const office = {
//         officeCode: id,
//         city: req.body.city,
//         phone: req.body.phone,
//         addressLine1: req.body.addressLine1,
//         addressLine2: req.body.addressLine2,
//         state: req.body.state,
//         country: req.body.country,
//         postalCode: req.body.postalCode,
//         territory: req.body.territory
//     }

//     offices.update(office).then(function(response) {
//         res.json(response)
//     }).catch(function(error) {
//         res.status(400).send()
//     })

// })


// app.delete('/api/offices/:id', function(req, res) {

//     const id = req.params.id

//     offices.delete(id).then(function(response) {
//         res.json(response)
//     }).catch(function(error) {
//         res.status(400).send()
//     })

// })

app.listen(port, function () {
    console.log(`running on port ${port}`)
})