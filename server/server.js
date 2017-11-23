'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8808;

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (request, response) => {
    response.send('Hello World...!');
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})