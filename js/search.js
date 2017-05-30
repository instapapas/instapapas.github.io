//const socket = io.connect("http://localhost:3000");
const socket = io.connect("https://instapapas.herokuapp.com");

function send() {
  location.search = document.getElementById("name").value;
}

function start() {
  const name = location.search.substring(1).replace(/%20/g, " ");
  const status = document.getElementById("status");
  if (name) {
    status.innerHTML = "Loading...";
    socket.emit("search", name, fb => {
      for (var i in fb) {
        let col = document.createElement("div");
        col.className = "col-sm-4 col-md-3 col-lg-2";

        let card = document.createElement("div");
        card.className = "card fluid";

        let image = document.createElement("img");
        image.className = "section media";
        image.src = fb[i].url;

        let sect = document.createElement("div");
        sect.className = "section";

        let info = document.createElement("p");
        info.innerHTML = fb[i].name;

        sect.appendChild(info);
        card.appendChild(image);
        card.appendChild(sect);
        col.appendChild(card);
        document.getElementById("images").appendChild(col);
      }
      if (fb.length === 0) {
        status.innerHTML = "No photos with that name available";
      } else {
        status.remove();
      }
    });
  } else {
    status.remove();
  }
}
