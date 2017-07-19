const http = require('http');
const calcAdd = require('./modules/moduleForAdding').adding;
const events = require('events');
const eventsEmitter = new events.EventEmitter();
const myHandler = function () {
    console.log('eve eve');
};
let server;

process.env.NODE_ENV =  process.env.NODE_ENV || 'development';
require('./config/' + process.env.NODE_ENV);



server = http.createServer(function (req, res) {
    eventsEmitter.once('ololo', myHandler);

    eventsEmitter.emit('ololo');



    console.log(`Server on ${process.env.HOST}:${process.env.PORT}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`result adding ${calcAdd(1, 3)} url -> ${req.url}`);
    res.end();
}).listen(process.env.PORT);

