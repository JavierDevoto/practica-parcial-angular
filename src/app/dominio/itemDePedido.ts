export class ItemDePedido {
    gusto: String;
    cantidad: number;

    constructor(empanada: String, cantidad: number){
        this.gusto = empanada;
        this.cantidad = cantidad;
    }
}