const {
    createServer
} = require('net');

const sockets = [];

const server = createServer();

server.on('connection', (socket) => {
    process.stdout.write(`\nConnection from ${socket.remoteAddress}:${socket.remotePort}\n`);

    sockets.push(socket);

    socket.once('data', (buffer) => {

        socket.username = buffer.toString('utf8');
        sendMessage(socket, `${socket.username} logged in`)

        socket.on('data', (buffer) => {
            let message = buffer.toString('utf8');
            sendMessage(socket, `${message}`);
        });
    });

    socket.on('end', () => {
        sockets.splice(sockets.indexOf(socket), 1);
        sendMessage(socket, `${socket.username} logged out`);
    })
});

const options = {
    host: '127.0.0.1',
    port: 3000
};

server.listen(options, () => {
    process.stdout.write(`Listen on ${options.host}: ${options.port}`);
});

const sendMessage = (socket,message) => {

    console.log(`${message}`);
}
