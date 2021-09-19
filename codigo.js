const displayValorGuardado = document.getElementById("valor-gurdado");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumero = document.querySelectorAll(".num");
const botonesOperadores = document.querySelectorAll(".ope");

const display = new Display(displayValorGuardado,displayValorActual);

botonesNumero.forEach(boton =>{
    boton.addEventListener("click", () =>{
        display.agregarNumero(boton.innerHTML);
    });
});