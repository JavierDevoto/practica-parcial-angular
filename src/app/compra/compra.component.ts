import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  
  listaDeCompra 
  columnasAMostrar: string[] = ['gusto', 'soloCantidad']

  constructor() { }

  ngOnInit() {
  }

}
