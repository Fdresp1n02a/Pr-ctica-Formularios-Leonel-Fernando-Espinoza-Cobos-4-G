document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const pass1 = document.getElementById('newPass').value;
  const pass2 = document.getElementById('repeatPass').value;
  if (pass1 !== pass2) {
    alert('Las contraseñas no coinciden');
    return;
  }
  alert('Registro exitoso');
  window.location.href = '../pages/home.html';
});
