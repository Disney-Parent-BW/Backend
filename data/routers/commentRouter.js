const express = require('express');
const commentDB = require('../models/commentModel');
const requestDB = require('../models/requestModel');
const msg = require('../../api/emails/sendEmail');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const sendEmail = require('../../api/emails/sendEmail');
const { restricted } = require('../../auth/authMiddleware')

// GET ALL COMMENTS
router.get('/comments', (req, res) => {
  commentDB.find()
    .then(comments => {
      res.status(200).json(comments)
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error at GET COMMENTS: comment.find' })
    })
})

// GET ALL COMMENTS MADE BY SPECIFIED USER BY USER ID
router.get('/users/:id/comments', (req, res) => {
  commentDB.findByUserId(req.params.id)
    .then(comments => {
      res.status(200).json(comments)
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error at GET COMMENTS BY USER: comment.findByUserId' })
    })
})

// GET ALL COMMENTS ON SPECIFIED REQUEST BY REQUEST ID
router.get('/requests/:id/comments', (req, res) => {
  commentDB.findByRequestId(req.params.id)
    .then(comments => {
      res.status(200).json(comments)
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error at GET COMMENTS BY REQUEST: comment.findByRequestId' })
    })
})

// GET SPECIFIED COMMENT BY COMMENT ID
router.get('/comments/:id', (req, res) => {
  commentDB.findByCommentId(req.params.id)
    .then(comments => {
      res.status(200).json(comments)
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error at GET COMMENTS BY COMMENT: comment.findByCommentId' })
    })
})

// ADD A NEW COMMENT
router.post('/users/:userid/requests/:requestid/comments', [restricted], (req, res) => {
  const userid = req.params.userid;
  const requestid = req.params.requestid;
  const info = req.body;
  info.user_id = userid;
  info.request_id = requestid;
  if(!info.comment){
    res.status(400).json({ error: 'Please add a comment' })
  }else{
    commentDB.add(info)
      .then(comment => {
        commentDB.findByCommentId(comment)
          .then(newComment => {
            requestDB.emailUser(newComment.request_id)
              .then(userInfo => {
                if(userInfo.user_id === newComment.user_id){
                  res.status(200).json({Request: userInfo, Comment: newComment})
                }else{
                  res.status(200).json({Request: userInfo, Comment: newComment}) 

                  msg.to = `${userInfo.email}`
                  msg.subject = 'New Comment on Disney Parent'
                  msg.text = `Hey ${userInfo.first_name}, You have a new comment on your request: '${userInfo.description}'! Use this link to see the comment: https://disney-parent.davidisaksonii.now.sh/Request/${newComment.request_id}. Thanks for using Disney Parent!
                  From,
                  Disney Parent Team`
                  msg.html = `Hey ${userInfo.first_name}, <br/> You have a new comment on your request: <strong>'${userInfo.description}'</strong>! <a href='https://disney-parent.davidisaksonii.now.sh/Request/${newComment.request_id}'>Click here to see the comment.</a> Thanks for using Disney Parent! <br/> Disney Parent Team`

                  sgMail.send(sendEmail);
                }
              })
          })
          .catch(error => {
          res.status(500).json({ error: 'Internal server error at POST COMMENT: comment.add.findByCommentId' })
        })
      })
      .catch(error => {
        res.status(500).json({ error: 'Internal server error at POST COMMENT: comment.add' })
      })
  }
})

// UPDATE A COMMENT
// ADD ERROR FOR RECEIVING ID THAT IS NOT AN INTEGER???
router.put('/comments/:id', [restricted], (req, res) => {
  const id = req.params.id;
  commentDB.findByCommentId(id)
    .then(findComment => {
      if(!findComment){
        res.status(404).json({ error: `There is no comment in the database with the id ${id}` })
      }else{
        commentDB.update(id, req.body)
          .then(updated => {
            commentDB.findByCommentId(id)
              .then(updatedComment => {
                res.status(201).json(updatedComment)
              })
              .catch(error => {
                res.status(500).json({ error: 'Internal server error at UPDATE COMMENT: comment.findByCommentId.update.findByCommentId' })
              })
          })
          .catch(error => {
            res.status(500).json({ error: 'Internal server error at UPDATE COMMENT: comment.findByCommentId.update' })
          })
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server erro at UPDATE COMMENTr: comment.findByCommentId' })
    })
})

// DELETE A COMMENT
router.delete('/comments/:id', [restricted], (req, res) => {
  const id = req.params.id;
  commentDB.findByCommentId(id)
    .then(comment => {
      if(!comment){
        res.status(404).json({ error: `There is no comment in the database with the id ${id}` })
      }else{
        commentDB.remove(id)
          .then(deleted => {
            res.status(201).json({DELETED: comment})
          })
          .catch(error => {
            res.status(500).json({ error: 'Internal server error at DELETE COMMENT: comment.findByCommentId.remove' })
          })
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error at DELETE COMMENT: comment.findByCommentId' })
    })
})

module.exports = router;