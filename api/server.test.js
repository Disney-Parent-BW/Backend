const request = require('supertest');
const server = require('./server');
test.todo('not fail')
describe('server', () => {
  describe('environment', () => {
    test("should set db environment to testing", function() {
      expect(process.env.DATABASE_ENV).toBe("testing");
    });
  })
})