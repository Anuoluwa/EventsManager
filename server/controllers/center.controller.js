import { center } from '../model/center.model'
import { server } from './server.js';
import { router } from './router.js';



export class Center {
    constructor() {

    }

    getCenters (request, response) {
        if (!centers) {
            response.status(404).json({
                message: 'No centers found'
            });
        }
        response.json(centers);
    }

    getCenter(request, response) {
        const requestId = request.params.id;

        let center = centers.filter(center => {
            return center.id == requestId;
        })

        if (!center) {
            response.status(404).json({
                message: 'No center found'
            });
        }

        response.json(center[0])
    }

    createCenter (request, response) {

        const center = {
            id: centers.length + 1,
            name: request.body.name,
            description: request.body.description,
            capacity: request.body.capacity,
            centerType: request.body.centerType
        }
        centers.push(center);

        response.json(center);

    }

    editCenter (request, response) {
        const requestId = request.params.id;

        let center = centers.filter(center => {
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

    deleteCenter (request, response) {
        const requestId = request.params.id;

        let center = centers.filter(center => {
            return center.id == requestId;
        })[0];

        const index = centers.indexOf(center);

        centers.splice(index, 1);

        response.json({
            message: `The user ${requestId} deleted.`
        });
    }

}