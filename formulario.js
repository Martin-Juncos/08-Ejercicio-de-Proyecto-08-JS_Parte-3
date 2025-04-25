// Elementos principales del formulario
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const saludo = document.getElementById("saludo");

// Mostrar saludo personalizado en tiempo real
inputNombre.addEventListener("input", () => {
  saludo.textContent = inputNombre.value.trim()
    ? "Hola, " + inputNombre.value
    : "";
});

// Manejo del envío del formulario
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

// Motivos frecuentes de contacto (con LocalStorage)
let motivos = JSON.parse(localStorage.getItem("motivos")) || [
  "Consultas sobre proyectos",
  "Propuestas laborales",
  "Comentarios sobre el sitio",
];

// Elementos dinámicos de la sección de motivos
const listaMotivos = document.getElementById("motivos-contacto");
const nuevoMotivoInput = document.getElementById("nuevoMotivoInput");
const agregarMotivoBtn = document.getElementById("agregarMotivoBtn");

// Renderiza todos los motivos en la lista
function renderizarMotivos() {
  listaMotivos.innerHTML = "";
  motivos.forEach((motivo, index) => {
    const li = document.createElement("li");
    li.textContent = motivo;

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

// Guarda la lista en localStorage y actualiza la vista
function guardarMotivos() {
  localStorage.setItem("motivos", JSON.stringify(motivos));
  renderizarMotivos();
}

// Agrega un nuevo motivo desde el input
agregarMotivoBtn.addEventListener("click", () => {
  const nuevo = nuevoMotivoInput.value.trim();
  if (nuevo !== "") {
    motivos.push(nuevo);
    nuevoMotivoInput.value = "";
    guardarMotivos();
  }
});

// Al iniciar la página, renderizar la lista de motivos
renderizarMotivos();
