# Proyecto Portafolio Personal – Clase 08

## Objetivo de la clase

Aplicar conceptos avanzados de JavaScript vistos en esta clase, incluyendo:

- Manipulación dinámica del DOM (crear, insertar y eliminar nodos)
- Asignación de eventos a elementos generados con JavaScript
- Buenas prácticas en funciones reutilizables y estructura del código
- Uso de LocalStorage para guardar y recuperar datos de forma persistente

---

## Páginas trabajadas

### ✅ index.html

**Sección: Lenguajes que manejo**

- Se agregó un input y botón para permitir al usuario **agregar nuevos lenguajes**.
- Cada nuevo lenguaje aparece en la lista junto a un botón para **eliminarlo individualmente**.
- Se utilizó `createElement`, `appendChild`, y `addEventListener` para crear los elementos y sus eventos dinámicamente.
- Se implementó **LocalStorage** para guardar la lista de lenguajes y restaurarla al recargar la página.

---

### ✅ sobre-mi.html

**Sección: Habilidades**

- Se incorporó un botón adicional para **reiniciar la tabla de habilidades** y limpiar la recomendación generada.
- El botón "Ver recomendación" analiza el nivel de cada tecnología y sugiere mejorar aquellas en nivel “Básico”.
- Se implementaron condicionales y manejo dinámico del DOM (`textContent`, `style.display`, `eventListener`).

---

### ✅ contacto.html

**Sección: Motivos frecuentes de contacto**

- Se agregó un input y botón para permitir que el usuario **agregue nuevos motivos de contacto**.
- Cada motivo se muestra en una lista junto a un botón para **eliminarlo** individualmente.
- Se gestionó la lista usando un array, eventos dinámicos y almacenamiento persistente con **LocalStorage**.
- Se mantuvo la validación del formulario y el saludo personalizado al escribir o enviar.

---

## Requisitos técnicos cumplidos

- ✅ Uso de `createElement`, `appendChild`, `remove()`, `classList`
- ✅ Aplicación de eventos dinámicos con `addEventListener`
- ✅ Separación de lógica en funciones reutilizables
- ✅ Almacenamiento persistente con `localStorage`, `JSON.stringify()` y `JSON.parse()`
- ✅ Organización clara y buenas prácticas de indentación, comentarios y estructura del código

---

## Entrega esperada

El proyecto final debe incluir:

- Los archivos `index.html`, `sobre-mi.html`, `contacto.html`
- Archivos de estilos (`style.css`) y scripts (`formulario.js` u otros si fueron separados)
- El correcto funcionamiento de todas las funcionalidades indicadas
- Este archivo `README.md` como documentación resumen del trabajo realizado en esta clase
