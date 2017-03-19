//var socket = io.connect("http://localhost:3000");
var socket = io.connect("https://instapapas.herokuapp.com");

function submit() {
  socket.emit("createUser", {
    username: document.getElementById("username").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirmPassword").value
  });
  document.getElementById("result").innerHTML = "Something went wrong";

  socket.on("feedback", function(data) {
    document.getElementById("result").innerHTML = data.fb;
  });
};
