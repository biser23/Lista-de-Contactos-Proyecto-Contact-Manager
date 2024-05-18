const express = require('express')
const dbConnection = require('./config/config')
const cors = require('cors');
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000
const routes = require('./routes/contacts');

const whitelist = ['http://localhost:3000', 'https://contact-manager-eca0a.web.app'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', routes)
app.get('/', (req, res) => {res.send("HELLOW");});

dbConnection()

app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})