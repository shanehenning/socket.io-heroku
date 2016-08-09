'use strict';

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// const socketIO = require('socket.io');
// const path = require('path');
const router = require('./routes.js');

// const INDEX = path.join(__dirname, 'index.html');

// server.use((req,res)=> res.sendFile(INDEX));

server.use('/api', router);


// const io = socketIO(server);
// console.log('io: ', io);
//
// io.on('connection', (socket)=>{
//   console.log('Client connected');
//   socket.on('disconnect', () => console.log('Client disconnected'));
// });

// setInterval(()=> io.emit('time', new Date().toTimeString()), 1000);

// setInterval(()=> io.emit('command',  ['James is awesome', 'app.js']),5000);
