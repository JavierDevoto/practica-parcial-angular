import { Component, OnInit, Input } from '@angular/core';
import { Empanada } from '../dominio/empanada';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() dataArray: MatTableDataSource<Empanada> = new MatTableDataSource();
  @Input() columnsToDisplay: String[] = [];

  constructor() { }

  ngOnInit() {
  }

  sumar(empanada: Empanada){
    empanada.sumar;
  }

  restar(empanada: Empanada){
    empanada.restar;
  }
}
