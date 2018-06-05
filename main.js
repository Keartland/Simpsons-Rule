var elt = document.getElementById('calculator');
var calculator = Desmos.Calculator(elt);
calculator.setExpression({id:'graph1', latex:'cos(sin(x))'});


function f(x){
  return Math.cos(Math.sin(x))
}

function calcabc(h0,h1,h2,i){
  c = h1
  a = (h0 - (2*h1) + h2)/(2*h*h)
  b = (h0-h1-(a*h*h))/ -h
  eq = "0 < y < " + a + "(x - " + (i + 1)*h + ")^2 + "+ b + "(x - " + (i + 1)*h  +") + "+ c + "\\left\\{"+ i*h + " < x < "+(i + 2)*h+"\\right\\}"
  calculator.setExpression({id:i, latex:eq});
}
h = 0.4
for (i = 0; i < 2*16;i+=2){
  h0 = f((i)*h)
  h1 = f((i+1)*h)
  h2 = f((i+2)*h)
  calcabc(h0,h1,h2,i)
}
