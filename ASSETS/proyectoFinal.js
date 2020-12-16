//Categoria
let opcionFrutasVerduras = $('#FrutasyVerduras')
let opcionAlmacen = $('#Almacen')
let opcionDulces = $('#Dulces')
let productosFrutasVerduras = $('.Frutas-verduras')
let productosAlmacen = $('.Almacen')
let productosDulces = $('.Dulces')
let seleccionoTodas = () => {
	for (var i = 0; i < productosFrutasVerduras.length; i++){
		$(productosFrutasVerduras[i]).fadeIn(1000);
	}
	for (var i = 0; i < productosAlmacen.length; i++){
		$(productosAlmacen[i]).fadeIn(1000);
	}
	for (var i = 0; i < productosDulces.length; i++){
		$(productosDulces[i]).fadeIn(1000);
	}
}

let seleccionoFrutas = () => {
	for (var i = 0; i < productosFrutasVerduras.length; i++){
		$(productosFrutasVerduras[i]).fadeIn(1000)
	}
	for (var i = 0; i < productosAlmacen.length; ++i) {
		$(productosAlmacen[i]).fadeOut(500)}
	for (var i = 0; i < productosDulces.length; ++i) {
		$(productosDulces[i]).fadeOut(500)}
}

let seleccionoAlmacen = () => {

	for (var i = 0; i < productosAlmacen.length; i++){
		$(productosAlmacen[i]).fadeIn(1000)
	}
	for (var i = 0; i < productosFrutasVerduras.length; ++i) {
		$(productosFrutasVerduras[i]).fadeOut(500)}
	for (var i = 0; i < productosDulces.length; ++i) {
		$(productosDulces[i]).fadeOut(500)}
}

let seleccionoDulces = () => {
	for (var i = 0; i < productosDulces.length; i++){
		$(productosDulces[i]).fadeIn(1000)
	}
	for (var i = 0; i < productosFrutasVerduras.length; ++i) {
		$(productosFrutasVerduras[i]).fadeOut(500)}
	for (var i = 0; i < productosAlmacen.length; ++i) {
		$(productosAlmacen[i]).fadeOut(500)}
}



// Carrito
const carrito = [];
let numeroCarrito = $('#numeroCarrito')
let label = $('.unidades');
let id;
function generarIds (){
	for (var i = 0; i < label.length; i++) {
		id = `<input type="number" name="unidades" id="producto_00${i+1}" min="1" max="10" value="1">`
label[i].innerHTML = id;	} 
}
generarIds();

let a = "";
let b;
function aniadirAlCarrito(comprado) {

	if(comprado["stock"] === true) { 
		a = 'producto_' + comprado.codigo;
		b = document.getElementById(a).value;
		for (var i = 0; i < b; i++) {
			carrito.push(comprado);
		}
		//console.log(carrito);
		conteoCarrito();
	} else {
		alert("Este producto no esta en stock")
	}
}

function conteoCarrito() {
	numeroCarrito.text(carrito.length);
}

let removerProducto = (i) => {
    carrito.splice(i, 1)
    finalizarCompra() 
    conteoCarrito();           
}

// FORMULARIO
let costoEnvio = 0;
let envioDomicilio = document.getElementById("envio-domicilio");
let retiroLugar = document.getElementById("retiro")
let contenedorLugarEnvio = document.getElementById("cont-lugar-envio");
let contenedorRetiro = document.getElementById("cont-horario-retiro");
let nombreComprador = document.getElementById("form-nombre");
let wppComprador = document.getElementById("form-wpp");

function guardarCampos(campo){
	localStorage.setItem(campo.id, campo.value)
}

function recuperoCampos(){

	if (localStorage.length > 0){
		for (let i = 0; i< localStorage.length; i++) {
			let clave = localStorage.key(i)
			document.getElementById(clave).value = localStorage.getItem(clave)
		}
	}
}

//COSTO FINAL
let costoFinal = document.getElementById("costoFinal");
let contenedorCostoFinal = document.getElementById("contenedorCostoFinal")
let listaCompra = document.getElementById("listaCompra");
let datosCompra = document.getElementById("datosCompra")

function displayOpciones() {
	if (envioDomicilio.checked === true) {
		contenedorLugarEnvio.style.display = "block"
		contenedorRetiro.style.display = "none"
	} else if (retiroLugar.checked === true) {
		contenedorRetiro.style.display = "block"
		contenedorLugarEnvio.style.display = "none"
	} else {

	}
}

let elementoTabla = "";
let listadoProductos = $('#listadoProductos')
let buttonEliminar;
let limpiar = "";
function finalizarCompra() {
	let precioFinal = 0;
	listadoProductos.empty().html("");
	for(let i = 0; i < carrito.length; i++) {
		let j = i+1;
		buttonEliminar = '<button type="button" class="btn btn-outline-danger" onclick="removerProducto('+ i +')">Eliminar</button>';

		elementoTabla += "<tr><th>" + j + "</th><td>" + carrito[i]["nombre"] + "</td><td>" + carrito[i]["precio"] + "</td><td>" + buttonEliminar + "</td></tr>"
		precioFinal += carrito[i]["precio"];
	} 
	if (envioDomicilio.checked === true) {
		precioFinal += 200;
	} 
	listadoProductos.html(elementoTabla);
	elementoTabla = ""
	precioFinal += costoEnvio;
	contenedorCostoFinal.style.display = "block"
	costoFinal.innerText ="Costo final de tu compra: $" + precioFinal;
	datosCompra.innerText = "Nombre: " +nombreComprador.value + " " + "Tel: " + " " + wppComprador.value;
}

//---GENERADOR DE FRASES ALEATORIAS PARA EL HEADER:


let divContenedorFrase = $('#contenedorFrase'); //El div que esta en el index que lo va a contener.

let contenedorFrases = "";

let contenidoJSON = [];

//El llamado AJAX:
function frases(){ 
	$.ajax({
	 url: "ASSETS/frases.json",
	 dataType: "json",
	 success: function(response) {
		 contenidoJSON = response;
		 //Selecciono un objeto al azar del Array con Math:
		let items = Math.floor(Math.random()*contenidoJSON.length);
		 
		contenedorFrases = `<p class="frase">${contenidoJSON[items].frase}</p>
		<p class="autor">${contenidoJSON[items].autor}</p>`
	   ;
	 divContenedorFrase.html(contenedorFrases)
   },
	 error : function() {
		 console.log('Fallo la carga del json.')
	 }
	})
   
   };

//El time out para que se ejecute.
setTimeout(() => {
	frases()
	divContenedorFrase.fadeIn("fast")
 }, 800)


//---UN LLAMADO AJAX A UN JSON CON LOS DATOS DE LOS PUNTOS DE ENTREGA:

let contenidoJSONNodos = [];
let contenedorNodos = "";
//La Tabla en general:
let tablaNodos = $('#tablaNodos');

//El body de la tabla que va a contener los nodos:
let tbodyContenedorNodos = $('#ContenedorNodos')
 
//El llamado AJAX:
function Nodos(){ 
	$.ajax({
	 url: "ASSETS/nodos.json",
	 dataType: "json",
	 success: function(response) {
		 contenidoJSONNodos = response;
		 $.each(contenidoJSONNodos, function(i){
		contenedorNodos += `
		"<tr><th>${contenidoJSONNodos[i].id}</th><td>${contenidoJSONNodos[i].direccion}</td><td>${contenidoJSONNodos[i].barrio}</td><td>${contenidoJSONNodos[i].nombre}</td></tr>"`
	   ;})
		 
	 tbodyContenedorNodos.html(contenedorNodos)
	 tablaNodos.fadeIn(1000)
   },
	 error : function() {
		 console.log('Fallo la carga del json.')
	 }
	})
   
   };



