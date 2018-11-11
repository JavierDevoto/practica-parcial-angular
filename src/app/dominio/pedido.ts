import { ItemDePedido } from "./itemDePedido";

export class Pedido {
    listaDePedido: ItemDePedido[] = new Array();

    agregarEmpanada(empanada: String, cantidad: number){
        this.listaDePedido.push(new ItemDePedido(empanada, cantidad));
    }

    getListaDePedido(): ItemDePedido[]{
        return this.listaDePedido;
    }
}