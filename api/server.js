require('dotenv').config()
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session'); //npm i express-session to install
const KnexStore = require('connect-session-knex')(session); // remember to curry and pass the session  // npm install connect-session-knex

const authRouter = require('../data/routers/authRouter');
const requestRouter = require('../data/routers/requestRouter');
const commentRouter = require('../data/routers/commentRouter');
const knex = require('../data/dbConfig.js'); // needed for storing sessions in the database


const server = express();

const sessionConfig = {
    name: 'monster',
    secret: "Keep it secret, keep it safe!",
    resave: false,
    saveUninitialized: true, //related to GDPR compliance
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false, // should be true in production
        httpOnly: true, // true means JS cant touch the cookie
    },
    // remember the new keyword
    store: new KnexStore({
        knex,
        tablename: 'sessions',
        createtable: true,
        sidfieldname: 'sid',
        clearInterval: 1000 * 60 * 15,
    }),
};

server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(session(sessionConfig)); // turn on the session middleware
//at this point there is a req.session object created by express-session
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api', requestRouter);
server.use('/api', commentRouter);

server.get("/", (req, res) => {
    //console.log(req.session);
    res.json({api:"up"});
});

module.exports = server;