/**
console.log("Hola desde js");
alert("estas seguro de empezar?");**/

/**FUNCIONES */
function loadContent(page) {
  fetch(`/pages/${page}`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main-content").innerHTML = data;
    })
    .catch((error) => {
      document.getElementById("main-content").innerHTML =
        "<h2>Error</h2><p>No se pudo cargar la página</p>";
      console.log(error);
    });
}

loadContent("home.html");
