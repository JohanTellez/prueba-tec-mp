import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.css']
})
export class UsuarioConsultaComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
  }

}
