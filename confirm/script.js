//var socket = io.connect("http://localhost:3000");
var socket = io.connect("https://instapapas.herokuapp.com");

socket.emit("confirm", {
  secret: location.search.replace("?", "")
});

socket.on("feedback", function(data) {
  document.getElementById("result").innerHTML = data.fb;
});
