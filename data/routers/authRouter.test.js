const request = require('supertest');
const server = require('../../api/server');
const db = require('../dbConfig');
const user = require('../seeds/01_users');
const requests = require('../seeds/02_requests');
const comments = require('../seeds/03_comments');
test.todo('not fail')
describe('authRouter', () => {
  describe('POST /register', () => {
    beforeEach(async () => { // TO TRUNCATE, EITHER TRUNCATE ALL TABLES ASSOCIATED WITH FOREIGN KEY(S) OR ADD CASCADE TO TRUNCATE THEN RESTART IDENTITY TO START THE ID OVER
      // await db.raw('TRUNCATE TABLE users, requests, comments RESTART IDENTITY');
      await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
      await db('users').insert(user.const);
      await db('requests').insert(requests.const);
      await db('comments').insert(comments.const);
    })

    test('should receive 400: missing username/should receive missing username error message', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: '',
          password: 'password',
          last_name: 'last_name',
          first_name: 'first_name',
          email: 'emailRouter@email.com',
          role: 'role'
        })
        .then(response => {
          expect(response.status).toEqual(400)
          expect(response.body).toStrictEqual({ error: 'Please provide a username.' })
        })
    })

    test('should receive 400: missing password/should receive missing password error message', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'usernameRouterTest',
          password: '',
          last_name: 'last_name',
          first_name: 'first_name',
          email: 'emailRouter@email.com',
          role: 'role'
        })
        .then(response => {
          expect(response.status).toEqual(400)
          expect(response.body).toStrictEqual({ error: 'Please provide a password.' })
        })
    })

    test('should receive 400: missing last name/should receive missing last name error message', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'usernameRouterTest',
          password: 'password',
          last_name: '',
          first_name: 'first_name',
          email: 'emailRouter@email.com',
          role: 'role'
        })
        .then(response => {
          expect(response.status).toEqual(400)
          expect(response.body).toStrictEqual({ error: 'Please provide your last name.' })
        })
    })

    test('should receive 400: missing first name/should receive missing first name error message', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'usernameRouterTest',
          password: 'password',
          last_name: 'last_name',
          first_name: '',
          email: 'emailRouter@email.com',
          role: 'role'
        })
        .then(response => {
          expect(response.status).toEqual(400)
          expect(response.body).toStrictEqual({ error: 'Please provide your first name.' })
        })
    })

    test('should receive 400: missing email/should receive missing email error message', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'usernameRouterTest',
          password: 'password',
          last_name: 'last_name',
          first_name: 'first_name',
          email: '',
          role: 'role'
        })
        .then(response => {
          expect(response.status).toEqual(400)
          expect(response.body).toStrictEqual({ error: 'Please provide an email.' })
        })
    })

    test('should receive 400: missing role/should receive missing role error message', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'usernameRouterTest',
          password: 'password',
          last_name: 'last_name',
          first_name: 'first_name',
          email: 'emailRouter@email.com',
          role: ''
        })
        .then(response => {
          expect(response.status).toEqual(400)
          expect(response.body).toStrictEqual({ error: 'Please provide your role.' })
        })
    })

    test('should receive 500/should receive internal server error message', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'usernameRouterTest',
          password: 'password',
          last_name: 'last_name',
          first_name: 'first_name',
          email: 'emailRouter@email.com',
          role: 'role',
          extra: 'extra'
        })
        .then(response => {
          expect(response.status).toEqual(500)
          expect(response.body).toStrictEqual({ error: 'Internal server error AT REGISTRATION: 3 levels' })
        })
    })

    test('should receive 400: trying to add existing username/should receive duplicate username error message', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'RMartin',
          password: 'password',
          last_name: 'last_name',
          first_name: 'first_name',
          email: 'emailRouter@email.com',
          role: 'role'
        })
        .then(response => {
          expect(response.status).toEqual(400)
          expect(response.body).toStrictEqual({ error: 'An account with that username already exists in the database.' })
        })
      })
    })

    test('should receive 201: registration success/should receive JSON formatted response', () => {
      return request(server)
        .post('/api/auth/register')
        .send({
          username: 'usernameRouterTest2',
          password: 'password',
          last_name: 'last_name',
          first_name: 'first_name',
          email: 'emailRouter2@email.com',
          role: 'role'
        })
        .then(response => {
          expect(response.status).toEqual(201)
          expect(response.type).toMatch(/json/i)
        })
    })



  describe('POST /login', () => {
    test('should receive 400: missing username/should receive missing username error message', () => {
      return request(server)
        .post('/api/auth/login')
        .send({
          username: '',
          password: 'password'
        })
        .then(response => {
          expect(response.status).toEqual(400)
          expect(response.body).toStrictEqual({ error: 'Please provide a username.' })
        })
    })

    test('should receive 400: missing password/should receive missing password error message', () => {
      return request(server)
        .post('/api/auth/login')
        .send({
          username: 'usernameRouterTest',
          password: ''
        })
        .then(response => {
          expect(response.status).toEqual(400)
          expect(response.body).toStrictEqual({ error: 'Please provide a password.' })
        })
    })

    test('should receive 401: wrong password/should receive invalid credentials error message', () => {
      return request(server)
        .post('/api/auth/login')
        .send({
          username: 'usernameRouterTest',
          password: 'wrongpassword'
        })
        .then(response => {
          expect(response.status).toEqual(401)
          expect(response.body).toStrictEqual({ error: 'Invalid credentials' })
        })
    })

    test.todo('should receive 201: login success')
    test.todo('should receive JSON formatted response')
    test('should receive 201/should receive internal server error message', () => {
      return request(server)
        .post('/api/auth/login')
        .send({
          username: 'lambda',
          password: 'L4mbd4'
        })
        .then(response => {
          expect(response.status).toEqual(201)
          expect(response.type).toMatch(/json/i)
        })
    })
  }) 
})