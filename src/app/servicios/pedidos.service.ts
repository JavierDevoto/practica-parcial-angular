import { Injectable } from '@angular/core';
import { Pedido } from '../dominio/pedido';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidoActual: Pedido;

  constructor() { }

  ngOnInit() {
    this.nuevoPedido();
  }

  getPedidoActual(): Observable<Pedido>{
    return of(this.pedidoActual);
  }

  setPedidoActual(pedido: Pedido): void{
    this.pedidoActual = pedido
  }

  nuevoPedido(): void{
    this.pedidoActual = new Pedido();
  }
}
