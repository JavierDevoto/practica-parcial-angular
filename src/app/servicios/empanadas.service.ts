import { Injectable } from '@angular/core';
import { Empanada } from '../dominio/empanada';
import { Observable, of } from 'rxjs';
import { EMPANADAS } from '../dominio/lista.gustos';

@Injectable({
  providedIn: 'root'
})
export class EmpanadasService {
  gustosDeEmpanadas: Empanada;

  constructor() { }

  getEmpanadas(): Observable<Empanada[]> {
    return of(EMPANADAS);
  }
}
