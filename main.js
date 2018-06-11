var elt = document.getElementById('calculator');
var calculator = Desmos.Calculator(elt);

function calcabc(h0,h1,h2,i){
  c = h1
  a = (h0 - (2*h1) + h2)/(2*h*h)
  b = (h0-h1-(a*h*h))/ -h
  eq = "y <= " + a + "(x - " + (i + 1)*h + ")^2 + "+ b + "(x - " + (i + 1)*h  +") + "+ c + "\\left\\{"+ i*h + " <= x <= "+(i + 2)*h+"\\right\\}"
  calculator.setExpression({id:i, latex:eq});
}
function run(){
  h = 0.2
  amount = 16
  for (i = 0; i < 2*amount;i+=2){calculator.setExpression({id:i, latex:""});}
  for (i = 0; i < 2*amount;i+=2){
    if (document.getElementById("selFunction").value == "cos(x)"){
      calculator.setExpression({id:"f", latex:document.getElementById("selFunction").value});
      h0 = Math.cos((i)*h)
      h1 = Math.cos((i+1)*h)
      h2 = Math.cos((i+2)*h)
    }if (document.getElementById("selFunction").value == "sin(x)"){
      calculator.setExpression({id:"f", latex:document.getElementById("selFunction").value});
      h0 = Math.sin((i)*h)
      h1 = Math.sin((i+1)*h)
      h2 = Math.sin((i+2)*h)
    }if (document.getElementById("selFunction").value == "tan(x)"){
      calculator.setExpression({id:"f", latex:document.getElementById("selFunction").value});
      h0 = Math.tan((i)*h)
      h1 = Math.tan((i+1)*h)
      h2 = Math.tan((i+2)*h)
    }
    calcabc(h0,h1,h2,i)
  }
}
run()
