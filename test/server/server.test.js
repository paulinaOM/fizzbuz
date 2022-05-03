const app = require('../../lib/server/server')
const request = require("supertest");

describe("Unit test for Express Server Fizzbuzz Project", () => {
    test("Initial path: /", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .expect((res) => {
            console.log(res.text)
            expect(res.text).toBe('FizzBuzz API welcome!')
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        })
    });

    test("Route GET /v1/explorers/:mission: get explorers list by mission", (done) => {
        request(app)
            .get("/v1/explorers/node")
            .expect(200)
            .expect((res) => {
                console.log(JSON.parse(res.text))
                explorersInNode = JSON.parse(res.text)
                expect(explorersInNode.every(explorer=>explorer.mission=='node')).toBe(true)
            })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });
    
    test("Route GET /v1/explorers/amount/:mission: get amount of explorers by mission", (done) => {
        request(app)
            .get("/v1/explorers/amount/node")
            .expect(200)
            .expect((res) => {
                const explorers = JSON.parse(res.text);
                
                console.log(explorers);

                expect(explorers.amountExplorersByMission).toBe(10)
            })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    })

    test("Route GET /v1/explorers/usernames/:mission: get explorer's usernames filtered by mission", (done) => {
        request(app)
            .get("/v1/explorers/usernames/java")
            .expect(200)
            .expect((res) => {
                const explorersUsernames = JSON.parse(res.text);
                
                expect(explorersUsernames).not.toBeUndefined();
            })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    })

    test("Route GET /v1/fizzbuzz/:score: get FIZZ, BUZZ, FIZZBUZZ or score", (done) => {
        request(app)
            .get("/v1/fizzbuzz/3")
            .expect(200)
            .expect((res) => {
                const validation = JSON.parse(res.text);
                
                expect(validation.trick).toBe("FIZZBUZZ")
            })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    })

    test("Route GET /v1/fizzbuzz/:score: get FIZZ, BUZZ, FIZZBUZZ or score", (done) => {
        request(app)
            .get("/v1/fizzbuzz/10")
            .expect(200)
            .expect((res) => {
                const validation = JSON.parse(res.text);
                
                expect(validation.trick).toBe("BUZZ")
            })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    })

    test("Route GET /v1/fizzbuzz/:score: get FIZZ, BUZZ, FIZZBUZZ or score", (done) => {
        request(app)
            .get("/v1/fizzbuzz/15")
            .expect(200)
            .expect((res) => {
                const validation = JSON.parse(res.text);
                
                expect(validation.trick).toBe("FIZZBUZZ")
            })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    })
})
