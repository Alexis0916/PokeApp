/* VARIABLES */
let eleccion;
let pokemon1 = "Squirtle";
let pokemon2 = "Bulbasaur";
let pokemon3 = "Chanmander";
let tipopokemon;
let poke;
let peleas;
let powers;
const firePowers = [ "Bola De Fuego",  "Lanza LLamas", "Calcinacion",  "Puño de fuego",];
const waterPowers = ["Pistola de agua", "Hidro Bomba", "Hidro Pulso", "Surf"];
const plantPowers = [  "Rayo solar",  "Latigo Cepa",  "Hojas Navaja",  "Veneno Paralizador",];

//Objeto
const pokemon = {
  nombre: "",
};


const inputNombre = document.querySelector("#inputNombre");
const btnGuardar = document.querySelector("#btnGuardar");
const mainContent = document.querySelector("#mainContent");



const divElegir = document.createElement("DIV");
divElegir.setAttribute("id", "divElegir");

const labelElegir = document.createElement("LABEL");
labelElegir.setAttribute("for", "inputElegir");
labelElegir.textContent = "Digita el numero correspondiente a tu eleccion de tipo de pokemon: ";
divElegir.appendChild(labelElegir);

const selectElegir = document.createElement("SELECT");
selectElegir.setAttribute("id", "inputElegir");
divElegir.appendChild(selectElegir);

const optionElegir1 = document.createElement("OPTION");
optionElegir1.setAttribute("value", "1");
optionElegir1.textContent = "Agua";
selectElegir.appendChild(optionElegir1);

const optionElegir2 = document.createElement("OPTION");
optionElegir2.setAttribute("value", "2");
optionElegir2.textContent = "Planta";
selectElegir.appendChild(optionElegir2);

const optionElegir3 = document.createElement("OPTION");
optionElegir3.setAttribute("value", "3");
optionElegir3.textContent = "Fuego";
selectElegir.appendChild(optionElegir3);


const buttonElegir = document.createElement("BUTTON");
buttonElegir.setAttribute("id", "buttonElegir");
buttonElegir.textContent = "Elegir";
divElegir.appendChild(buttonElegir);







/* EVENTOS */
/* EVENTO SELECCION DE TIPO */
btnGuardar.addEventListener("click", guardarNombre);
buttonElegir.addEventListener("click", elegirTipo);



/* FUNCIONES */
function guardarNombre() {
  const h2Saludo = document.createElement("H2");
  h2Saludo.textContent = `Hola maestro Pokemon ${inputNombre.value}`;
  mainContent.appendChild(h2Saludo);
  localStorage.setItem("username", JSON.stringify(inputNombre.value));
  
  btnGuardar.style.display = "none"
  inputNombre.setAttribute("disabled", "true");

  mainContent.appendChild(divElegir);
}



function elegirTipo() {
    eleccion = parseInt(selectElegir.value);
    console.log(eleccion);
    if (eleccion === 1) {
      poke = pokemon1;
      tipopokemon = "Agua";;
    }
    else if (eleccion === 2) {
      poke = pokemon2;
    tipopokemon = "Planta";
    }
    else if (eleccion === 3) {
      poke = pokemon3;
      tipopokemon = "Fuego";
    }

    const divmensaje1 = document.createElement("DIV");
    divmensaje1.setAttribute("id", "divmensaje1");
    mainContent.appendChild(divmensaje1);

    const tipomsg1 = document.createElement("P");
    tipomsg1.setAttribute("class", "tipomsg1");
    tipomsg1.textContent = `El pokemon que seleccionaste de tipo: ${tipopokemon} es: ${poke}`;

    divmensaje1.appendChild(tipomsg1);



    divElegir.style.display = "none";

    const divbutton1 = document.createElement("DIV");
    divbutton1.setAttribute("id", "divbutton1");
    mainContent.appendChild(divbutton1);


    const button1 = document.createElement("BUTTON");
    button1.setAttribute("id", "button1");
    button1.textContent = "Aceptar";
    divbutton1.appendChild(button1);

    button1.addEventListener("click", tipomsg2);
}



function tipomsg2() {

    const divmensaje2 = document.createElement("DIV");
    divmensaje2.setAttribute("id", "divmensaje2");
    mainContent.appendChild(divmensaje2);

    const tipomsg2 = document.createElement("label");
    tipomsg2.setAttribute("class", "tipomsg2");
    tipomsg2.innerHTML = `Los poderes asignados a tu pokemon  son ${asignarPowers()}`;
    divmensaje1.appendChild(tipomsg2);

    divElegir.style.display = "none";


    const divNombrePoke = document.createElement("DIV");
    divNombrePoke.setAttribute("id", "divNombrePoke");
    mainContent.appendChild(divNombrePoke);

    const labelNombrePoke = document.createElement("LABEL");
    labelNombrePoke.setAttribute("for", "inputNombrePoke");
    labelNombrePoke.textContent = "Digita el nombre de tu pokemon";
    divNombrePoke.appendChild(labelNombrePoke);

    const inputNombrePoke = document.createElement("INPUT");
    inputNombrePoke.setAttribute("type", "text");
    inputNombrePoke.setAttribute("id", "inputNombrePoke");
    divNombrePoke.appendChild(inputNombrePoke);

    const buttonNombrePoke = document.createElement("BUTTON");
    buttonNombrePoke.setAttribute("id", "buttonNombrePoke");
    buttonNombrePoke.textContent = "Aceptar";
    divNombrePoke.appendChild(buttonNombrePoke);

}




function asignarPowers() {
    if (eleccion === 1) {
      powers = randomElements(waterPowers, 3);
    } else if (eleccion === 2) {
      powers = randomElements(plantPowers, 3);
    } else if (eleccion === 3) {
      powers = randomElements(firePowers, 3);
    }

    /* document.write("Los poderes asignados a tu pokemon son: <br>"); */
    let text = "<br>";

    console.log(powers);

    powers.forEach((power) => {
      text += power + "<br>";
    });

    return text;
}





/* function tipomsg1() { 
  const tipomsg1 = document.createElement("P");
  tipomsg1.textContent = 'El pokemon que seleccionaste de tipo: eleccion.value es:  eleccion.value   <br> ';
  const divNombrePokemon = document.createElement("DIV");
  divNombrePokemon.setAttribute("id", "divNombrePokemon");
  divNombrePokemon.appendChild(tipomsg1);
  mainContent.appendChild(divNombrePokemon);

} */






/*


function escribirPantalla(poke, clase, tipomsg, index, resultBatalla) {
  if (tipomsg === 1) {



    
    
  }
  if (tipomsg === 2) {
    document.write(
      " Tu " +
        poke +
        " ha " +
        resultBatalla +
        " la batalla numero: " +
        index +
        "<br>"
    );
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
  const result = Math.floor(Math.random() * 2) + 1;
  return result;
}

switch (eleccion) {
  case 1:
    alerta(pokemon1, "agua");
    escribirPantalla(pokemon1, "agua", 1);
    peleas = pedirBatallas(pokemon1);
    for (let index = 1; index <= peleas; index++) {
      const result = aleatorio();
      switch (result) {
        case 1:
          console.log(result);
          escribirPantalla(pokemon1, "agua", 2, index, " ganado");
          break;
        case 2:
          console.log(result);
          escribirPantalla(pokemon1, "agua", 2, index, " perdido");
          break;
      }
    }
    break;
  case 2:
    alerta(pokemon2, "planta");
    escribirPantalla(pokemon2, "planta", 1);
    peleas = pedirBatallas(pokemon2);
    for (let index = 1; index <= peleas; index++) {
      const result = aleatorio();
      switch (result) {
        case 1:
          console.log(result);
          escribirPantalla(pokemon1, "planta", 2, index, " ganado");
          break;
        case 2:
          console.log(result);
          escribirPantalla(pokemon1, "planta", 2, index, " perdido");
          break;
      }
    }
    break;
  case 3:
    alerta(pokemon3, "fuego");
    escribirPantalla(pokemon3, "fuego", 1);
    peleas = pedirBatallas(pokemon3);
    for (let index = 1; index <= peleas; index++) {
      const result = aleatorio();
      switch (result) {
        case 1:
          console.log(result);
          escribirPantalla(pokemon1, "fuego", 2, index, " ganado");
          break;
        case 2:
          console.log(result);
          escribirPantalla(pokemon1, "fuego", 2, index, " perdido");
          break;
      }
    }
    break;

  default:
    document.write("no hay pokemon disponible de ese tipo");
    break;
}
 */
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


//limpiar html
function limpiarHtml(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
}