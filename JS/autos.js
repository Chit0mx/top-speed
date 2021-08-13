'use strict'

const url = 'JSON/autos.json';
const solicitud = new XMLHttpRequest();
solicitud.open('POST',url); // primer parametro metodo de peticion, segundo url donde se encuentra el json

solicitud.responseType = 'json';
solicitud.send();


solicitud.onload = ()=>{
    const autos = solicitud.response;
    Autos(autos);
}

function Autos(jsonObj){

    var tabla = document.querySelector("#tarjetas");

    for (var index = 0; index < jsonObj.length; index++) {

        var tarjeta=document.createElement("div");
        tarjeta.className = "card";
        tarjeta.style = "max-width: 540px;";
        tarjeta.style = "display:inline-block;";
    
        var IMG = document.createElement("img");
        IMG.className="card-img-top";
        IMG.src=document.createTextNode(jsonObj[index].IMG).textContent;
        
        var datos = document.createElement("div");
        datos.className="card-body"

        var Modelo=document.createElement("h4");
        Modelo.className = "card-title";
        var ModeloText=document.createTextNode(jsonObj[index].Modelo);
        Modelo.appendChild(ModeloText);

        var Marca=document.createElement("h5");
        Marca.className="card-text";
        var MarcaText=document.createTextNode("Marca: "+jsonObj[index].Marca);
        Marca.appendChild(MarcaText);

        var Categoria=document.createElement("h6");
        Categoria.className="card-text";
        var CategoriaText=document.createTextNode("Categoria: "+jsonObj[index].Categoria);
        Categoria.appendChild(CategoriaText);

        var Anio=document.createElement("h6");
        Anio.className="card-text";
        var AnioText=document.createTextNode("Año: "+jsonObj[index].Anio);
        Anio.appendChild(AnioText);

        var Motor=document.createElement("h6");
        Motor.className="card-text";
        var MotorText=document.createTextNode("Motor: "+jsonObj[index].Motor);
        Motor.appendChild(MotorText);

        var HP=document.createElement("h6");
        HP.className="card-text";
        var HPText=document.createTextNode("HP: "+jsonObj[index].HP);
        HP.appendChild(HPText);

        var Velocidad=document.createElement("h6");
        Velocidad.className="card-text";
        var VelocidadText=document.createTextNode("0-100 Km/h: "+jsonObj[index].Velocidad);
        Velocidad.appendChild(VelocidadText);

        var Transmision=document.createElement("h6");
        Transmision.className="card-text";
        var TransmisionText=document.createTextNode("Transmision: "+jsonObj[index].Transmision);
        Transmision.appendChild(TransmisionText);

        datos.appendChild(Modelo);
        datos.appendChild(Marca);
        datos.appendChild(Categoria);
        datos.appendChild(Anio);
        datos.appendChild(Motor);
        datos.appendChild(HP);
        datos.appendChild(Velocidad);
        datos.appendChild(Transmision);
        tarjeta.appendChild(IMG);
        tarjeta.appendChild(datos);

        tabla.appendChild(tarjeta);
    }
}