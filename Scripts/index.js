//Formulario alert lleno/vacio//
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores de los campos //
    let email = document.getElementById("email").value;
    let celu = document.getElementById("number").value;
    let dni = document.getElementById("dni").value;

    // Verificar si los campos están vacíos //
    if (email === "" || celu === "" || dni === "") {
    alert("El formulario está incompleto. Por favor, complete todos los campos.");
    } else {
    alert("Gracias por llenar el formulario, se comunicarán con usted a la brevedad.");
    }
});
<<<<<<< HEAD
//Final Formulario alert lleno/vacio//
=======
//Final Formulario alert lleno/vacio//
>>>>>>> 14dcbeaef654fbe95839dd793a6cb5fa960c043f
