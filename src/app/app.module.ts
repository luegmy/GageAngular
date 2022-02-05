import { ProductoService } from './service/producto.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearComponent } from './producto/crear/crear.component';
import { ActualizarComponent } from './producto/actualizar/actualizar.component';
import { ListarComponent } from './producto/listar/listar.component';
import { EliminarComponent } from './producto/eliminar/eliminar.component';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    ActualizarComponent,
    ListarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
