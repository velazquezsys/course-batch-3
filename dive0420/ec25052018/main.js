const dropDown = document.getElementById("dropDown");
const launch = document.getElementById("launch");
const opciones = document.getElementsByClassName("opcion");
const modal = document.getElementById("modal");
const texto = document.getElementById("texto");
const close = document.getElementById("close");
const principal = document.getElementById("principal")
let texto = ``


dropDown.addEventListener('click', function () {
    let opciones = this.nextElementSibling;
    if (opciones.style.display === "block") {
        opciones.style.display = "none";
    } else {
        opciones.style.display = "block";
        this.style.display = "none";
    }
});

const opcionesClick = () => {
    let i;
    for (i = 0; i < opciones.length; i++) {
        opciones[i].addEventListener("click", function() {
            dropDown.innerText = this.innerText;
            this.parentElement.style.display = "none";
            dropDown.style.display = "block";
        });
    }
}

launch.addEventListener('click', function () {
    modal.style.display = "block";
});

close.addEventListener('click', function () {
    modal.style.display = "none";
});


opcionesClick();