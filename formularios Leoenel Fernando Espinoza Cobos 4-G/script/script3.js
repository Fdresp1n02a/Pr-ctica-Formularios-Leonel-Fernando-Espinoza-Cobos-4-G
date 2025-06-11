document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form2");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const edad = parseInt(document.getElementById("edad").value.trim());
    const mensaje = document.getElementById("mensaje").value.trim();
    if (isNaN(edad) || edad <= 0) {
      alert("Por favor, introduce una edad válida.");
      return;
    }

    if (mensaje.length < 10) {
      alert("El mensaje debe tener al menos 10 caracteres.");
      return;
    }
    sessionStorage.setItem("edad", edad);
    sessionStorage.setItem("mensaje", mensaje);
    window.location.href = "../formularios/confirmacion.html";
  });
});

