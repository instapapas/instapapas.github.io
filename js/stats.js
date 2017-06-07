//const socket = io.connect("http://localhost:3000");
const socket = io.connect("https://instapapas.herokuapp.com");

function start() {
  socket.emit("statsImages", {
    length: true
  }, fb => {
    document.getElementById("images").innerHTML = fb.length
  });

  socket.emit("statsUsers", {
    length: true
  }, fb => {
    document.getElementById("users").innerHTML = fb.length
  });
}
