//Inicia libreria Isotope para filtrar los productos
var $grid = $(".collection-list").isotope({});

$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  resetFilterBtns();
  $(this).addClass("active-filter-btn");
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $(".filter-button-group").find("button");
function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass("active-filter-btn");
  });
}

/**
console.log("Hola desde js");
alert("estas seguro de empezar?");**/

/**FUNCIONES */
/* Funcion para cargar las páginas dinamicamente */
// function loadPage() {
//   //GRUPO DE PAGINAS DISPONIBLES
//   let pages = ["products", "about", "contact"];

//   //Recorremos las paginas disponibles
//   for (const page of pages) {
//     fetch(`/pages/${page}.html`)
//       .then((response) => response.text())
//       .then((data) => {
//         document.getElementById(page).innerHTML = data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }
// /*Ejecutamos la funcion al cargar el documento html */
// loadPage();

function sendMessage() {
  alert("Gracias por su mensaje");
}
