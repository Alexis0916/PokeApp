/* VARIABLES */
let eleccion;
let pokemon1 = "Squirtle";
let pokemon2 = "Bulbasaur";
let pokemon3 = "Charmander";
let tipopokemon;
let poke;
let peleas;
let powers;
let resultadoFinal;
let eleccionapi;
let imgpokeapi;

let resumeBatles = {
  total: 0,
  wins: 0,
  loses: 0,
}


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
divElegir.classList.add("box_container", "box_shadow_container");
divElegir.setAttribute("id", "divElegir");

const labelElegir = document.createElement("LABEL");
labelElegir.setAttribute("for", "inputElegir");
labelElegir.classList.add("question");
labelElegir.textContent = "Selecciona tu tipo de pokemon preferido ";
divElegir.appendChild(labelElegir);

const selectElegir = document.createElement("SELECT");
selectElegir.setAttribute("id", "inputElegir");
selectElegir.classList.add("form-control" , "input_select");
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
buttonElegir.classList.add("btn", "btn-warning", "mb-2", "mt-2");
buttonElegir.textContent = "Elegir";
divElegir.appendChild(buttonElegir);

const divResultado = document.createElement("DIV");
divResultado.setAttribute("id", `divResultado`);
divResultado.classList.add("box_container", "box_shadow_container");

/* EVENTOS */
/* EVENTO SELECCION DE TIPO */
btnGuardar.addEventListener("click", preguntarNombre);
buttonElegir.addEventListener("click", elegirTipo);

/* FUNCIONES */
function preguntarNombre(){
  sweetAlert(`¿Estas seguro de guardar el nombre ${inputNombre.value}?`, guardarNombre);
}

function guardarNombre() {
  const h2Saludo = document.createElement("H2");
  h2Saludo.textContent = `Hola maestro Pokemon `;
  h2Saludo.classList.add("text-center", "mt-2", "text-uppercase");
  const spanSaludo = document.createElement("SPAN");
  spanSaludo.textContent = inputNombre.value;
  spanSaludo.classList.add("fw-bold");
  h2Saludo.appendChild(spanSaludo);


  mainContent.appendChild(h2Saludo);
  localStorage.setItem("username", JSON.stringify(inputNombre.value));

  btnGuardar.style.display = "none";
  inputNombre.setAttribute("disabled", "true");

  mainContent.appendChild(divElegir);
}

async function elegirTipo() {

    eleccion = parseInt(selectElegir.value);
    if (eleccion === 1) {
      poke = pokemon1;
      tipopokemon = "Agua";
      eleccionapi = await getDataFetch(pokemon1) 
      imgpokeapi = eleccionapi.sprites.front_default;
    } else if (eleccion === 2) {
      poke = pokemon2;
      tipopokemon = "Planta";
      eleccionapi = await getDataFetch(pokemon2)
      imgpokeapi = eleccionapi.sprites.front_default;
    } else if (eleccion === 3) {
      poke = pokemon3;
      tipopokemon = "Fuego";
      eleccionapi = await getDataFetch(pokemon3)
      imgpokeapi = eleccionapi.sprites.front_default;
  }

  const divmensaje1 = document.createElement("DIV");
  divmensaje1.setAttribute("id", "divmensaje1");
  divmensaje1.classList.add("box_container" , "box_shadow_container");
  mainContent.appendChild(divmensaje1);

  const tipomsg1 = document.createElement("P");
  tipomsg1.classList.add("text-center", "mt-2", "text-uppercase");
  if (eleccion === 1) {
    tipomsg1.innerHTML = `El pokemon que seleccionaste de tipo: <span class="fw-bold water_type">${tipopokemon}</span> es: <span class="fw-bold water_type">${poke}</span>`;
  } else if (eleccion === 2) {
    tipomsg1.innerHTML = `El pokemon que seleccionaste de tipo: <span class="fw-bold grass_type">${tipopokemon}</span> es: <span class="fw-bold grass_type">${poke}</span>`;
  } else if (eleccion === 3) {
    tipomsg1.innerHTML = `El pokemon que seleccionaste de tipo: <span class="fw-bold fire_type">${tipopokemon}</span> es: <span class="fw-bold fire_type">${poke}</span>`;
  }


  divmensaje1.appendChild(tipomsg1);

  const divImg = document.createElement("DIV");
  divImg.setAttribute("id", "divImg");
  divmensaje1.appendChild(divImg);

  const imgpoke = document.createElement("IMG");
  imgpoke.setAttribute("id", "imgpoke");
  imgpoke.setAttribute("src", imgpokeapi);
  imgpoke.setAttribute("width", "150px");
  divImg.appendChild(imgpoke);

  console.log("imgpoke", imgpokeapi);

  divElegir.style.display = "none";

  const divbutton1 = document.createElement("DIV");
  divbutton1.setAttribute("id", "divbutton1");
  divmensaje1.appendChild(divbutton1);

  const button1 = document.createElement("BUTTON");
  button1.setAttribute("id", "button1");
  button1.textContent = "continuar";
  button1.classList.add("btn", "btn-warning", "mb-2", "mt-2");
  divbutton1.appendChild(button1);

  button1.addEventListener("click", tipomsg2);

  
}

function tipomsg2() {
  console.log("eleccionapi", eleccionapi);
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
  divNombrePoke.classList.add("box_container" , "box_shadow_container");
  mainContent.appendChild(divNombrePoke);

  const labelNombrePoke = document.createElement("LABEL");
  labelNombrePoke.setAttribute("for", "inputNombrePoke");
  labelNombrePoke.textContent = "Asignale un nombre de tu pokemon ";
  divNombrePoke.appendChild(labelNombrePoke);

  const inputNombrePoke = document.createElement("INPUT");
  inputNombrePoke.setAttribute("type", "text");
  inputNombrePoke.setAttribute("id", "inputNombrePoke");
  inputNombrePoke.setAttribute("placeholder", "Nombre");
  inputNombrePoke.classList.add("input" , "form-control");
  divNombrePoke.appendChild(inputNombrePoke);

  const buttonNombrePoke = document.createElement("BUTTON");
  buttonNombrePoke.setAttribute("id", "buttonNombrePoke");
  buttonNombrePoke.classList.add("btn", "btn-warning", "mb-2", "mt-2");
  buttonNombrePoke.textContent = "Aceptar";
  divNombrePoke.appendChild(buttonNombrePoke);

  buttonNombrePoke.addEventListener("click", guardarNombrePokemon);
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

function guardarNombrePokemon() {
   sweetAlert(`Quieres confirmar ${inputNombrePoke.value} como el nombre para tu pokemon?`, pedirBatallas);
}

function pedirBatallas() {
  const divbattle = document.createElement("DIV");
  divbattle.setAttribute("id", "divbattle");
  divbattle.classList.add("box_container" , "box_shadow_container");
  mainContent.appendChild(divbattle);

  const labelBatallas = document.createElement("LABEL");
  labelBatallas.setAttribute("for", "inputBatallas");
  labelBatallas.classList.add("question");
  labelBatallas.innerHTML = `¿Cuantas Batallas quieres que tu <span class="fw-bold">${inputNombrePoke.value}</span> luche?`;
  divbattle.appendChild(labelBatallas);

  divNombrePoke.style.display = "none";

  const inputBatallas = document.createElement("INPUT");
  inputBatallas.setAttribute("type", "number");
  inputBatallas.setAttribute("min", "1");
  inputBatallas.setAttribute("max", "10");
  inputBatallas.setAttribute("placeholder", "Batallas");
  inputBatallas.classList.add("input" , "form-control");
  inputBatallas.setAttribute("id", "inputBatallas");
  divbattle.appendChild(inputBatallas);

  const buttonBatallas = document.createElement("BUTTON");
  buttonBatallas.setAttribute("id", "buttonBatallas");
  buttonBatallas.classList.add("btn", "btn-warning", "mb-2", "mt-2");
  buttonBatallas.textContent = "Luchar";
  divbattle.appendChild(buttonBatallas);

  buttonBatallas.addEventListener("click", aleatorio);
}

function aleatorio() {
  peleas = inputBatallas.value;
  resumeBatles.total = peleas;

  console.log("resumeBatles", resumeBatles);
  let result;

  mainContent.appendChild(divResultado);
  limpiarHtml(divResultado);

  for (let index = 0; index < peleas; index++) {
    result = resultBatalla();
    switch (result) {
      case 1:
        imprimirPantalla(index, "Ganado" , result);
        resumeBatles.wins++;
        break;
      case 2:
        imprimirPantalla(index, "Perdido" , result);
        resumeBatles.loses++;
        break;
    }
  }

  console.log("resumeBatles", resumeBatles);
}

function resultBatalla() {
  const result = Math.floor(Math.random() * 2) + 1;
  return result;
}

function imprimirPantalla(index, resultado, result) {
  const pBattle = document.createElement("P");
  pBattle.setAttribute("id", `pBattle${index}`);
  pBattle.innerHTML = `<hr><hr>
    ${result === 1 ? "✔" : "❌"   } <br>
    Tu <span class="fw-bold">${inputNombrePoke.value}</span> ha ${resultado} la batalla numero ${index + 1}
  `;
  if (result === 1) {
    pBattle.classList.add("win");
  } else {
    pBattle.classList.add("lose");
  }

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

async function getDataFetch(namePokemon) {
  const fetchData = fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return fetchData;
}

/* title: `¿Estas seguro de guardar el nombre ${inputNombre.value}?`, */


function sweetAlert(titulo, funcion) {
  Swal.fire({
    title: titulo,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    denyButtonText: `No guardar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      funcion();
      return;
    } 
    return;
  })
}