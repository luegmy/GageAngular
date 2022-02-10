import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/service/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
productos:Producto[];
  constructor(private servicio:ProductoService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.servicio.getProductos()
    .subscribe(data=>{this.productos=data;})
  }

   agregar(){
    this.router.navigate(["crear"])
  }

  editar(producto:Producto){
    this.router.navigate(["actualizar/",producto.codProducto]);
  }

  eliminarProducto(producto:Producto){
    this.servicio.deleteProducto(producto)
    .subscribe(data =>{this.productos=this.productos.filter(p=>p!==producto);
      this.toastr.error('El producto fue eliminado con exito!', 'Producto eliminado',
      {
        positionClass: 'toast-bottom-right'
      })})

}
}