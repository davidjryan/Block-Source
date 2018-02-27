process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');
const knex = require('../db/knex');
chai.use(chaiHttp);

describe('Client Routes', () => {
  it('should return the homepage', () => {
    return chai.request(server)
      .get('/')
      .then(response => {
        response.should.have.status(200);
      })
      .catch(error => {
        throw error;
      });
  });

  it.skip("should return a 404 if the page is not found", () => {
    return chai.request(server)
      .get("/sad")
      .then(response => {
        console.log(response)
        response.should.have.status(404);
      });
  });
});

describe('API Routes', () => {

  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      });
  });

  describe('GET api/v1/projects', () => {
    it('should return all the projects', () => {
      return chai.request(server)
        .get('/api/v1/projects')
        .then(response => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.length.should.equal(30);
          response.res.should.be.a('object');
          response.body[0].should.have.property('title');
          response.body[0].title.should.equal('Black Project');
          response.body[0].should.have.property('description');
          response.body[0].description.should.equal("Really really black, like so black it kills you");
          response.body[0].should.have.property('goal_amount');
          response.body[0].goal_amount.should.equal(50000.0);
          response.body[0].should.have.property('fund_amount');
          response.body[0].fund_amount.should.equal(20000.0);
          
        })
        .catch(error => {
          throw error;
        });
    });
  });

  describe('GET api/v1/projects/:id', () => {
    it('should return a single project', () => {
      return chai.request(server)
        .get('/api/v1/projects/1')
        .then(response => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.should.have.property("title");
          response.body.title.should.equal("Black Project");
          response.body.should.have.property("description");
          response.body.description.should.equal("Really really black, like so black it kills you");
          response.body.should.have.property("goal_amount");
          response.body.goal_amount.should.equal(50000.0);
          response.body.should.have.property("fund_amount");
          response.body.fund_amount.should.equal(20000.0);
        })
        .catch(error => {
          throw error;
        });
    });

    it('should return 404 if a single project is not found', () => {
      return chai.request(server)
        .get('/api/v1/projects/720')
        .then(response => {
          response.should.have.status(404);
          response.should.be.json;
          response.body.should.be.a('object');
          response.body.error.should.equal('Not Found');
        })
        .catch(error => {
          throw error;
        });
    });
  });

         //   "id": 1,
        // "name": "Jesse",
        // "bio": "Daredevil, Photographer, Programmer",
        // "created_at": "2018-02-26T22:02:12.770Z",
        // "updated_at": "2018-02-26T22:02:12.770Z",
        // "projects_id": 1,
        // "contributors_id": 1,
        // "owner": true,
        // "contribution_amount": 0
  
  describe("GET api/v1/projects/:id/contributors", () => {
    it("should return all contributors on a project", () => {
      return chai
        .request(server)
        .get("/api/v1/projects/1/contributors")
        .then(response => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a("array");
          response.body[0].should.be.a("object");
          response.body[0].should.have.property("name");
          response.body[0].name.should.equal("Jesse");
          response.body[0].should.have.property("bio");
          response.body[0].bio.should.equal("Daredevil, Photographer, Programmer");
          response.body[0].should.have.property("projects_id");
          response.body[0].projects_id.should.equal(1);
          response.body[0].should.have.property("contributors_id");
          response.body[0].contributors_id.should.equal(1);
          response.body[0].should.have.property("owner");
          response.body[0].owner.should.equal(true);
          response.body[0].should.have.property("contribution_amount");
          response.body[0].contribution_amount.should.equal(0);
        })
        .catch(error => {
          throw error;
        });
    });

    it("should return 404 if contributors are not found", () => {
      return chai
        .request(server)
        .get("/api/v1/projects/50/contributors")
        .then(response => {
          response.should.have.status(404);
          response.should.be.json;
          response.body.should.be.a("array");
          response.body.error.should.equal("Not Found");
        })
        .catch(error => {
          throw error;
        });
    });
  });

  // "id": 1,
  //       "title": "Black Project",
  //       "goal_amount": 50000,
  //       "fund_amount": 20000,
  //       "description": "Really really black, like so black it kills you",
  //       "created_at": "2018-02-26T22:02:12.770Z",
  //       "updated_at": "2018-02-26T22:02:12.770Z",
  //       "projects_id": 1,
  //       "contributors_id": 1,
  //       "owner": true,
  //       "contribution_amount": 0
  describe("GET api/v1/contributors/:id/projects", () => {
    it("should return all projects for a contributor", () => {
      return chai
        .request(server)
        .get("/api/v1/contributors/1/projects")
        .then(response => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a("array");
          response.body[0].should.be.a("object");
          response.body[0].should.have.property("title");
          response.body[0].title.should.equal("Black Project");
          response.body[0].should.have.property("description");
          response.body[0].description.should.equal("Really really black, like so black it kills you");
          response.body[0].should.have.property("goal_amount");
          response.body[0].goal_amount.should.equal(50000.0);
          response.body[0].should.have.property("fund_amount");
          response.body[0].fund_amount.should.equal(20000.0);
          response.body[0].should.have.property("projects_id");
          response.body[0].projects_id.should.equal(1);
          response.body[0].should.have.property("contributors_id");
          response.body[0].contributors_id.should.equal(1);
          response.body[0].should.have.property("owner");
          response.body[0].owner.should.equal(true);
          response.body[0].should.have.property("contribution_amount");
          response.body[0].contribution_amount.should.equal(0);
        })
        .catch(error => {
          throw error;
        });
    });

    it("should return 404 if contributors are not found", () => {
      return chai
        .request(server)
        .get("/api/v1/contributors/50/projects")
        .then(response => {
          response.should.have.status(404);
          response.should.be.json;
          response.body.should.be.a("array");
          response.body.error.should.equal("Not Found");
        })
        .catch(error => {
          throw error;
        });
    });
  });

  describe("POST api/v1/projects_contributors/project", () => {
    it("should post a contribution to a project", () => {
      return chai
        .request(server)
        .post("/api/v1/projects_contributors/project")
        .send({
          projects_id: '1',
          contributors_id: '3',
          owner: 'false',
          contribution_amount: '20000.0'
        })
        .then(response => {
          response.should.have.status(201);
          response.should.be.a("object");
          response.body.should.have.property("id");
        })
        .catch(error => {
          throw error;
        });
    });

    it("should return a 422 when a required param is missing", () => {
      return chai
        .request(server)
        .post("/api/v1/projects_contributors/project")
        .send({ contribution_amount: "5000.0" })
        .then(response => {
          response.should.have.status(422);
        })
        .catch(error => {
          throw error;
        });
    });
  });




});