require('dotenv').config()
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const authRouter = require('../data/routers/authRouter');
const requestRouter = require('../data/routers/requestRouter');
const commentRouter = require('../data/routers/commentRouter');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api', requestRouter);
server.use('/api', commentRouter);

module.exports = server;