var express = require('express'); // Docs http://expressjs.com/
var socketIo = require('socket.io'); // Docs http://socket.io/
var app = express();
var server = require('http').Server(app );
//var port = process.env.PORT || 3000;

var server_port = process.env.PORT || 8000;
var server_host = '0.0.0.0';

// Ruta por defecto
app.use(express.static(__dirname + '/public'));

// Rutas para la caravana Test
app.use( '/public/caravana-test/explorador', express.static( __dirname +'/caravana-test/explorador' ));
app.use( '/public/caravana-test/guia', express.static( __dirname +'/caravana-test/guia' ) );

// binding to 0.0.0.0 allows connections from any other computer in the network
// to your ip address
server.listen(server_port, function () {
    console.log("Servidor Caravana360 escuchando por puerto " + server_port);
});

var io = socketIo.listen(server);
io.sockets.on('connection', function (socket) {
    socket.on("cambioImagen", function (data) {
        socket.broadcast.emit("cambioImagen", data);
    });
});