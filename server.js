'use strict';

const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
