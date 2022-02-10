
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  formulario: FormGroup;

  submitted = false;
  loading = false;
  codigo: string | null;

  titulo = "Agregar producto";
  constructor(private servicio: ProductoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.formulario = new FormGroup({
      descripcion: new FormControl("", [Validators.required]),
      costo: new FormControl("", [Validators.required]),
      venta: new FormControl("", [Validators.required]),
      stock: new FormControl("", [Validators.required])
    })
    this.codigo = aRoute.snapshot.paramMap.get('codigo');
    console.log(this.codigo);
  }

  ngOnInit(): void {
    this.editar();
  }

  volver() {
    this.router.navigate(["listar"])
  }

  crearActualizarProducto() {
    this.submitted = true;

    if (this.codigo === null) {
      this.crearProducto();
    } else {
      this.actualizarProducto(this.codigo);
    }

  }

  crearProducto() {
    this.loading = true;
    this.servicio.createProducto(this.formulario.value)
      .subscribe(data => {
        this.toastr.success('El producto fue registrado con exito!', 'Producto registrado',
          {
            positionClass: 'toast-bottom-right'
          });
        this.loading = false;
        this.router.navigate(["listar"]);
      })

  }

  actualizarProducto(codigo: string) {
    this.loading = true;
    this.servicio.updateProducto(this.formulario.value, codigo)
      .subscribe(data => {
        console.log(data);
        this.toastr.success('El producto se actualizo con exito!', 'Producto actualizado',
          {
            positionClass: 'toast-bottom-right'
          });
        this.loading = false;
        this.router.navigate(["listar"]);
      })
  }

  editar() {
    
    if (this.codigo !== null) {
      this.titulo = "Actualizar producto"
      this.servicio.getProductoCodigo(+this.codigo)
        .subscribe(data => {
          this.loading = false;
          this.formulario.setValue({
            descripcion: data.descripcion,
            costo: data.costo,
            venta: data.venta,
            stock: data.stock
          })
        })
    }

  }

}
