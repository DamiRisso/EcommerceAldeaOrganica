let catFrutasYVerduras = "Frutas-verduras";
let catDulces = "Dulces";
let catAlmacen = "Almacen";
let productos = [];

function producto(nombre, descripcion, peso, precio, productor, stock, codigo, categoria,) {
	this.nombre = nombre;
	this.descripcion = descripcion;
	this.peso = peso;
	this.precio = precio;
	this.productor = productor;
	this.stock = stock;
	this.codigo = codigo;
	this.categoria = categoria;
	this.listar =  function() {
		productos.push(this);
	}
}



let producto_001 = new producto("Bolson agroecologico", 
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies posuere lorem, nec bibendum justo tristique vel. Integer sagittis egestas sodales. Mauris tincidunt, ante eget.", 
	8.000, 500, "Fetraes", true, '001', catFrutasYVerduras);
 producto_001.listar();
let producto_002 = new producto("Fideos agroecologico", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies posuere lorem, nec bibendum justo tristique vel. Integer sagittis egestas sodales. Mauris tincidunt, ante eget.",1.000, 150, "Cooperativa La pampa", true, '002', catAlmacen);
 producto_002.listar();
let producto_003 = new producto("Naranjas organicas","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies posuere lorem, nec bibendum justo tristique vel. Integer sagittis egestas sodales. Mauris tincidunt, ante eget.", 1.000, 100, "Fetraes", true, '003', catFrutasYVerduras);
 producto_003.listar();
let producto_004 = new producto("Mermelada de durazno","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies posuere lorem, nec bibendum justo tristique vel. Integer sagittis egestas sodales. Mauris tincidunt, ante eget.", 0.400, 85, "Akunai", false, '004', catDulces);
 producto_004.listar();
let producto_005 = new producto("Yerba","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies posuere lorem, nec bibendum justo tristique vel. Integer sagittis egestas sodales. Mauris tincidunt, ante eget.", 0.500, 90, "La Yerbita", true,'005', catAlmacen);
 producto_005.listar();
let producto_006 = new producto("Pan artesanal","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies posuere lorem, nec bibendum justo tristique vel. Integer sagittis egestas sodales. Mauris tincidunt, ante eget.", 0.500, 80, "Los Panas", true, '006', catAlmacen);
 producto_006.listar();
let producto_007 = new producto("Galletitas de Algarroba","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies posuere lorem, nec bibendum justo tristique vel. Integer sagittis egestas sodales. Mauris tincidunt, ante eget.", 0.400, 50, "Akunai", false, '007', catDulces);
producto_007.listar();
let producto_008 = new producto("Arandanos Frescos","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies posuere lorem, nec bibendum justo tristique vel. Integer sagittis egestas sodales. Mauris tincidunt, ante eget.", 0.500, 200, "Fetraes", true, '008', catFrutasYVerduras);
producto_008.listar();



let generadorCardsProductos = () => {
	for (let i = 0; i < productos.length; i++) {
		let card = `
		<div class="card ${productos[i].categoria}" id="prod-${productos[i].codigo}" style="width: 18rem;">
  <img src="IMAGENES/producto_${productos[i].codigo}.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${productos[i].nombre}</h5>
    <p class="card-text">${productos[i].descripcion}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${productos[i].peso}Kg</li>
    <li class="list-group-item">${productos[i].productor}</li>
    <li class="list-group-item">$${productos[i].precio}</li>
  </ul>
  <div class="card-body">
       <label class="textoFormulario unidades"> Unidades
    </label>
    <button class="btn btn-primary" onclick="aniadirAlCarrito(producto_${productos[i].codigo})">Añadir al carrito</button>
  </div>
</div>
		`
		document.getElementById('contenedor-productos').innerHTML += card;
	}
}

generadorCardsProductos();