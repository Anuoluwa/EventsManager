import express from 'express';
import router from '../routes';
import app from '../server';
import events from '../model/event.model';


 
//const express = require('express'),
   // router = express.Router();

export default class Event {
    // constructor() {

    // }


    static getEvents (request, response) {
        if (!events) {
            response.status(404).json({
                message: 'No events found'
            });
        }
        response.json(events);
    }

    static getEvent(request, response) {
        const requestId = request.params.id;

        let event = events.filter(event => {
            return event.id == requestId;
        })

        if (!events) {
            response.status(404).json({
                message: 'No event found'
            });
        }

        response.json(events[0])
    }

    static createEvent (request, response) {
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

        response.json(events);

    }

    static editEvent (request, response) {
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

    static deleteEvent (request, response) {
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