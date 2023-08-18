import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { UsuarioConsultaComponent } from './paginas/usuario-consulta/usuario-consulta.component';
import { ConteModule } from './paginas/conte/conte.module';

const routes: Routes = [
  {
    path: 'usuarios',
    component:UsuariosComponent
  },
  {
    path: 'conte',
    loadChildren: () => import('./paginas/conte/conte.module').then(m => m.ConteModule)
  },
  {
    path: 'usuario-consulta',
    component:UsuarioConsultaComponent
  },
  {
    path: '**',
    redirectTo:'usuarios'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
