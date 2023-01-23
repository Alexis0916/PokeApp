let eleccion = parseInt(
  prompt(
    "Digita el numero correspondiente a tu eleccion de tipo de pokemon: \n1: Agua\n2: Planta\n3: Fuego"
  )
);
let pokemon1 = "Squirtle";
let pokemon2 = "Bulbasaur";
let pokemon3 = "Chanmander";
let peleas;


 if (eleccion === "agua") {
  console.log("el pokemon de agua es: " + pokemon1);
} else if (eleccion === "planta") {
  console.log("el pokemon de planta es: " + pokemon2);
} else if (eleccion === "fuego") {
  console.log("el pokemon de fuego es: " + pokemon3);
} else {
  console.log("no hay pokemon disponible de ese tipo");
} 

function escribirPantalla(poke, clase, tipomsg, index,resultBatalla) {
  if (tipomsg === 1) {
    document.write(
      `El pokemon que seleccionaste de tipo ${clase} es: ${poke} <br>`
    );
  }
  if (tipomsg === 2) {
    document.write(
      " Tu " + poke + " ha " + resultBatalla+ " la batalla numero: " + index + "<br>");
  }

}

function alerta(escogido, clase) {
  alert(`El pokemon que seleccionaste de tipo ${clase} es: ${escogido}`);
}

function pedirBatallas(poke) {
  let battle = parseInt(
    prompt(`¿Cuantas Batallas quieres que tu ${poke} luche ?`)
  );
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
          escribirPantalla(pokemon1, "agua", 2, index," ganado");
          break;
          case 2:
            console.log(result)
            escribirPantalla(pokemon1, "agua", 2, index," perdido");
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
          escribirPantalla(pokemon1, "agua", 2, index," ganado");
          break;
          case 2:
            console.log(result)
            escribirPantalla(pokemon1, "agua", 2, index," perdido");
            break;
      
      }
    }
    break;

  default:
    document.write("no hay pokemon disponible de ese tipo");
    break;

}  




