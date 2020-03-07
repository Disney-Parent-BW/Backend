const db = require('../dbConfig');

module.exports = {
  find,
  findByUserId,
  findByRequestId,
  findByCommentId,
  add,
  update,
  remove
}

// GET ALL COMMENTS
function find() {
  return db('comments');
}

// GET ALL COMMENTS MADE BY SPECIFIED USER BY USER ID
function findByUserId(id) {
  return db('comments')
    .where({ 'comments.user_id':id })
}

// GET ALL COMMENTS ON SPECIFIED REQUEST BY REQUEST ID
function findByRequestId(id) {
  return db('comments')
    .where({ 'comments.request_id':id })
}

// GET SPECIFIED COMMENT BY COMMENT ID
function findByCommentId(id) {
  return db('comments')
    .where({ 'comments.comment_id':id })
    .first();
}

// ADD A NEW COMMENT
function add(info) {
  return db('comments')
    .insert(info, 'comment_id')
    .then(id => {
      return id[0]
    })
}

// UPDATE A COMMENT
function update(id, info) {
  return db('comments')
    .update(info)
    .where({ 'comments.comment_id':id })
}

// DELETE A COMMENT
function remove(id) {
  return db('comments')
    .del()
    .where({ 'comments.comment_id':id })
}