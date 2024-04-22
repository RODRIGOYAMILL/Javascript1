/*Descripción:ejemplo de variables
Desarrollador:Rodrigo Yamill Rdoriguez Avila
Fecha:2024-04-16
Cambios:ninguno
*/ 
/*
const INTERVALO=10;

console.log("Intervalo sera de"+INTERVALO+"minutos");
//INTERVALO=15 //no se permite por ser constante
/*
var Intervalo=15
console.log("Intervalo sera de"+Intervalo+"minutos con una variable");
Intervalo=20
console.log("Intervalo sera de"+Intervalo+"minutos con una variable modificada");
*/


/*
let varb= true;//booleano
let varn= 3.141592;//numerico
let vars= "texto string";//cadena
let var1;//indefinido
console.log("para la variable varb="+varb+" con el tipo dato="+typeof varb);
console.log("para la variable varb="+varn+" con el tipo dato="+typeof varn);
console.log("para la variable varb="+vars+" con el tipo dato="+typeof vars);
console.log("para la variable varb="+var1+" con el tipo dato="+typeof var1);
var1= vars;
console.log("para la variable varb="+var1+" con el tipo dato="+typeof var1)
*/








//Realizar las siguientes conversiones implicitas.
let var1=15.25;
let var2=0;
let var3=true;
let var4="100";
let resultado;
/*varx =var2;// colocar comentario


console. log("Para la variable varl="+var1+" con el tipo dato="+typeof varx);

varx=var3;//Colocar comentario

console. log("Para la variable var1="+var2+" con el tipo dato="+typeof varx);

varx=var4;//Colocar comentario

console. log("Para la variable varl="+var3+" con el tipo dato="+typeof varx);
*/

//Conversiones explicitas.
resultado=var1+var2;
console.log("para la var1= "+resultado+"con el tipo de dato= "+typeof resultado);
resultado=Boolean(var2)+var3;
console.log("para la var1= "+resultado+"con el tipo de dato= "+typeof resultado);
resultado=var1+Number(var4);
console.log("para la var1= "+resultado+"con el tipo de dato= "+typeof resultado);