function validardatos() {
    /* Comentario */
    // alert("Hola mundo");
    // prompt("Ingrese su nombre");
    // console.log("Hola mundo");
    // document.write("Hola mundo");

    let tipo = document.getElementById("tipo").value;
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("telefono").value;
    let comentario = document.getElementById("comment").value;

    alert("El tipo de comentario es: " + tipo);
    alert("El nombre es: " + nombre);
    alert("El email es: " + email);
    alert("La edad es: " + edad);
    alert("El telefono es: " + telefono);
    alert("El comentario es: " + comentario);
}