//This file initiates DB, established connection to all routes
//also contains all the middleware required to parse data from the frontend

//Getting dotenv
require('dotenv').config()

//Getting required middlewares modules
const bodyParser = require('body-parser')
const cors = require('cors')

//Getting express
const express = require('express')
const app = express()

//Getting Routes
const dataRoutes = require('./routes/data')

//Getting mongoose and conencting DB
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE).then(() => {
      console.log("DB CONNECTED")
  });
}

// Middlewares
app.use(bodyParser.json())
app.use(cors())


//Actual Routes
app.use("/api", dataRoutes);


//Creating port and listening to server
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`app is running at ${port}`)
})
