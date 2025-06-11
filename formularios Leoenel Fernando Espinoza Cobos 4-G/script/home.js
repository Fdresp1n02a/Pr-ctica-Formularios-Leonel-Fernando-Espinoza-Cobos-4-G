const username = sessionStorage.getItem("username");
document.getElementById("user").textContent = username ? username : "Invitado";
