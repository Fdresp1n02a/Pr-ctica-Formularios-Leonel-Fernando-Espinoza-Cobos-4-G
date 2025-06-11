document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  const validUser = "admin";
  const validPass = "Admin123";

  if (!user || !pass) {
    error.textContent = "Todos los campos son obligatorios.";
    return;
  }

  if (user === validUser && pass === validPass) {
    sessionStorage.setItem("username", user);
    window.location.href = "home.html";
  } else {
    error.textContent = "Usuario o contraseña incorrectos.";
  }
});
