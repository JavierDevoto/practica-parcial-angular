import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EMPANADAS } from '../dominio/lista.gustos';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  listaDeGustos = new MatTableDataSource()
  columnasAMostrar: string[] = ['gusto', 'cantidad'];

  constructor() { }

  ngOnInit() {
    this.listaDeGustos.data = EMPANADAS;
  }

}
