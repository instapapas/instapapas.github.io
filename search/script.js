//var socket = io.connect("http://localhost:3000");
var socket = io.connect("https://instapapas.herokuapp.com");

function send() {
  location.search = document.getElementById("name").value;
}

var name = location.search.substring(1);
if (name) {
  socket.emit("search", {
    name: name
  });
}

socket.on("feedback", function(data) {
  console.log(data);
  for (var i in data.images) {
    var img = document.createElement("img");
    img.src = data.images[i];
    img.width = "200";
    document.getElementById("images").appendChild(img);
  }
  if (data.images.length == 0)
    document.getElementById("status").innerHTML = "No photos with that name available";
  else
    document.getElementById("status").remove();
});
