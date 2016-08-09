'use strict';

const Router = require('express').Router;
var app = require('express')();
var server = require('http').Server();
var io = require('socket.io')(server);


let router = module.exports = exports = new Router();


// console.log('io: ', io);
router.get('/stuff', (req, res) => {
  io.emit('stuff', 'send stuff');
  res.status(200).send('get stuff');
});
