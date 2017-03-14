//var socket = io.connect("http://localhost:3000");
var socket = io.connect("https://instapapas.herokuapp.com");

function send() {
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    socket.emit("push", {
      name: document.getElementById("name").value,
      image: reader.result
    });
  }
  reader.readAsDataURL(file);

  socket.on("feedback", function(data) {
    var img = document.createElement("img");
    img.src = data.image;
    img.width = "200";
    document.getElementsByClassName("images").appendChild(img);
  });
}
