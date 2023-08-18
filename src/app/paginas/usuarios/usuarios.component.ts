import { Component, OnInit } from '@angular/core';
import { ServiPostService } from 'src/app/servicios/servi-post.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  datosUsu:any;

  constructor(private servicio: ServiPostService) { }

  ngOnInit(): void {
    this.datosUsu = this.servicio.getPost();
  }

}
