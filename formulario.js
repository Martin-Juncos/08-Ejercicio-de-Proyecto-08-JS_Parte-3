const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const saludo = document.getElementById("saludo");
const listaMotivos = document.getElementById("motivos-contacto");

inputNombre.addEventListener("input", () => {
  saludo.textContent = inputNombre.value.trim()
    ? "Hola, " + inputNombre.value
    : "";
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    saludo.textContent =
      "Por favor, escribí tu nombre antes de enviar el mensaje.";
  } else {
    saludo.textContent =
      "Gracias por tu mensaje, " + nombre + ". Pronto te responderemos.";
  }
});

let motivos = JSON.parse(localStorage.getItem("motivos")) || [
  "Consultas sobre proyectos",
  "Propuestas laborales",
  "Comentarios sobre el sitio",
];

function renderizarMotivos() {
  listaMotivos.innerHTML = "";
  motivos.forEach((motivo, index) => {
    const li = document.createElement("li");
    li.innerText = motivo;

    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.addEventListener("click", () => {
      motivos.splice(index, 1);
      guardarMotivos();
    });

    li.appendChild(btn);
    listaMotivos.appendChild(li);
  });
}

function guardarMotivos() {
  localStorage.setItem("motivos", JSON.stringify(motivos));
  renderizarMotivos();
}

const nuevoMotivoInput = document.createElement("input");
nuevoMotivoInput.placeholder = "Agregar motivo";
const agregarMotivoBtn = document.createElement("button");
agregarMotivoBtn.textContent = "Agregar motivo";

listaMotivos.parentElement.insertBefore(nuevoMotivoInput, listaMotivos);
listaMotivos.parentElement.insertBefore(agregarMotivoBtn, listaMotivos);

agregarMotivoBtn.addEventListener("click", () => {
  const texto = nuevoMotivoInput.value.trim();
  if (texto !== "") {
    motivos.push(texto);
    nuevoMotivoInput.value = "";
    guardarMotivos();
  }
});

renderizarMotivos();
