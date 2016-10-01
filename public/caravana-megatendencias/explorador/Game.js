var socket = io( document.location.origin );
var codigo = window.prompt("Código secreto","De 6 caracteres");
var vid = document.getElementById('video-360');

var Game = {

    bindSocketEvents: function () {
        socket.on( 'cambioImagen', function(data){
            if(codigo == data.code){
                var imagen = "";
                if(data.boton == "inequidad"){
                    imagen = "#inequidad";
                } else if(data.boton == "sobrepoblacion"){
                    imagen = "#sobrepoblacion";
                } else if(data.boton == "contaminacion-china"){
                    imagen = "#contaminacion-china";
                }
                document.getElementById('video-360').setAttribute('src', imagen);
                console.log(data.code + "/" + data.boton);
            }
        });
    },

    setup: function () {
        Game.bindSocketEvents();
    }
    
};

    document.getElementById('play-button').addEventListener("click", function(e){
    this.style.display = 'none';
    vid.play();
    }, false);
