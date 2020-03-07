const db = require('../dbConfig');
const { find, findUsers, findById, findUserById, add, update, remove } = require('./requestModel');
test.todo('not fail')
describe('requests', () => {

  describe('find', () => {
    test('find and receive all requests', async () => {
      const requests = await find();
      expect(requests).toHaveLength(3);
    })
  });

  describe('findUsers', () => {
    test('find all users', async () => {
      const users = await findUsers();
      expect(users).toHaveLength(7)
    })
  })

  describe('findById', () => {
    test('find specified request and receive request object', async () => {
      const request = await findById(1);
      expect(request.meeting_place).toBe('Mad Tea Party')
    })
  })

  describe('findUserById', () => {
    test('find specified user and receive user object', async () => {
      const user = await findUserById(5)
      expect(user.user_id).toBe(5)
      expect(user.username).toBe('RMartin')
      expect(user.last_name).toBe('Martin')
      expect(user.first_name).toBe('Roy')
      expect(user.role).toBe('parent')
    })
  })

  describe('add', () => {
    test('add new request', async () => {
      await add ({
        user_id: 5,
        meeting_place: 'Castle',
        meeting_time: '13:50:00',
        number_of_kids: 1,
        description: 'exchange?'
      })
      const request = await db('requests')
      expect(request).toHaveLength(4)
    })
  })

  describe('update', () => {
  test('update request', async () => {
    const id = 2
      await update (id, {
        user_id: 4,
        meeting_place: 'Arrrgh!',
        meeting_time: '12:30:00',
        number_of_kids: 3,
        description: 'exchange, anyone?'
      })
      const requests = await db('requests')
      expect(requests[3].meeting_place).toBe('Arrrgh!')
    })
  })
  

  describe('remove', () => {
    test('delete request', async () => {
      await remove(2)
      const request = await db('requests')
      expect(request).toHaveLength(3)
    })
  })
})