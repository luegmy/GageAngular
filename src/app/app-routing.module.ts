import { ActualizarComponent } from './producto/actualizar/actualizar.component';
import { CrearComponent } from './producto/crear/crear.component';
import { ListarComponent } from './producto/listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'crear',component:CrearComponent},
  {path:'actualizar',component:ActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
