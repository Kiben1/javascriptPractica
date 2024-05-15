/* funcion resolver masa corporal */
function masaCorporal(){
    let m=parseFloat(document.getElementById("n1").value);
    let a=parseFloat(document.getElementById("n2").value);
    let imc=m/(a*a);
    if (imc < 18.5) {
        r=":Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        r=":Peso normal";
    } else if (imc >= 25 && imc < 30) {
        r=":Sobrepeso";
    } else { 
        r=":Obesidad";
    }
    document.getElementById("res").innerHTML=imc.toFixed(1)+r;
    document.getElementById("r").innerHTML=r;
}
/* funcion resolver su edad */
function edad(){
    let es=document.getElementById("n1").value;
    let ed=parseFloat(document.getElementById("n2").value);
    if (es === "perro"||es==="Perro"||es==="PERRO") {
        // Fórmula para calcular la edad de un perro en años humanos
        if (ed <= 2) {
            r= ed * 10.5;
        } else {
            r= 21 + (ed - 2) * 4;
        }
    } else if (es === "gato"||es==="Gato"||es==="GATO") {

        // Fórmula para calcular la edad de un gato en años humanos
        
    if (ed === 1) {
            r= 15;
        } else if (ed === 2) {
            r= 24;
        } else {
            r=24 + (ed - 2) * 4;
        }
    } else {
        // Otra especie
        r="No se puede calcular la edad para esta especie.";
    }
    document.getElementById("res").innerHTML=r+" años";
}
function edad2(){
    let es=document.getElementById("n1").value;
    let ed=parseFloat(document.getElementById("n2").value);
    if (es === "perro"||es==="Perro"||es==="PERRO") {
        // Fórmula para calcular la edad de un perro en años humanos
        r=ed*7
    } else if (es === "gato"||es==="Gato"||es==="GATO") {

        // Fórmula para calcular la edad de un gato en años humanos
        r=ed*5
    } else {
        // Otra especie
        r="No se puede calcular la edad para esta especie.";
    }
    document.getElementById("res").innerHTML=r+" años";
}

/* INICIAR SESION */
function iniciar(){
    var usu,pass;
    usu=document.getElementById("n1").value;
    pass=(document.getElementById("n2").value);
    if (usu=="Kiben"&&pass=="12345"){
        window.location = "index.html";
    }else{
    alert("Usuario Inválido");}
}
//registro formulario
function registro(){
    var nombres=document.getElementById("n1").value;
    var apellidos=document.getElementById("n2").value;
    var DAT=document.getElementById("n3").value;
    var fechaNacimiento = new Date(document.getElementById("n3").value);
     // Separar nombres
  var nombresSeparados = nombres.split(" ");
  var nombre1 = nombresSeparados[0];
  var nombre2 = nombresSeparados.length > 1 ? nombresSeparados[1] : nombre1; // Si no hay segundo nombre, duplicar el primero
  
  // Obtener iniciales de nombres
  var inicialNombre1 = nombre1.charAt(0).toLowerCase();
  var inicialNombre2 = nombre2.length > 0 ? nombre2.charAt(0).toLowerCase() : inicialNombre1;
  
  // Separar apellidos
  var apellidosSeparados = apellidos.split(" ");
  var apellido1 = apellidosSeparados[0];
  var apellido2 = apellidosSeparados.length > 1 ? apellidosSeparados[1] : apellido1; // Si no hay segundo apellido, duplicar el primero
  
  // Obtener las tres últimas letras del primer apellido
  var parteApellido1 = apellido1.length > 3 ? apellido1.substr(-3).toLowerCase() : apellido1.toLowerCase();
  
  // Obtener dos letras del medio del segundo apellido
  var parteApellido2 = "";
  if (apellido2.length >= 4) {
    var startIndex = Math.floor(apellido2.length / 2) - 1;
    parteApellido2 = apellido2.substr(startIndex, 2).toLowerCase();
  } else {
    parteApellido2 = apellido2.toLowerCase();
  }
  
  // Obtener año de nacimiento
  var añoNacimiento = fechaNacimiento.getFullYear().toString().substr(-2);
  var mesNacimiento = (fechaNacimiento.getMonth() + 1).toString().padStart(2, "0");
  var diaNacimiento = (fechaNacimiento.getDate()+1).toString().padStart(2, "0");
  
  // Generar correo electrónico
  var correo = inicialNombre1 + inicialNombre2 + parteApellido2 + parteApellido1 + añoNacimiento  + diaNacimiento+ mesNacimiento + "@gmail.com";
  
  // Mostrar el correo generado
  document.getElementById("nombres").innerHTML=nombres+" "+apellidos+" "+DAT;
  document.getElementById("res").innerHTML=correo;
}

