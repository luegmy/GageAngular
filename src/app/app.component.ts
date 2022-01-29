import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gage-project';

  constructor(private router:Router){}

  listar(){
    this.router.navigate(["listar"]);
  }
  crear(){
    this.router.navigate(["crear"])
  }
  editar(){
    this.router.navigate(["actualizar"])
  }
}
