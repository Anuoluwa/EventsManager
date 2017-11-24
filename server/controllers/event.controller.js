
import { event } from '../model/event.model'
import { Server } from './server.js';
import { Router } from './router.js';

 
//const express = require('express'),
   // router = express.Router();

export class Event {
    constructor() {

    }

    showHome (request, response) {
        response.send('Hello oooorld////')
    }

    getEvents (request, response) {
        if (!events) {
            response.status(404).json({
                message: 'No events found'
            });
        }
        response.json(events);
    }

    getEvent(request, response) {
        const requestId = request.params.id;

        let event = events.filter(event => {
            return event.id == requestId;
        })

        if (!event) {
            response.status(404).json({
                message: 'No event found'
            });
        }

        response.json(event[0])
    }

    createEvent (request, response) {

        const event = {
            id: events.length + 1,
            name: request.body.name,
            purpose: request.body.purpose,
            date: request.body.date,
            duration: request.body.duration,
            time: request.body.time,
            guests: request.body.guests,
            center: request.body.duration
        }
        events.push(event);

        response.json(event);

    }

    editEvent (request, response) {
        const requestId = request.params.id;

        let event = events.filter(event => {
            return event.id == requestId;
        })[0];

        const index = events.indexOf(event);

        const keys = Object.keys(request.body);

        keys.forEach(key => {
            event[key] = request.body[key];
            //request.body[key];
        });

        events[index] = event;

        response.json(events[index])
    }

    deleteEvent (request, response) {
        const requestId = request.params.id;

        let event = events.filter(event => {
            return event.id == requestId;
        })[0];

        const index = events.indexOf(event);

        events.splice(index, 1);

        response.json({
            message: `The user ${requestId} deleted.`
        });
    }

}