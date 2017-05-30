//const socket = io.connect("http://localhost:3000");
const socket = io.connect("https://instapapas.herokuapp.com");

function send() {
  const input = document.querySelector("input[type=file]").files[0];
  socket.emit("upload", {
    name: document.getElementById("name").value,
    file: {
      file: input,
      name: input.name,
      extension: input.type.substr(input.type.lastIndexOf("/") + 1)
    }
  }, fb => {
    window.location = "/search?" + fb;
  });
}
