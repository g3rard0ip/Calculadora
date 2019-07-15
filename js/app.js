var Calculadora = {
  pantalla : document.getElementById("display"),
  init : function(){
    Calculadora.teclaOn();
    Calculadora.teclaSign();
    Calculadora.teclaRaiz();
    Calculadora.teclaDividido();
    Calculadora.teclaPor();
    Calculadora.teclaSiete();
    Calculadora.teclaOcho();
    Calculadora.teclaNueve();
    Calculadora.teclaRestar();
    Calculadora.teclaCuatro();
    Calculadora.teclaCinco();
    Calculadora.teclaSeis();
    Calculadora.teclaUno();
    Calculadora.teclaDos();
    Calculadora.teclaTres();
    Calculadora.teclaCero();
    Calculadora.teclaPunto();
    Calculadora.teclaIgual();
    Calculadora.teclaSuma();
    Calculadora.crearListeners();
  },
  teclaOn : function(){
    var on = document.getElementById('on');
    on.addEventListener("mousedown", function(){
      on.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    on.addEventListener("mouseup", function(){
      on.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaSign : function(){
    var sign = document.getElementById('sign');
    sign.addEventListener("mousedown", function(){
      sign.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    sign.addEventListener("mouseup", function(){
      sign.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaRaiz : function(){
    var raiz = document.getElementById('raiz');
    raiz.addEventListener("mousedown", function(){
      raiz.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    raiz.addEventListener("mouseup", function(){
      raiz.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaDividido : function(){
    var dividido = document.getElementById('dividido');
    dividido.addEventListener("mousedown", function(){
      dividido.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    dividido.addEventListener("mouseup", function(){
      dividido.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaPor : function(){
    var por = document.getElementById('por');
    por.addEventListener("mousedown", function(){
      por.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    por.addEventListener("mouseup", function(){
      por.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaSiete : function(){
    var siete = document.getElementById('7');
    siete.addEventListener("mousedown", function(){
      siete.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    siete.addEventListener("mouseup", function(){
      siete.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaOcho : function(){
    var ocho = document.getElementById('8');
    ocho.addEventListener("mousedown", function(){
      ocho.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    ocho.addEventListener("mouseup", function(){
      ocho.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaNueve : function(){
    var nueve = document.getElementById('9');
    nueve.addEventListener("mousedown", function(){
      nueve.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    nueve.addEventListener("mouseup", function(){
      nueve.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaRestar : function(){
    var restar = document.getElementById('menos');
    restar.addEventListener("mousedown", function(){
      restar.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    restar.addEventListener("mouseup", function(){
      restar.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaCuatro : function(){
    var cuatro = document.getElementById('4');
    cuatro.addEventListener("mousedown", function(){
      cuatro.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    cuatro.addEventListener("mouseup", function(){
      cuatro.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaCinco : function(){
    var cinco = document.getElementById('5');
    cinco.addEventListener("mousedown", function(){
      cinco.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    cinco.addEventListener("mouseup", function(){
      cinco.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaSeis : function(){
    var seis = document.getElementById('6');
    seis.addEventListener("mousedown", function(){
      seis.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    seis.addEventListener("mouseup", function(){
      seis.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaUno : function(){
    var uno = document.getElementById('1');
    uno.addEventListener("mousedown", function(){
      uno.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    uno.addEventListener("mouseup", function(){
      uno.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaDos : function(){
    var dos = document.getElementById('2');
    dos.addEventListener("mousedown", function(){
      dos.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    dos.addEventListener("mouseup", function(){
      dos.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaTres : function(){
    var tres = document.getElementById('3');
    tres.addEventListener("mousedown", function(){
      tres.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    tres.addEventListener("mouseup", function(){
      tres.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaCero : function(){
    var cero = document.getElementById('0');
    cero.addEventListener("mousedown", function(){
      cero.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    cero.addEventListener("mouseup", function(){
      cero.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaPunto : function(){
    var punto = document.getElementById('punto');
    punto.addEventListener("mousedown", function(){
      punto.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    punto.addEventListener("mouseup", function(){
      punto.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaIgual : function(){
    var igual = document.getElementById('igual');
    igual.addEventListener("mousedown", function(){
      igual.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    igual.addEventListener("mouseup", function(){
      igual.setAttribute("style", "transform:scale(1,1)");
    })
  },
  teclaSuma : function(){
    var suma = document.getElementById('mas');
    suma.addEventListener("mousedown", function(){
      suma.setAttribute("style", "transform:scale(0.85,0.85)");
    })
    suma.addEventListener("mouseup", function(){
      suma.setAttribute("style", "transform:scale(1,1)");
    })
  },
  realizarSuma : function(num1, num2){
    var resultado = num1 + num2;
    return resultado;
  },
  realizarResta : function(num1, num2){
    var resultado = num1 - num2;
    return resultado;
  },
  realizarDivision : function(num1, num2){
    var resultado = num1 / num2;
    return resultado;
  },
  realizarMultiplicacion : function (num1, num2){
    var resultado = num1 * num2;
    return resultado;
  },
  crearListeners : function(){
    var self = this;
    document.getElementById("7").addEventListener("click", function(){
      if (self.pantalla.textContent == "0") {
        self.pantalla.textContent = "7"
      }else{
        self.pantalla.textContent += "7"
      }
    })
    document.getElementById("8").addEventListener("click", function(){
      if (self.pantalla.textContent == "0") {
        self.pantalla.textContent = "8"
      }else{
        self.pantalla.textContent += "8"
      }
    })
    document.getElementById("9").addEventListener("click", function(){
      if (self.pantalla.textContent == "0") {
        self.pantalla.textContent = "9"
      }else{
        self.pantalla.textContent += "9"
      }
    })
    document.getElementById("6").addEventListener("click", function(){
      if (self.pantalla.textContent == "0") {
        self.pantalla.textContent = "6"
      }else{
        self.pantalla.textContent += "6"
      }
    })
    document.getElementById("5").addEventListener("click", function(){
      if (self.pantalla.textContent == "0") {
        self.pantalla.textContent = "5"
      }else{
        self.pantalla.textContent += "5"
      }
    })
    document.getElementById("4").addEventListener("click", function(){
      if (self.pantalla.textContent == "0") {
        self.pantalla.textContent = "4"
      }else{
        self.pantalla.textContent += "4"
      }
    })
    document.getElementById("3").addEventListener("click", function(){
      if (self.pantalla.textContent == "0") {
        self.pantalla.textContent = "3"
      }else{
        self.pantalla.textContent += "3"
      }
    })
    document.getElementById("2").addEventListener("click", function(){
      if (self.pantalla.textContent == "0") {
        self.pantalla.textContent = "2"
      }else{
        self.pantalla.textContent += "2"
      }
    })
    document.getElementById("1").addEventListener("click", function(){
      if (self.pantalla.textContent == "0") {
        self.pantalla.textContent = "1"
      }else{
        self.pantalla.textContent += "1"
      }
    })
    document.getElementById("0").addEventListener("click", function(){
      if (self.pantalla.textContent == "0") {
        self.pantalla.textContent = "0"
      }else{
        self.pantalla.textContent += "0"
      }
    })
    document.getElementById("on").addEventListener("click", function(){
      self.pantalla.textContent = "0"
    })
  }
}
Calculadora.init();
