const express = require('express'),
 router = express.Router();


module.exports = router; 


router.get('/', (request, response) => {
    response.send('Hello World.!');
});
