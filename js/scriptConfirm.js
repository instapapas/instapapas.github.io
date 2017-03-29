//var socket = io.connect("http://localhost:3000");
var socket = io.connect("https://instapapas.herokuapp.com");

function submit() {
  socket.emit("confirm", {
    secret: location.search.replace("?", ""),
    password: document.getElementById("password").value
  });

  socket.on("feedback", function(data) {
    document.getElementById("result").innerHTML = data.fb;
  });
}
