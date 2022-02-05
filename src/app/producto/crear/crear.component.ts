import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
formulario=new FormGroup({
  descripcion:new FormControl("",[]),
  preciocompra:new FormControl("",[]),
  precioventa:new FormControl("",[]),
  stock:new FormControl("",[])
})
  constructor(private servicio:ProductoService,private router:Router) { }

  ngOnInit(): void {
  }

  crear(){
    this.servicio.createProducto(this.formulario.value)
    .subscribe(data => {alert("se creo el producto!!" + data.stock)})
    this.router.navigate(["listar"]);
    console.warn(this.formulario.value);
  }
  


}
