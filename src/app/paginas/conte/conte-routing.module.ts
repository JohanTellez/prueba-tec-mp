import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteModule } from './conte.module';

const routes: Routes = [
  {
    path:'',
    component:ConteModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConteRoutingModule { }
