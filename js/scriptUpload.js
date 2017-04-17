//var socket = io.connect("http://localhost:3000");
var socket = io.connect("https://instapapas.herokuapp.com");

function send() {
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();
  reader.onloadend = function() {
    socket.emit("upload", {
      name: document.getElementById("name").value,
      image: reader.result
    }, fb => {
      window.location = "/search?" + fb;
    });
  }
  reader.readAsDataURL(file);
}
