require('dotenv').config()

const express = require('express')
const mysql = require('mysql2')

const app = express()
const port = process.env.PORT

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

app.get('/', function(req, res) {

    console.log(`A requeste was madde to the home endpoint!`)

    res.json({
        status: 'ok',
        description: `it's ok what else can I say...`
    })
})

app.get('/dbtest', function(req, res) {

    connection.query(`SELECT * FROM offices`, function(error, result) {
    
        res.json(result)
    
    })
})

app.get('/api/employees', function(req, res) {

    connection.query(`SELECT * FROM employees`, function(error, result) {
    
        res.json(result)
    
    })
})

app.get('/api/employees/:id', function(req, res) {

    const id = req.params.id

    connection.query(`SELECT * FROM employees WHERE employeeNumber = ?`, [id], function(error, result) {
        
        if (error) {
            res.json({
                status: 'error',
                description: `it's an error, try again later`
            })
        }

        res.json(result)
    
    })
})

app.listen(port, function() {
    console.log(`running on port ${port}`)
})