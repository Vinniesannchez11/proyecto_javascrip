
var Calculadora ={
  display:document.getElementById('display'),
  respuesta:0,
  igual:0,
  resultado : 0, diferenca:0,producto:0,cociente:0,
  uno:1,dos:0,tres:0,cuatro:0,cinco:0,seis:0,siete:0,ocho:0,nueve:0,
  cero:0,
  mas:"",menos:"",por:"",div:"",signo:"",punto:"",
  teclaSup:[],


  init:function () {
    this.funcionTeclaDown();
    this.funcionteclaUp();
    this.ImprimirUno();
  },

  funcionTeclaDown:function(){
    for (var i = 0; i < this.teclaSup.length; i++ ){
    this.teclaSup[i].style.width= 99%;
    his.teclaSup[i].style.height= 99%;
    }
  },
  funcionTeclaUp:function(){
    for (var i = 0; i < this.teclaSup.length; i++ ){
    this.teclaSup[i].style.width= 100%;
    his.teclaSup[i].style.height= 100%;
    }
  },




  ImprimirUno:function(){
    document.getElementById('1').onclick = display.innerHTML("1");
    }
  }

}
Calculadora.init();
