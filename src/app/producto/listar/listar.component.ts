import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/Producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
productos:Producto[];
  constructor(private servicio:ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.servicio.getProductos()
    .subscribe(data=>{this.productos=data;})
  }

  editar(producto:Producto){
    localStorage.setItem("codigo",producto.codProducto.toString());
    this.router.navigate(["actualizar"]);
  }

  eliminar(producto:Producto){
    this.servicio.deleteProducto(producto)
    .subscribe(data =>{this.productos=this.productos.filter(p=>p!==producto);
    alert("Producto eliminado...!!!!")})

}
}