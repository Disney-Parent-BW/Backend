const request = require('supertest');
const server = require('../../api/server');
const db = require('../dbConfig');
const middlewareObj = require('../../auth/authMiddleware')

test.todo('not fail')
describe('requestRouter', () => {
  describe('GET /requests', () => {
    /*❗*/ test.todo('should receive 500/should receive internal server error message') // ❓ TEST

    test('should receive 200/should receive all requests', () => {
      return request(server)
        .get('/api/requests')
        .then(response => {
          expect(response.status).toEqual(200)
          // expect(response.body).toHaveLength(3)
        })
    })
  })
  
  describe('GET /users', () => {
    /*❗*/ test.todo('should receive 500/should receive internal server error message') // ❓ TEST

    test('should receive 200/should receive all users', () => {
      return request(server)
        .get('/api/users')
        .then(response => {
          expect(response.status).toEqual(200)
          // expect(response.body).toHaveLength(7)
        })
    })
  })

  describe('GET /requests/:id', () => {
    test('MW: should receive 404/should receive error due to invalid id', async () => {
      const id = 123456789;
      return request(server)
        .get(`/api/requests/${id}`)
        .then(response => {
          expect(response.status).toEqual(404)
          expect(response.body).toStrictEqual({ error: `There is no request in the database with the id ${id}` })
        })
    })
    /*❗*/ test.todo('should receive 500/should receive internal server error message') // ❓ TEST: add a period before/after the id

    // test('should receive 200/should specific request object', () => {
    //   const id = 3;
    //   return request(server)
    //     .get(`/api/requests/${id}`)
    //     .then(response => {
    //       expect(response.status).toEqual(200)
    //     })
    // })
  })


  describe('POST /users/:id/requests', () => {
    test('should receive 400/should receive missing meeting place error', () => {
      jest.mock('../../auth/authMiddleware', () => {
        return{
          restricted: (req, res, next) => {
            next();
          }
        }
      })
      // middlewareObj.restricted = jest.fn((req, res, next) => {
      //   next();
      // })

      const id = 7;
      return request(server)
        .post(`/api/users/${id}/requests`)
        .send({
          meeting_place: '',
          meeting_time: '11:30:00',
          number_of_kids: 4423,
          description: `S.O.S. THERE'S TOO MANY OF THEM!!!`
        })
        .then(response => {
          expect(response.status).toEqual(400);
          expect(response.body).toStrictEqual({ error: 'Please add a meeting place' })
        })
    })
  })
})