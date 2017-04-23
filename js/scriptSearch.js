//const socket = io.connect("http://localhost:3000");
const socket = io.connect("https://instapapas.herokuapp.com");

function send() {
  location.search = document.getElementById("name").value;
}

function start() {
  const name = location.search.substring(1).replace("%20", " ");
  if (name) {
    document.getElementById("status").innerHTML = "Loading...";
    socket.emit("search", name, fb => {
      for (var i in fb) {
        var img = document.createElement("img");
        img.src = fb[i];
        img.width = "200";
        document.getElementById("images").appendChild(img.image);
      }
      if (fb.length === 0) {
        document.getElementById("status").innerHTML = "No photos with that name available";
      } else {
        document.getElementById("status").remove();
      }
    });
  }
}
