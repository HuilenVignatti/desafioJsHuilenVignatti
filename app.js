let nombreUsuario = prompt("Ingrese su usuario");
    alert("Hola"+" "+nombreUsuario);


let consulta = prompt("Para ingresar a la tienda ingrese la palabra ENTRAR, sino ingrese SALIR")
if (consulta=="ENTRAR" || consulta=="entrar" || consulta=="Entrar"){
alert("Bienvenid@ a nuestra tienda virtual!");
console.log("el usuario" +" "+ nombreUsuario + " " + "ingreso a la tienda");

let cantidad = Number(prompt("Ingresa la cantidad de helado que quere pedir. 1 para 1/4 kg, 2 para 1/2 kg o 3 para 1 kg"));
let precio1 = 500
let precio2 = 800
let precio3 = 1500
if (cantidad==1){
    alert("El precio es"+" " + precio1);
}
else if(cantidad==2){
    alert("El precio es"+" " + precio2);
}
else if (cantidad==3){
    alert("El precio es"+" " + precio3);
}
else {
    alert ("Ingresaste un número invalido")
}


for (i=0;i<=2;i++){
 let gustos = prompt ("Ingresa los gustos de helado que queres pedir. Podes elegir hasta tres gustos! Ingresa de a uno y presiona enter");
 alert("El gusto que ingresaste fue"+ " " + gustos);

 console.log("El usuario"+" "+nombreUsuario+" "+"ingreso"+" "+gustos);

 }

 alert ("Gracias por tu pedido! En breve lo enviamos a tu domicilio. Que lo disfrutes!")

}
else {
    alert("Hasta luego!");
}

