'use strict';
import express from 'express';
import router from './routes'
import bodyParser from 'body-parser';
let app = express();
const port =  8888;

//const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/', router),


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

export default app;