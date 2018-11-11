import { Component, OnInit, Input } from '@angular/core';
import { Empanada } from '../dominio/empanada';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<Empanada> = new MatTableDataSource();
  @Input() columnsToDisplay: String[] = [];

  constructor() { }

  ngOnInit() {
  }

  sumar(empanada: Empanada){
    empanada.cantidad ++;
  }

  restar(empanada: Empanada){
    empanada.cantidad --;
  }
}
