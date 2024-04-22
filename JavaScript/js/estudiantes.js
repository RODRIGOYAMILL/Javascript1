/*
let Notas=[{nombre: 'Juan',nota:0},
{nombre: 'Julio',nota:0},
{nombre: 'Judas',nota:0},
{nombre: 'Jariel',nota:0},
{nombre: 'James',nota:0},
{nombre: 'Jorge',nota:0},
{nombre: 'Jeans',nota:0},
{nombre: 'Julian',nota:0},
{nombre: 'Jeremias',nota:0},
{nombre: 'Jane',nota:0}];
/*
let estudiantes = [
    { nombre: 'Juan', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'CarNe', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'FideO', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'CarNe', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'FideO', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'CarNe', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'FideO', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'CarNe', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'FideO', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'Papa', nota: Math.floor(Math.random() * 81) + 20 }
  ];
  
  console.log(estudiantes);
  
  let notas = estudiantes.map(estudiante => estudiante.nota);
  let notaMayor = Math.max(...notas);
  let notaMenor = Math.min(...notas);
  let promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;
  
  console.log("Nota mayor: " + notaMayor);
  console.log("Nota menor: " + notaMenor);
  console.log("Promedio: " + promedio);*/
/*
  let nombres = ['Juan', 'Carlos', 'Fernando', 'Carolina', 'Fidelia', 'Carmen', 'Fiona', 'Carmelo', 'Felipe', 'Pedro'];

  let estudiantes = nombres.map(nombre => ({
    nombre: nombre,
    nota: Math.floor(Math.random() * 81) + 20
  }));
  
  console.log(estudiantes);
  
  let notas = estudiantes.map(estudiante => estudiante.nota);
  let notaMayor = Math.max(...notas);
  let notaMenor = Math.min(...notas);
  let estudianteNotaMayor = estudiantes.find(estudiante => estudiante.nota === notaMayor);
  let estudianteNotaMenor = estudiantes.find(estudiante => estudiante.nota === notaMenor);
  let promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;
  
  console.log("Nota mayor: " + estudianteNotaMayor.nombre + " - " + notaMayor);
  console.log("Nota menor: " + estudianteNotaMenor.nombre + " - " + notaMenor);
  console.log("Promedio: " + promedio);


  */

/*listar las notas
Insuficientes:[2,4]
Suficiente:[5,6]
Bien:[7,8]
Notable:[9]
Sobresaliente:[10]
*/ 

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
  
  // Generar notas aleatorias entre 20 y 100
  function cargarNotas(){
  Notas = Notas.map(nota => ({ ...nota, nota: Math.floor(Math.random() * (10 - 2 + 1)) + 2 }));
  }
  
  // Calcular nota mayor, menor y promedio
  let sumaNotas = Notas.reduce((suma, nota) => suma + nota.nota, 0);
 /* 
  let notaMayor = Math.max(...Notas.map(nota => nota.nota));
  let notaMenor = Math.min(...Notas.map(nota => nota.nota));
  let promedio = sumaNotas / Notas.length;
  
  // Obtener objeto de la persona con la mayor nota
  let personaMayorNota = Notas.find(nota => nota.nota === notaMayor);
  
  // Obtener objeto de la persona con la menor nota
  let personaMenorNota = Notas.find(nota => nota.nota === notaMenor);
  
  
  console.log('La nota mayor es de:', personaMayorNota.nota, 'de', personaMayorNota.nombre);
  console.log('La nota menor es de:',personaMenorNota.nota , 'de', personaMenorNota.nombre);
  console.log('Promedio:', promedio);
*/
console.log('Notas:', Notas);


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


/* 
Notas.forEach(nota=>{
  let $clasificar;
  switch(nota.nota){
    case 2: case 3: case 4:
      $clasificar="Insuficiente";
      break;
    case 5: case 6:
      $clasificar="Suficiente";
      break;
      case 7: case 8:
        $clasificar="Bien";
        break;
        case 9:
          $clasificar="Notable";
          break;
          case 10: 
          $clasificar="Sobresaliente";
          break;
          default:
            $clasificar="Fuera de rango";
  } 
  console.log(nota.nombre+"-"+nota.nota+":"+$clasificar+"\n");
});
*/