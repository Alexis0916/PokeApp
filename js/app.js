

let eleccion = parseInt(
  prompt(
    "Digita el numero correspondiente a tu eleccion de tipo de pokemon: \n1: Agua\n2: Planta\n3: Fuego"
  )
);

let pokemon1 = "Squirtle";
let pokemon2 = "Bulbasaur";
let pokemon3 = "Chanmander";
let peleas;
let powers
const firePowers = ["Bola De Fuego", "Lanza LLamas", "Calcinacion", "Puño de fuego" ]
const waterPowers = ["Pistola de agua", "Hidro Bomba", "Hidro Pulso", "Surf"]
const plantPowers = ["Rayo solar", "Latigo Cepa", "Hojas Navaja", "Veneno Paralizador"]

//Objeto
const pokemon = {
  nombre : ''
}

//Asingar propiedad al key nombre
pokemon.nombre = prompt("Ingresa el nombre de tu pokemon")



function escribirPantalla(poke, clase, tipomsg, index,resultBatalla) {
  if (tipomsg === 1) {
    document.write(`El pokemon que seleccionaste de tipo ${clase} es: ${poke} <br>`);

    document.write(`El nombre de tu pokemon es: ${ pokemon.nombre} <br>` )

      if (eleccion === 1) {
        powers = randomElements(waterPowers,2)
      } else if (eleccion === 2){
        powers = randomElements(plantPowers,2)
      } else if (eleccion === 3){ 
        powers = randomElements(firePowers,2)
      }

  document.write("Los poderes asignados a tu pokemon son: <br>")
  for (let index = 0; index < powers.length; index++) {
    //Index = pocision del array
    document.write(`${powers[index]} <br>`)
    }
  }
  if (tipomsg === 2) {
    document.write( " Tu " + poke + " ha " + resultBatalla+ " la batalla numero: " + index + "<br>");
  }

}

function alerta(escogido, clase) {
  alert(`El pokemon que seleccionaste de tipo ${clase} es: ${escogido}`);
}

function pedirBatallas(poke) {
  let battle = parseInt(prompt(`¿Cuantas Batallas quieres que tu ${poke} luche ?`));
  return battle;
}
   
function aleatorio() {
  const result = Math.floor ( Math.random() *2 ) +1
   return result
 }


switch (eleccion) {
  case 1:
    alerta(pokemon1, "agua");
    escribirPantalla(pokemon1, "agua", 1);
    peleas = pedirBatallas(pokemon1);
    for (let index = 1; index <= peleas; index++) {
      const result = aleatorio()
      switch (result) {
        case 1:
          console.log(result)
          escribirPantalla(pokemon1, "agua", 2, index," ganado");
          break;
          case 2:
            console.log(result)
            escribirPantalla(pokemon1, "agua", 2, index," perdido");
            break;
      
      }

    }
    break;
  case 2:
    alerta(pokemon2, "planta");
    escribirPantalla(pokemon2, "planta", 1);
    peleas = pedirBatallas(pokemon2);
    for (let index = 1; index <= peleas; index++) {
      const result = aleatorio()
      switch (result) {
        case 1:
          console.log(result)
          escribirPantalla(pokemon1, "planta", 2, index," ganado");
          break;
          case 2:
            console.log(result)
            escribirPantalla(pokemon1, "planta", 2, index," perdido");
            break;
      
      }
    }
    break;
  case 3:
    alerta(pokemon3, "fuego");
    escribirPantalla(pokemon3, "fuego", 1);
    peleas = pedirBatallas(pokemon3);
    for (let index = 1; index <= peleas; index++) {
      const result = aleatorio()
      switch (result) {
        case 1:
          console.log(result)
          escribirPantalla(pokemon1, "fuego", 2, index," ganado");
          break;
          case 2:
            console.log(result)
            escribirPantalla(pokemon1, "fuego", 2, index," perdido");
            break;
      
      }
    }
    break;

  default:
    document.write("no hay pokemon disponible de ese tipo");
    break;

}  



//******************************* */
//Funcion para extraer un aleatorio
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function randomElements(array, quantity) {
return shuffleArray([...array]).slice(0, quantity);
}

//******************************* */



