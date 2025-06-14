document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === 'admin' && pass === '1234') {
    sessionStorage.setItem('loggedInUser', user);
    window.location.href = './home.html';
  } else {
    alert('Credenciales incorrectas');
  }
});
