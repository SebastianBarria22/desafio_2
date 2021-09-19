class Display{
    constructor(displayValorGuardado,displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorGuardado = displayValorGuardado;
        this.calculador = new Calculadora();
        this.valorActual = "";
        this.valorGuardado = "";
    }

    agregarNumero(numero){
        this.valorActual = this.valorActual + numero;
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorGuardado.textContent = this.valorGuardado;
    }
}