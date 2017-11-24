'use strict'
import express from 'express';
import app from './server';
import  Event  from './controllers/event.controller';
import  Center  from './controllers/center.controller';

let router = express.Router();
//event = require('./controllers/event.controller'),
//center = require('./controllers/center.controller')
//const express = require('express'),

// router.post('/events', (req,res) => {
//     if (!centers) {
//         response.status(404).json({
//             message: 'No centers found'
//         });
//     }
//     response.json(centers);
// });


router.post('/events', Event.createEvent);
router.put('/events/:id', Event.editEvent);
router.delete('/events/:id', Event.deleteEvent);
router.get('/events', Event.getEvents);
router.get('/events/:id', Event.getEvent);

router.post('/centers', Center.createCenter);
router.put('/centers/:id', Center.editCenter);
router.delete('/centers/:id', Center.deleteCenter);
router.get('/centers', Center.getCenters);
router.get('/centers/:id', Center.getCenter);

export default router; 