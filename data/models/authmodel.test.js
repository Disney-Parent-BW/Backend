const db = require('../dbConfig');
const { findByUsername, add } = require('./authModel');
test.todo('not fail')
describe('authorization', () => {

  describe('findByUsername', () => {
    test('find user by username and receive user object', async () => {
      const username = 'RMartin';
      const user = await findByUsername(username)
      expect(user.user_id).toBe(5)
      expect(user.username).toBe('RMartin')
      expect(user.last_name).toBe('Martin')
      expect(user.first_name).toBe('Roy')
      expect(user.role).toBe('parent')
    })
  })
  
  describe('add', () => {
    
    test('add new user to db', async () => {
      await add({
        username: 'usernameModelTest',
        last_name: 'last_name',
        first_name: 'first_name',
        email: 'emailModel@email.com',
        password: '$2b$10$V/5b9lQqZ21ft9QZs1n14eK0n4TWj9w.Q5guteELc7lEbAV1I.XEa',
        role: 'role'
      })
      const user = await db('users');
      expect(user).toHaveLength(8);
    })
  })
});