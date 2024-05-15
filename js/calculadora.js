var operacion = '';
var operandos = [];

function agregarElemento(valor) {
  document.getElementById('display').value += valor;
}

function realizarOperacion(op) {
  operacion = op;
  operandos.push(parseFloat(document.getElementById('display').value));
  document.getElementById('display').value = '';
}

function calcular() {
  operandos.push(parseFloat(document.getElementById('display').value));
  var resultado = 0;
  switch (operacion) {
    case '+':
      resultado = operandos[0] + operandos[1];
      break;
    case '-':
      resultado = operandos[0] - operandos[1];
      break;
    case '*':
      resultado = operandos[0] * operandos[1];
      break;
    case '/':
      resultado = operandos[0] / operandos[1];
      break;
    default:
      break;
  }
  document.getElementById('display').value = resultado;
  operacion = '';
  operandos = [];
}

function limpiar() {
  document.getElementById('display').value = '';
  operacion = '';
  operandos = [];
}