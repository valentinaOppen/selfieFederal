import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaHomeComponent } from './components/mapa-home/mapa-home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

const routes: Routes = [
  {
    path:'',
    component:MapaHomeComponent
  },
  {
    path:'galeria',
    component:GaleriaComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
