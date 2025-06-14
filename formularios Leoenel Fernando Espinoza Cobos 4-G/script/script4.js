document.getElementById('subscribeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const email = document.getElementById('subscribeEmail').value;
  alert(`Te has suscrito con el correo: ${email}`);
  window.location.href = './home.html';
});
