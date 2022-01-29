import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelo/Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/producto';

  getProductos() {
    return this.http.get<Producto[]>(this.url);
  }

  createProducto(producto: Producto) {
    return this.http.post<Producto>(this.url, producto);
  }

  getProductoCodigo(codigo: number) {
    return this.http.get<Producto>(this.url + "/" + codigo)
  }

  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.url + "/" + producto.codProducto,producto)
  }

  deleteProducto(producto:Producto) {
    return this.http.delete<Producto>(this.url + "/" + producto.codProducto)
  }
}
