/*Atributo= setAtribute() - dentro de los parencesis se pasan dos valores, 
el primero corresponde al nombre del atributo y el segundo el valor que recide hay.
*/

/*Propiedad= classList = (clase - lista), permite agregar estilos a los elementos 
html o a los elementos creados desde javaScript de una forma distinta a como se hace
con la propiedad Style ya que classList cuenta con sus propios metodos.

los metodos son: 
                - classList.add() = añade una clase a la lista de clases del elemento.
                - classList.remove() = remueve o eliminar una clase de la lista de clases que tenga el elemento.
                -classList.toggle() = palanca, alternar una clase de la lista de clases del elemento.
                -classList.contains() = determinar si la clase esta contenida o esta presente o existe en la calse de lista del elemento.

Cada uno de los metodos hace cosas distintas  
*/
//AÑADIR
//const $titulo = document.getElementById("titulo");
//console.log($titulo);
//$titulo.classList.add("mt-5"); 

//REMOVER
//$titulo.classList.remove("bg-dark");

//ALTERNAR EL COLOR DE TEXTO
//$titulo.classList.toggle("text-warning"); //aqui la quito
//$titulo.classList.toggle("text-warning");//al no estar la clase la agrega nuevamente.

/*$titulo.addEventListener("click", ()=>{
    $titulo.classList.toggle("text-warning");

});*/

//¿clase existe o no?
//console.log($titulo.classList.contains("bg-dark"));

/*Propiedad= Style =  tiene como propiedades las propiedades de css como por ejemplo
- background.
- border.
- text-Aling.
- list-Style-lmage.
No se pueden escribir las propiedades asi entonces a las propiedades que estan compuestas
por mas de dos palabras se les aplica escritura CAMELCASE
*/
//const $titulo = document.getElementById("titulo");
//console.log($titulo);

//se le agrega un color de fondo
/* en el lado izquierdo vamos a colocar el nombre del elemento al cual se le quiere
agregar estilo, luego agregamos un punto seguido de la propiedad "style", luego otro 
punto y en frente se coloca la "propiedadCSS", simbolo de asignacion seguido de la 
asigancion de una valor, los valores van en comillas dobles o sencillas.

elemento.style.propiedadCSS = "valor"

*/
//$titulo.style.backgroundColor = "yellow";
//añadimos otra propiedad por ejemplo "border-left"
//$titulo.style.borderLeft = "4px solid brown";
//agregamos un padding left
//$titulo.style.paddingLeft = "1rem";

/*DOM TRAVERSING (atravesar)
si queremos saber el nombre del hermano siguiente del elemento del cual tenemos referencia.
nextElementSibling = que significa(sigueinte elemento hermano)

si quisieramos saber el nombre del hermano anterior del cual tenemos referencia.
 previousElementSibling (anterior elemento hermano)

si queremos saber el nombre del elemento padre del elemento que tenemos referencia.
parentElement (padre "mama y papa", elemento)

si queremos saber el nombre del elemento abuelo del elemento que tenemos referencia.
parentElement.parentElement (el primero hace referencia a los papas y el segundo a los abuelos).
*/
//const $hijoDaniel = document.getElementById('hijodaniel');
//console.log($hijoDaniel);

//nombre del hermano anterior
//console.log($hijoDaniel.previousElementSibling);

//nombre del hermano siguiente
//console.log($hijoDaniel.nextElementSibling);

//nombre del padre
//console.log($hijoDaniel.parentElement);

//nombre del abuelos
//console.log($hijoDaniel.parentElement.parentElement);

//si quiero que me aparezca en consola solo el valor de id despues de la propiedad .getAttribute('id')

/*CUANTOS Y CUALES SON LOS HIJOS DE UN ELEMENTO PADRE
    -children = quines son los hijos directos del elemento padre.
    -firtElementChild (primero elemento hijo) saber quien es el primer elemento hijo.
    -lastElementChild (ultimo elemento hijo) saber cual es el ultimo elemento hijo.
    -childrenElementcount (hijos elemento contar) contar el numero de hijos que tiene el elemento padre.*/
    //const $papa = document.getElementById ("padre");
   
    //quienes son sus elementos hijos directos
    //console.log($papa.children);
    //primer hijo
    //console.log($papa.firstElementChild);
    //cuantos hijos tiene el elemento
   // console.log($papa.childElementCount);
    //ultimo hijo
    //console.log($papa.lastElementChild);
    

/*COMO ACCEDER A LOS NODOS DESDE JAVASCRIPS
Son todos los elementos incluidos atributos, comentarios y saltos de linea dentro
de un archivo html. se puede acceder de diferentes formas : 
-por medio del nombre de la etiqueta.
-o por su valor id.
-mediante su nombre de clase.

//ACCEDER POR ETIQUETA
document.getElementsByTagName() = en los parentesis el nombre de la etiqueta, 
get significa obtener
by = por
tag = etiqueta
    */

//let anclas = document.getElementsByTagName("a");
//console.log(anclas);

//para convertirlo en un array
//let anclas = Array.from(document.getElementsByTagName("a"));
//console.log(anclas);

//para saber si es un array o no
//console.log(Array.isArray(anclas));

//para recorrer el array
/*for (ancla in anclas){
    console.log(anclas[ancla]);
}*/

/* OTRA FORMA DE ACCEDER  A LOS ELEMENTOS HTML ES MEDIANTE SU NOMBRE DE CLASE
SE UTILIZA EL METODO "GETELEMENTSBYCLASSNAME()" DESPUES DEL NOMBRE SE AGREGAN UNOS 
PARENCESIS Y DENTRO EL NOMBRE DE LA CLASE QUE TENGAN LOS ELEMENTOS A LOS QUE SE
QUIERE ACCEDER

SU FUNCION ES OPTENEER LOS ELEMENTOS POR EL NOMBRE DE LA CLASE QUE NOSOTROS 
INDIQUEMOS DENTRO DEL PARENTESIS QUIERE DECIR QUE SI ENCUENTRA MAS DE UN ELEMNTO
CON ESTA CLASE LOS VA A DEVOLVER EN UNA LISTA.
*/

/*let anclasClass = document.getElementsByClassName('nav__link');
console.log(anclasClass);*/

/*OTRA FORMA DE ACCEDER A UN ELEMENTO HTML ES UTILIZANDO SU NOMBRE DE ID EL METODO
SERIA "GETELEMENTSBYCLASSID()" SEGUIDO DEL NOMBRE DEL ID ENTRE LOS PARENTESIS "ID 
HACE REFERENCIA AL ATRIBUTO ID" VA A REGRESAR UN SOLO ELEMENTO */

/*let anclarinicio = document.getElementById("inicio");
console.log(anclarinicio);*/

//los id deben de ser unicos no se deben de repetir 

let anclarInicio = document.getElementById("inicio");
console.log(anclarInicio);
console.log(portafolio);
console.log(contactos);

/*EL NOMBRE DE LA VARIABLES QUE GUARDEN UN ELEMENTO HTML POR CONVERSION SE ACOSTUMBRA
A ESCRIBIR ANTES DEL NOMBRE DE LA VARIABLE EL SIGNO PESOS $, CUANDO SE ESTE LEYENDO
CDIGO JAVAS AJENO Y EL NOMBRE DE LA VARIABLE INICIE CON EL SIMBOLO DE PESOS QUIERE
DECIR QUE ESA VARIABLE GUARDA UN ELEMENTO HTML*/

VER VIDEO 7