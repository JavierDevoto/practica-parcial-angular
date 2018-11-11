import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PedidosService } from '../servicios/pedidos.service';
import { EmpanadasService } from '../servicios/empanadas.service';
import { Pedido } from '../dominio/pedido';
import { Empanada } from '../dominio/empanada';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  listaDeGustos = new MatTableDataSource<Empanada>()
  columnasAMostrar: string[] = ['gusto', 'cantidad'];
  pedidoActual: Pedido = new Pedido();

  constructor(private pedidosService: PedidosService, private empanadasService: EmpanadasService ) {}

  ngOnInit() {
    this.cargarListaDeEmpanadas();
  }

  cargarListaDeEmpanadas(){
    this.empanadasService.getEmpanadas().subscribe(
      empanadas => this.listaDeGustos.data = empanadas
    )
  }

  finalizarPedido(){
    this.actualizarPedido();
    this.resetearCantidades();
  }

  actualizarPedido(){
    this.listaDeGustos.data.filter(empanada => empanada.cantidad > 0)
    .forEach(empanada => {this.pedidoActual.agregarEmpanada(empanada.gusto, empanada.cantidad) } );
    this.pedidosService.setPedidoActual(this.pedidoActual);
  }

  resetearCantidades(){
    this.listaDeGustos.data.forEach(empanada => empanada.cantidad = 0);
  }

  applyFilter(filterValue: string) {
    this.listaDeGustos.filter = filterValue.trim().toLowerCase();
  }

}
