const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3000 },()=>{
    console.log('server started')
})
wss.on('connection', function connection(ws) {
   ws.on('message', (data) => {
      console.log('data received \n %o',data)
      wss.broadcast(JSON.stringify(data), ws);
   })
})
wss.on('listening',()=>{
   console.log('listening on 3000')
})

wss.broadcast = function(data, sender) {
   wss.clients.forEach(function(client) {
     if (client !== sender) {
       client.send(data)
     }
   })
 }