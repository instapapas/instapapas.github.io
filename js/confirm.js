//const socket = io.connect('http://localhost:3000');
const socket = io.connect('https://instapapas.herokuapp.com');

function submit() {
  socket.emit('confirm', {
    secret: location.search.replace('?', ''),
    password: document.getElementById('password').value
  }, fb => {
    document.getElementById('result').innerHTML = fb;
  });
}
