//const socket = io.connect("http://localhost:3000");
const socket = io.connect("https://instapapas.herokuapp.com");

function submit() {
  socket.emit("register", {
    username: document.getElementById("username").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirmPassword").value
  }, fb => {
    document.getElementById("result").innerHTML = fb;
  });
  document.getElementById("result").innerHTML = "Something went wrong";
};
