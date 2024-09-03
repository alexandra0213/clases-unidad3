/* let nums = [2,3,4,5,6,7,8,9,10]
console.log(nums)

let numsPordos= nums.map((n) => n * 2);

console.log (numsPordos);
console.log (nums)

let letras = ["z","H","c","W","P"]
let sobreMayusculas = letras.map ((c) => c.toUpperCase() == c );
console.log(sobreMayusculas)


// 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondrá "palabra corta"
let palabras = [
    "hola",
    "computadora",
    "casa",
    "programacion",
    "javascript",
    "ciclo",
  ];
  console.log(palabras)
  let tamañoPalabra = letras.map (palabra => palabra.length > 7 ? "palabra larga" : "palabra corta");
  console.log(sobreMayusculas)*/


  const nums = [1,2,3,4,5,6,7,8]
  console.log(nums)

  let suma = nums.reduce ((a,b) => a + b,0);
  console.log (suma)



  let multiplicacion= nums.reduce ((a,b) => a * b,1);
  console.log (multiplicacion);


  let puntos= [11,2,21,1,3];
  console.log(puntos);
  puntos.sort();
  console.log(puntos)
  puntos.sort((a,b) => a-b);
  console.log(puntos);

