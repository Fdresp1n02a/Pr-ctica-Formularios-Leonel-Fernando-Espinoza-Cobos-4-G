document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form1");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (!nombre || !correo) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }
    localStorage.setItem("formData", JSON.stringify({ nombre, correo }));
    window.location.href = "../formularios/confirm.html";
  });
});