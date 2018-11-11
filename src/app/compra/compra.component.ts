import { Component, OnInit, Input } from '@angular/core';
import { PedidosService } from '../servicios/pedidos.service';
import { Pedido } from '../dominio/pedido';
import { MatTableDataSource } from '@angular/material/table';
import { ItemDePedido } from '../dominio/itemDePedido';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  pedidoActual: Pedido = new Pedido();
  listaDeCompra = new MatTableDataSource<ItemDePedido>()
  columnasAMostrar: string[] = ['gusto', 'soloCantidad']
  montoAPagar: number;

  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    this.cargarPedido();
  }

  cargarPedido(){
    this.pedidosService.getPedidoActual().subscribe(
      pedido => {
        this.pedidoActual = pedido
        this.listaDeCompra.data = pedido.getListaDePedido()
        this.calcularMontoAPagar()
      }
    )
  }

  calcularMontoAPagar(){
    var cantidad = 0;
    this.listaDeCompra.data.forEach(item => cantidad += item.cantidad);
    this.montoAPagar = cantidad * 20;
  }

}
