//const socket = io.connect('http://localhost:3000');
const socket = io.connect('https://instapapas.herokuapp.com');

function submit() {
  const status = document.getElementById('status');
  socket.emit('register', {
    username: document.getElementById('username').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    confirmPassword: document.getElementById('confirmPassword').value
  }, fb => {
    status.innerHTML = fb;
    status.className = 'toast';
  });
  status.innerHTML = 'Something went wrong';
  status.className = 'toast';
};
