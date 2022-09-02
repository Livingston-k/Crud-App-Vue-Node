// import express
const express = require("express");
// import cors
const cors = require("cors");

const bodyParser = require('body-parser');

// import routes
const Router = require("./Route/routes.js");

// init express
const app = express();

// use express json
app.use(express.json());

// use cors
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use router
app.use(Router);

app.listen(5000, () => console.log('Server running at http://localhost:5000'))