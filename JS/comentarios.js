'use strict'

const url = 'JSON/comentarios.json';
const solicitud = new XMLHttpRequest();
solicitud.open('POST',url); // primer parametro metodo de peticion, segundo url donde se encuentra el json

solicitud.responseType = 'json';
solicitud.send();


solicitud.onload = ()=>{
    const comentarios = solicitud.response;
    tablaComentarios(comentarios);
}

function tablaComentarios(jsonObj){

    var tabla = document.querySelector("#tabla");

    for (var index = 0; index < jsonObj.length; index++) {

        var col = document.createElement("tr");

        var cel = document.createElement("td");
        var texCel = document.createTextNode(jsonObj[index].Nombre);
        cel.appendChild(texCel);

        var cel2 = document.createElement("td");
        var texCel2 = document.createTextNode(jsonObj[index].Correo);
        cel2.appendChild(texCel2);

        var cel3 = document.createElement("td");
        var texCel3 = document.createTextNode(jsonObj[index].Comentario);
        cel3.appendChild(texCel3);

        col.appendChild(cel);
        col.appendChild(cel2);
        col.appendChild(cel3);

        tabla.appendChild(col);
    }
}