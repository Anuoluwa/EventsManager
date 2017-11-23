'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let contacts = require('./data') 

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const hostname = 'localost';
const port = 9009;

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})