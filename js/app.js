var Calculadora = {
    display:document.getElementById('display'),
    uno:document.getElementById('1'),
    dos:document.getElementById('2'),
    tres:document.getElementById('3'),
    cuatro:document.getElementById('4'),
    cinco:document.getElementById('5'),
    seis:document.getElementById('6'),
    siete:document.getElementById('7'),
    ocho:document.getElementById('8'),
    nueve:document.getElementById('9'),
    cero:document.getElementById('0'),
    on:document.getElementById('on'),
    signo:document.getElementById('sign'),
    div:document.getElementById('dividido'),
    por:document.getElementById('por'),
    menos:document.getElementById('menos'),
    mas:document.getElementById('mas'),
    punto:document.getElementById('punto'),
    igual:document.getElementById('igual'),
    raiz:document.getElementById('raiz'),
    teclas:document.getElementsByClassName('tecla'),
    datoUno:"0",
    tipoOperacion:"",

    eventos: function() {
        this.uno.addEventListener('click', function() {
          Calculadora.mostrar("1");
            })
        this.dos.addEventListener('click', function() {
          Calculadora.mostrar(2);
        })
        this.tres.addEventListener('click', function() {
          Calculadora.mostrar(3);
        })
        this.cuatro.addEventListener('click', function() {
          Calculadora.mostrar(4);
        })
        this.cinco.addEventListener('click', function() {
          Calculadora.mostrar(5);
        })
        this.seis.addEventListener('click', function() {
          Calculadora.mostrar(6);
        })
        this.siete.addEventListener('click', function() {
          Calculadora.mostrar(7);
        })
        this.ocho.addEventListener('click', function() {
          Calculadora.mostrar(8);
        })
        this.nueve.addEventListener('click', function() {
          Calculadora.mostrar(9);
        })
        this.cero.addEventListener('click', function() {
          Calculadora.mostrar(0);
        })
        this.punto.addEventListener('click', function() {
          Calculadora.mostrarPunto(".");
        })
        this.signo.addEventListener('click', function() {
          Calculadora.mostrarSigno("-");
        })

        this.on.addEventListener('click', function() {
          Calculadora.borrar();
        })
        this.raiz.addEventListener('click', function() {
          Calculadora.idtipo();
        })

        this.mas.addEventListener('click', function() {
          Calculadora.guardarDatos('1');
        })
        this.menos.addEventListener('click', function() {
          Calculadora.guardarDatos('2');
        })
        this.por.addEventListener('click', function() {
          Calculadora.guardarDatos('3');
        })
        this.div.addEventListener('click', function() {
          Calculadora.guardarDatos('4');
        })
        this.igual.addEventListener('click', function() {
          Calculadora.operaciones();
        })
        for (var i = 0; i < this.teclas.length; i++){
          this.teclas[i].addEventListener('mousedown', function () {
            this.style.transform = "scale(0.9)";
          } )
        }
        for (var i = 0; i < this.teclas.length; i++){
          this.teclas[i].addEventListener('mouseup', function () {
            this.style.transform = "scale(1)";
          } )
        }

    },

    mostrar:function(numero) {
      if (this.display.innerHTML == "0."){
              this.display.innerHTML += numero ;
           }
      else if (this.display.innerHTML == 0){
              this.display.innerHTML = numero ;
           }
      else if (this.display.innerHTML.length == 8){
              this.display.innerHTML += "" ;
           }
      else {
              this.display.innerHTML += numero ;
            }
    },

    borrar:function () {
        this.display.innerHTML = 0 ;
    },

    mostrarPunto:function(numero) {
      if (this.display.innerHTML.indexOf(".") != -1) {
        this.display.innerHTML +="";
      }
      else if (this.display.innerHTML.length == 8){
              this.display.innerHTML += "" ;
           }
      else {
          this.display.innerHTML += numero;
      }
    },

 mostrarSigno:function(numero) {
   if (this.display.innerHTML == 0){
           this.display.innerHTML += "" ;
        }
   else if (this.display.innerHTML.indexOf("-") != -1){

            this.display.innerHTML = this.display.innerHTML.slice(1,9);
           }
   else {
              this.display.innerHTML = numero  + this.display.innerHTML ;
            }

    },

    operaciones:function() {
      var dato1 = Number(this.datoUno);
      var datoDos = this.display.innerHTML;
      var dato2 = Number(datoDos);
      var nuevoResultado;
      var resultado = Number(resultado);
      opcion = this.tipoOperacion;
      switch (opcion) {
        case '1':
          resultado = dato1 + dato2;
          this.display.innerHTML = resultado;
          this.display.innerHTML = this.display.innerHTML.slice(0,8);
          break;
        case '2':
          resultado = dato1 - dato2
          this.display.innerHTML = resultado;
          this.display.innerHTML = this.display.innerHTML.slice(0,8);
          break;
        case '3':
          resultado = dato1 * dato2

          this.display.innerHTML = resultado;
          this.display.innerHTML.slice(0,8);
          break;
        case '4':
          resultado = dato1 / dato2
          this.display.innerHTML = resultado;
          this.display.innerHTML = this.display.innerHTML.slice(0,8);
          break;
      }

    },

    guardarDatos:function(ope) {
      this.datoUno = this.display.innerHTML;
      this.tipoOperacion = ope;
      this.display.innerHTML = "";

    }


  }
  Calculadora.eventos();
