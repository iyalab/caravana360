var socket = io( document.location.origin );
var codigo = window.prompt("Código secreto","De 6 caracteres");

var Game = {

    bindSocketEvents: function () {
        socket.on( 'cambioImagen', function(data){
            if(codigo == data.code){
                var imagen = "";
                if(data.boton == "lost"){
                    imagen = "#cubes";
                } else if(data.boton == "start"){
                    imagen = "#city";
                } else if(data.boton == "won"){
                    imagen = "#sechelt";
                }
                document.getElementById('image-360').setAttribute('src', imagen);
                console.log(data.code + "/" + data.boton);
            }
        });
    },

    setup: function () {
        Game.bindSocketEvents();
    }
};

