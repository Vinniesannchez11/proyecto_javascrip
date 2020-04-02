

var display = document.getElementById('display');
var uno  = document.getElementById('1');
var dos  = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco  = document.getElementById('5');
var seis  = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var cero = document.getElementById('0');
var mas = document.getElementById('mas');
var menos = document.getElementById('menos');
var por  = document.getElementById('por');
var div  = document.getElementById('dividido');
var signo = document.getElementById('sign');
var on = document.getElementById('on');
var punto = document.getElementById('punto');
var igual = document.getElementById('igual');

var teclaSup = document.getElementsByClassName('tecla');
for (i = 0; i < teclaSup.length; i++ ){
teclaSup[i].style::selection{
      transform: scale(-1%,-1%)
    }
},

var valor = document.getElementById('display').value;
uno.addEventListener("click", ).innerHTML="1";


})

var calculadora ={
  respuesta:0,
  resultado : 0, diferenca:0,producto:0,cociente:0,
  tecla:document.getElementById('boton-perfil').addEventListener("click"),
  contructor:function () {

  },
  funcionCalcular:function (function(valor)) {
    function actualizarValor() {
      valorAnt = valor
    }
    return{
      sumar:function () {
        respuesta = valorAnt + valor;

      }
    }

  }
  funcionSeguimiento:function (valor, valorAnt, tecla) {

    switch (tecla) {
      case teclamas:

        return respuesta;
        break;
      case teclamenos:
        respuesta = valorAnt - valor;
        return respuesta;
        break;
      case teclapor:
        respuesta = valorAnt * valor;
        return respuesta;
        break;
      case tecladiv:
        respuesta = valorAnt / valor;
        return respuesta;
        break;
    }

  }

  suma:function () {

  },
  resta: function () {

  } ,
  multiplicacion:function () {

  }.
  division:function () {

  },
  teclaNumero:function () {

  },
  teclaCero:function () {

  },
  botonON:function () {

  },
  botonPunto:function () {

  },
  validacionDigitos:function (int respuesta) {
    respuesta.toPrecision(8);
    return respuesta
  },
  botonSigno:function (respuesta) {
    //aparecer el singno en pantalla
    respuesta = -respuesta;
    return respuesta;


  },
  imprimir
  defnumero:function(tecla) {
    switch (tecla) {
      case uno:
        return "1";
        break;
      case dos:
        return "2";
        break;
      case tres:
        return "3";
        break;
      case cuatro:
        return "4";
        break;
      case cinco:
        return "5";
        break;
      case seis:
        return "6";
          reak;
      case siete:
        return "7";
        break;
      case ocho:
        return "8";
          break;
      case nueve:
        return "9";
        break;
      case cero:
        return "0";
        break;
    }
  },
  ImprimirNumero:function(event, numero){
    event.innerHTML(numero);

},
  /*validacionesRespuesta1:function(int respuesta){
    if respuesta = NaN || Infinity{
      respuesta = 'ERROR';
      return respuesta;
    }

  }
  validacionesRespuesta1:function(int dato){
    if typeof dato != number {
      respuesta = 'ERROR'
      return respuesta;
    }
  }*/



}
