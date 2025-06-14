document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('message').value;
  alert(`Mensaje enviado por ${name} (${email}):\n${message}`);
  window.location.href = './home.html';
});
