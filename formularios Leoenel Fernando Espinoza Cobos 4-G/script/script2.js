document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("error");

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!nombre || !email) {
    error.textContent = "Todos los campos son obligatorios.";
    return;
  }

  if (!emailRegex.test(email)) {
    error.textContent = "Correo no válido.";
    return;
  }

  sessionStorage.setItem("nombre", nombre);
  sessionStorage.setItem("email", email);
  window.location.href = "../formularios/confirm.html";
});
