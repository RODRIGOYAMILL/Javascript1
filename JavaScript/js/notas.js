let Notas = [
    { nombre: 'Juan', nota: 0 },
    { nombre: 'Julio', nota: 0 },
    { nombre: 'Judas', nota: 0 },
    { nombre: 'Jariel', nota: 0 },
    { nombre: 'James', nota: 0 },
    { nombre: 'Jorge', nota: 0 },
    { nombre: 'Jeans', nota: 0 },
    { nombre: 'Julian', nota: 0 },
    { nombre: 'Jeremias', nota: 0 },
    { nombre: 'Jane', nota: 0 }
  ];
  
  // Generar notas aleatorias entre 2 y 10
  function cargarNotas(){
    Notas = Notas.map(nota => ({ ...nota, nota: Math.floor(Math.random() * (10 - 2 + 1)) + 2 }));
    }
  console.log('Notas:', Notas);

//funcion clasificar notas
function fclasificar(nota) {
  let $clasificar;
  switch (nota) {
    case 2:
    case 3:
    case 4:
      $clasificar = "Insuficiente";
      break;
    case 5:
    case 6:
      $clasificar = "Suficiente";
      break;
    case 7:
    case 8:
      $clasificar = "Bien";
      break;
    case 9:
      $clasificar = "Notable";
      break;
    case 10:
      $clasificar = "Sobresaliente";
      break;
    default:
      $clasificar = "Fuera de rango";
  }
  return $clasificar;
}




function impNotas(){
Notas.forEach(nota=>{
  console.log(nota.nombre+"-"+nota.nota+":"+fclasificar(nota.nota)+"\n");
});
}
cargarNotas();
impNotas();