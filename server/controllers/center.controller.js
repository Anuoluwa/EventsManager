import express from 'express';
import router from '../routes';
import app from '../server';
import center from '../model/center.model'

export default class Center {
    // constructor(request, response) {
    // //     this.request = request;
    // //     this.response = response;

    // // }
    // }

   static getCenters (request, response) {
        if (!centers) {
            response.status(404).json({
                message: 'No centers found'
            });
        }
        response.json(centers);
    }

   static getCenter(request, response) {
        const requestId = request.params.id;

        let center = centers.filter(centers => {
            return centers.id == requestId;
        })

        if (!centers) {
            response.status(404).json({
                message: 'No center found'
            });
        }

        response.json(centers[0])
    }

    static createCenter (request, response) {

        const center = {
            id: centers.length + 1,
            name: request.body.name,
            description: request.body.description,
            capacity: request.body.capacity,
            centerType: request.body.centerType
        }
        centers.push(center);

        response.json(centers);

    }

    static editCenter (request, response) {
        const requestId = request.params.id;

        let center = center.filter(center => {
            return center.id == requestId;
        })[0];

        const index = centers.indexOf(center);

        const keys = Object.keys(request.body);

        keys.forEach(key => {
            center[key] = request.body[key];
            //request.body[key];
        });

        centers[index] = center;

        response.json(centers[index]);
    }

    static deleteCenter (request, response) {
        const requestId = request.params.id;

        let center = centers.filter(center => {
            return centers.id == requestId;
        })[0];

        const index = centers.indexOf(center);

        centers.splice(index, 1);

        response.json({
            message: `The user ${requestId} deleted.`
        });
    }

}