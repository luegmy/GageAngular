import { Producto } from 'src/app/modelo/Producto';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  producto:Producto=new Producto;
  constructor(private servicio:ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let codigo=localStorage.getItem("codigo");
    this.servicio.getProductoCodigo(+codigo)
    .subscribe(data=>{this.producto=data});
  }

  actualizar(){
    this.servicio.updateProducto(this.producto)
    .subscribe(data=>{
      alert("Se actualizo ..!!!")
    });
    this.router.navigate(["listar"]);
  }

}
