import { CrearComponent } from './producto/crear/crear.component';
import { ListarComponent } from './producto/listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'listar',pathMatch:'full'},
  {path:'listar',component:ListarComponent},
  {path:'crear',component:CrearComponent},
  {path:'actualizar/:codigo',component:CrearComponent},
  {path:'**',redirectTo:'listar',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
