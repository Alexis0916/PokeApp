/* VARIABLES */
let eleccion;
let pokemon1 = "Squirtle";
let pokemon2 = "Bulbasaur";
let pokemon3 = "Chanmander";
let tipopokemon;
let poke;
let peleas;
let powers;
let resultadoFinal;
//Arrays
const firePowers = [
  "Bola De Fuego",
  "Lanza LLamas",
  "Calcinacion",
  "Puño de fuego",
];

const waterPowers = ["Pistola de agua", "Hidro Bomba", "Hidro Pulso", "Surf"];
const plantPowers = [
  "Rayo solar",
  "Latigo Cepa",
  "Hojas Navaja",
  "Veneno Paralizador",
];

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
labelElegir.classList.add("labelElegir", "label");
labelElegir.textContent = "Selecciona tu tipo de pokemon preferido ";
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

const divResultado = document.createElement("DIV");
divResultado.setAttribute("id", `divResultado`);


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

  btnGuardar.style.display = "none";
  inputNombre.setAttribute("disabled", "true");

  mainContent.appendChild(divElegir);
}

function elegirTipo() {
  eleccion = parseInt(selectElegir.value);
  console.log(eleccion);
  if (eleccion === 1) {
    poke = pokemon1;
    tipopokemon = "Agua";
  } else if (eleccion === 2) {
    poke = pokemon2;
    tipopokemon = "Planta";
  } else if (eleccion === 3) {
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
  button1.textContent = "continuar";
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

  button1.style.display = "none";

  const divNombrePoke = document.createElement("DIV");
  divNombrePoke.setAttribute("id", "divNombrePoke");
  mainContent.appendChild(divNombrePoke);

  const labelNombrePoke = document.createElement("LABEL");
  labelNombrePoke.setAttribute("for", "inputNombrePoke");
  labelNombrePoke.textContent = "Asignale un nombre de tu pokemon ";
  divNombrePoke.appendChild(labelNombrePoke);

  const inputNombrePoke = document.createElement("INPUT");
  inputNombrePoke.setAttribute("type", "text");
  inputNombrePoke.setAttribute("id", "inputNombrePoke");
  divNombrePoke.appendChild(inputNombrePoke);

  const buttonNombrePoke = document.createElement("BUTTON");
  buttonNombrePoke.setAttribute("id", "buttonNombrePoke");
  buttonNombrePoke.textContent = "Aceptar";
  divNombrePoke.appendChild(buttonNombrePoke);

  buttonNombrePoke.addEventListener("click", pedirBatallas);
}

/* divNombrePoke.style.display = "none" */
//powers

function asignarPowers() {
  if (eleccion === 1) {
    powers = randomElements(waterPowers, 3);
  } else if (eleccion === 2) {
    powers = randomElements(plantPowers, 3);
  } else if (eleccion === 3) {
    powers = randomElements(firePowers, 3);
  }

  let text = "<br>";

  console.log(powers);

  powers.forEach((power) => {
    text += power + "<br>";
  });

  return text;
}

function pedirBatallas() {
  const divbattle = document.createElement("DIV");
  divbattle.setAttribute("id", "divbattle");
  mainContent.appendChild(divbattle);

  const labelBatallas = document.createElement("LABEL");
  labelBatallas.setAttribute("for", "inputBatallas");
  labelBatallas.textContent = `¿Cuantas Batallas quieres que tu ${inputNombrePoke.value} luche ?`;
  divbattle.appendChild(labelBatallas);

  divNombrePoke.style.display = "none";

  const inputBatallas = document.createElement("INPUT");
  inputBatallas.setAttribute("type", "number");
  inputBatallas.setAttribute("id", "inputBatallas");
  divbattle.appendChild(inputBatallas);

  const buttonBatallas = document.createElement("BUTTON");
  buttonBatallas.setAttribute("id", "buttonBatallas");
  buttonBatallas.textContent = "Luchar";
  divbattle.appendChild(buttonBatallas);

  buttonBatallas.addEventListener("click", aleatorio);
}



function aleatorio() {
  peleas = inputBatallas.value;
  let result;


      mainContent.appendChild(divResultado);
      limpiarHtml(divResultado)


      for (let index = 0; index < peleas; index++) {
        result = resultBatalla();
        switch (result) {
          case 1:
            imprimirPantalla(index, 'Gano')
            console.log("Gano");
            break;
          case 2:
            imprimirPantalla(index, 'Perdio')
            console.log("Perdio");
            break;
        }
      }

}

function resultBatalla() {
  const result = Math.floor(Math.random() * 2) + 1;
  return result;
}



function imprimirPantalla(index, resultado){



  const pBattle = document.createElement("P");
  pBattle.setAttribute("id", `pBattle${index}`);
  pBattle.textContent = `Tu  ${inputNombrePoke.value}  ha  ${resultado} la batalla numero ${index + 1}`;
  divResultado.appendChild(pBattle);

  
}





//!Funcion para extraer un aleatorio de un array
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

//!limpiar html
function limpiarHtml(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
}
