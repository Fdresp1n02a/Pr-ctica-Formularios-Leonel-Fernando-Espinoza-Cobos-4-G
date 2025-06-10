document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form2");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const edad = document.getElementById("edad").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!edad || !mensaje) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (isNaN(edad) || Number(edad) <= 0) {
      alert("Por favor, ingresa una edad válida.");
      return;
    }

    localStorage.setItem("formData", JSON.stringify({ edad, mensaje }));
    window.location.href = "../formularios/confirm.html";
  });
});
