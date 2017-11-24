
import { chai } from 'chai';
import { expect } from 'chai';
import { expect } from 'chai-http';
import { should } from 'chai';
import { server } from './server';
import { Center } from '../controllers/center.controller.js';


process.env.NODE_ENV = 'tests';


//let center = require('../models/center.model');

//let chai = require('chai');
//let chaiHttp = require('chai-http');
//let server = require('../server');
//let should = chai.should();

chai.use(chaiHttp);

describe('Centers', () => {
    beforeEach((done) => {
        center.remove({}, (error) => { 
           done();         
        });     
    });
  describe('/GET centers', () => {
      it('it should GET all the centers', (done) => {
            chai.request(server)
            .get('/centers')
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.be.eql(0);
              done();
            });
      });
  });
  describe('/POST center', () => {
      it('it should not POST an center with empty field', (done) => {
        let center = {
            id: 1,
            name: "JavaScript Conference",
            purpose: "Career and Leadership conference",
            date: "24-11-2017",
            duration: " 7 Days",
            time: "9:00 am",
            guests: 234,
            center: "Marquee"
        }
            chai.request(server)
            .post('/centers')
            .send(center)
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('errorors');
                response.body.errorors.should.have.property('pages');
                response.body.errorors.pages.should.have.property('kind').eql('required');
              done();
            });
      });
      it('it should POST an center ', (done) => {
        let center = {
            id: 1,
            name: "JavaScript Conference",
            purpose: "Career and Leadership conference",
            date: "24-11-2017",
            duration: " 7 Days",
            time: "9:00 am",
            guests: 234,
            center: "Marquee"
        }  
        chai.request(server)
            .post('/centers')
            .send(center)
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('message').eql('Center successfully added!');
                response.body.should.be.a('object');
                response.body.should.have.property('id');
                response.body.should.have.property('name');
                response.body.should.have.property('description');
                response.body.should.have.property('capacity');
              done();
            });
      });
  });
  describe('/GET/:id center', () => {
      it('it should GET a center by the given id', (done) => {
        let center = new Center(new Center({'id':3,'name': 'Andela Hall', 'description': 'Big Hall with changing rooms','capacity': '345','center': 'Hall'})
    );
        center.save((error, center) => {
            chai.request(server)
            .get('/centers/' + center.id)
            .send(center)
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('id');
                response.body.should.have.property('name');
                response.body.should.have.property('description');
                response.body.should.have.property('capacity');
                
                response.body.should.have.property('center');
                
                response.body.should.have.property('_id').eql(center.id);
              done();
            });
        });

      });
  });
  describe('/PUT/:id center', () => {
      it('it should UPDATE an center given the id', (done) => {
        let center = new Center({'id':3,'name': 'Andela Hall', 'description': 'Big Hall with changing rooms','capacity': '345','center': 'Hall'})
        center.save((error, center) => {
                chai.request(server)
                .put('/centers/' + center.id)
                .send(new Center({'id':3,'name': 'Andela Hall', 'description': 'Big Hall with changing rooms','capacity': '345','center': 'Hall'})
            )
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('message').eql('Center updated!');
                    response.body.center.should.have.property('year').eql(1950);
                  done();
                });
          });
      });
  });
 /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id center', () => {
      it('it should DELETE an center given the id', (done) => {
        let center = new Center({'id':3,'name': 'Andela Hall', 'description': 'Big Hall with changing rooms','capacity': '345','center': 'Hall'})
        center.save((error, center) => {
                chai.request(server)
                .delete('/centers/' + center.id)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('message').eql('Center successfully deleted!');
                    response.body.responseult.should.have.property('ok').eql(1);
                    response.body.responseult.should.have.property('n').eql(1);
                  done();
                });
          });
      });
  });
});