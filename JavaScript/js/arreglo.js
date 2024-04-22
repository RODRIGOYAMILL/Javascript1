/*
let carrito=["leche",1,
"carne",2,
"papa",3,
"fideos",1];

console.log("Item: "+carrito[0]);
console.log("Cantidad: "+carrito[1]);
console.log("Item: "+carrito[2]);
console.log("Cantidad: "+carrito[3]);
console.log("Item: "+carrito[4]);
console.log("Cantidad: "+carrito[5]);
console.log("Item: "+carrito[6]);
console.log("Cantidad: "+carrito[7]);

console.log("IMPRESION COMPLETA");
console.log(carrito);


/*
//COMO SE ADICIONA UN NUEVO ITEM Y CANTIDAD
carrito.push("manzana", 4);
console.log(carrito);
*/
/*
let item = { nombre: "Leche", cantidad: 1 };
console.log("Item: " + item.nombre);
console.log("Cantidad: " + item.cantidad);

let carrito = [
  { nombre: 'Leche', cantidad: 1 },
  { nombre: 'Carne', cantidad: 2 },
  { nombre: 'Fideo', cantidad: 1 },
  { nombre: 'Papa', cantidad: 3 }
];


console.log("IMPRESION COMPLETA");
console.log(carrito)

let nuevoItem = { nombre: 'Manzanas', cantidad: 4 };
carrito.push(nuevoItem);

console.log("IMPRESION COMPLETA (ACTUALIZADA)");
console.log(carrito)*/

//adicionar item del precio y el total  

let carrito2=[{nombre: 'Leche',cantidad:1,precio:7.5},
             {nombre: 'CarNe',cantidad:2,precio:15},
             {nombre: 'FideO',cantidad:1,precio:10},
             {nombre: 'Papa',cantidad:3,precio:6}];

 let carrito=[{nombre: 'Leche',cantidad:1,precio:7.5},
             {nombre: 'CarNe',cantidad:2,precio:15},
             {nombre: 'FideO',cantidad:1,precio:10},
             {nombre: 'Papa',cantidad:3,precio:6}];

console.log("impresion ordenado por precio")
carrito.sort((a,b)=>a.precio -b.precio);
console.log(carrito2);
/*
             console.log("Carrito con precios y totales:");
             carrito.forEach((item) => {
               // Calcular precio total
               const precioTotal = item.cantidad * item.precio;
             
               console.log("Nombre: " + item.nombre);
               console.log("Cantidad: " + item.cantidad);
               console.log("Precio: Bs" + item.precio);
               console.log("Precio Total: Bs" + precioTotal);
               console.log("------------------------");
             });

item={nombre: 'Pilfrut',cantidad:5,precio:1.5};
carrito.push(item);
const precioTotal = item.cantidad * item.precio;
             /*
console.log("Nombre: " + item.nombre);
console.log("Cantidad: " + item.cantidad);
console.log("Precio: Bs" + item.precio);
console.log("Precio Total: Bs" + precioTotal);
console.log("------------------------");
console.log(carrito);
*/
//ordenar un array linial.
/*
let numeros=[4,2,6,1,8,3,10];
numeros.sort();
console.log(numeros);
*/

console.log("IMPRESION ORDENADA POR PRECIO");
let carritoordenadoporprecio = carrito.slice().sort((a,b)=>a.precio -b.precio);
console.log(carritoordenadoporprecio);
console.log("IMPRESION ORDENADA POR NOMBREL");
let carritoordenadopornombre = carrito.slice().sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log(carritoordenadopornombre);

console.log("impresion ordenado por nombre")
carrito.sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log(carrito);
