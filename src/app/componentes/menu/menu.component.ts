import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      nombre: 'Usuarios',
      url:'/src/app/paginas/usuarios'
    },
    {
      nombre: 'Usuario consulta',
      url:'/src/app/paginas/usuario-consulta'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
