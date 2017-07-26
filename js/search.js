//const socket = io.connect('http://localhost:3000');
const socket = io.connect('https://instapapas.herokuapp.com');

function send() {
  location.search = document.getElementById('name').value;
}

const images = new Vue ({
  el: '#images',
  data: {
    images: []
  }
});

const name = encodeURIComponent(decodeURIComponent(location.search.substring(1)));
const status = document.getElementById('status');
if (name) {
  status.innerHTML = 'Loading...';
  socket.emit('search', name, fb => {
    images.images = fb;

    if (fb.length === 0) {
      status.innerHTML = 'No photos with that name available';
    } else {
      status.remove();
    }
  });
} else {
  status.remove();
}
