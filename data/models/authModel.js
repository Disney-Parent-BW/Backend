// AUTHMODEL USED FOR:
  // REGISTER
  // LOGIN

  const db = require('../dbConfig');

  module.exports = {
    findByUsername,
    findByEmail,
    add
  };

  function findByUsername(username) { // ✅TESTED
    return db('users')
      .where({'users.username': username})
      .first();
  };
  
  function findByEmail(email) { // ✅TESTED
    return db('users')
      .where({'users.email': email})
      .first();
  };

  function add(newUser) { // ✅TESTED
    return db('users', 'user_id')
      .insert(newUser)
  }