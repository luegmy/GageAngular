import { Producto } from 'src/app/modelo/Producto';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  producto:Producto=new Producto;
  constructor(private servicio:ProductoService,private router:Router) { }

  ngOnInit(): void {
  }

  crear(){
    this.servicio.createProducto(this.producto)
    .subscribe(data => {alert("se creo el producto!!")})
    this.router.navigate(["listar"]);
  }

}
