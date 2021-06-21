const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const dotenv = require('dotenv');
dotenv.config();

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT)

const dbOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

// middlewares --------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

// Routes -------------------------------------------
app.get('/', (req, res) => {
    res.send('welcome to my API')
})

app.use('/api', routes)

// Server running ------------------------------------
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})