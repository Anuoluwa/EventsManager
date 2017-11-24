process.env.NODE_ENV = 'test';


let event = require('../models/event.model');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Events', () => {
    beforeEach((done) => {
        event.remove({}, (error) => { 
           done();         
        });     
    });
  describe('/GET events', () => {
      it('it should GET all the events', (done) => {
            chai.request(server)
            .get('/events')
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.be.eql(0);
              done();
            });
      });
  });
  describe('/POST event', () => {
      it('it should not POST an event with empty field', (done) => {
        let event = {
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
            .post('/events')
            .send(event)
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('errorors');
                response.body.errorors.should.have.property('pages');
                response.body.errorors.pages.should.have.property('kind').eql('required');
              done();
            });
      });
      it('it should POST an event ', (done) => {
        let event = {
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
            .post('/events')
            .send(event)
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('message').eql('Book successfully added!');
                response.body.event.should.have.property('name');
                response.body.event.should.have.property('purpose');
                response.body.event.should.have.property('date');
                response.body.event.should.have.property('duration');
                response.body.event.should.have.property('time');
                response.body.event.should.have.property('guests');
                response.body.event.should.have.property('center');
              done();
            });
      });
  });
  describe('/GET/:id event', () => {
      it('it should GET an eventk by the given id', (done) => {
        let event = new Event(new Event({name: "Python Conference", purpose: "Developers Meetup",date: "3-11-2017",duration: "3 Days",guests: "345",center: "Hall"})
    );
        event.save((error, event) => {
            chai.request(server)
            .get('/events/' + event.id)
            .send(event)
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('name');
                response.body.should.have.property('purpose');
                response.body.should.have.property('date');
                response.body.should.have.property('duration');
                response.body.should.have.property('time');
                response.body.should.have.property('guests');
                response.body.should.have.property('center');
                
                response.body.should.have.property('_id').eql(event.id);
              done();
            });
        });

      });
  });
  describe('/PUT/:id event', () => {
      it('it should UPDATE an event given the id', (done) => {
        let event = new Event({name: "Python Conference", purpose: "Developers Meetup",date: "3-11-2017",duration: "3 Days",guests: "345",center: "Hall"})
        event.save((error, event) => {
                chai.request(server)
                .put('/events/' + event.id)
                .send(new Event({name: "Python Conference", purpose: "Developers Meetup",date: "3-11-2017",duration: "3 Days",guests: "345",center: "Hall"})
            )
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('message').eql('Book updated!');
                    response.body.event.should.have.property('year').eql(1950);
                  done();
                });
          });
      });
  });
 /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id event', () => {
      it('it should DELETE an event given the id', (done) => {
        let event = new Event({name: "Python Conference", purpose: "Developers Meetup",date: "3-11-2017",duration: "3 Days",guests: "345",center: "Hall"})
        event.save((error, event) => {
                chai.request(server)
                .delete('/events/' + event.id)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('message').eql('Event successfully deleted!');
                    response.body.responseult.should.have.property('ok').eql(1);
                    response.body.responseult.should.have.property('n').eql(1);
                  done();
                });
          });
      });
  });
});