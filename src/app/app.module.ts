import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import 'hammerjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PedidoComponent } from './pedido/pedido.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TablaComponent } from './tabla/tabla.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    ContenedorComponent,
    TablaComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
