import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pedido/pedido.component'
import { CompraComponent } from './compra/compra.component';

const routes: Routes = [
  { path: '', redirectTo: 'pedido', pathMatch: 'full'},
  { path: 'pedido', component: PedidoComponent },
  { path: 'compra', component: CompraComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
