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

function showAlert(type, message, title = null) {
  return toastr[type](`${message}`, title, {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-bottom-left",
    timeout: 10000,
  });
}

//Arreglos o Arrays (varios clientes)
let customers = [];

function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let birthDate = document.getElementById("birthDate").value;
  let sex = document.getElementById("sex").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  //si entonces para validar los datos
  if (name.length === 0) {
    return showAlert("Debe ingresar un nombre");
  }

  if (name.length < 2) {
    return showAlert(
      "warning",
      "Debe ingresar al menos 2 caracteres en el nombre"
    );
  }

  if (name.length >= 100) {
    return showAlert(
      "warning",
      "Debe ingresar hasta 100 caracteres en el nombre"
    );
  }

  if (email.length === 0) {
    return showAlert("warning", "Debe ingresar un correo");
  }

  if (email.length < 6) {
    return showAlert(
      "warning",
      "Debe ingresar al menos 6 caracteres en el correo"
    );
  }

  if (email.length >= 100) {
    return showAlert(
      "warning",
      "Debe ingresar hasta 100 caracteres en el email"
    );
  }

  if (password.length === 0) {
    return showAlert("warning", "Debe de ingresar una contraseña valida");
  }

  if (password != confirmPassword) {
    return showAlert(
      "warning",
      "Las contraseñas no coinciden, ingrese la misma la contraseña al confirmar"
    );
  }

  if (birthDate.length === 0) {
    return showAlert("warning", "Debe de ingresar una fecha valida");
  }

  if (sex === "0") {
    return showAlert("warning", "Debe seleccionar un sexo");
  }

  // alert(`El nombre ingresado es: ${name} y el correo: ${email}`);

  showAlert("info", "Todo Ok", "Info");

  //Objeto cliente
  let customer = {
    name,
    email,
    password,
    birthDate,
    sex,
    subject,
    message,
  };

  // console.log(customer);

  if (customer) {
    customers.push(customer);
  }

  console.log(customers);

  // alert("Gracias por su mensaje");
}
