const Ws = require('ws');

;((Ws) => {
  
  const server = new Ws.Server({ port: 8000 });

  const init = () => {
    bindEvent();
  };

  function bindEvent() {
    server.on('open', handleOpen);
    server.on('close', handleClose);
    server.on('error', handleError);
    server.on('connection', handleConnection);
  }

  function handleOpen() {
    console.log('WebSocket Open');
  }

  function handleClose() {
    console.log('WebSocket Close');
  }

  function handleError() {
    console.log('WebSocket Error');
  }

  function handleConnection(Ws) {
    console.log('WebSocket Connection');

    Ws.on('message', handleMessage);
  }

  function handleMessage(msg) {
    server.clients.forEach((c) => {
        c.send(msg);
    })
  }

  init();
})(Ws);