import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaHomeComponent } from './components/mapa-home/mapa-home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AcuerdosLegalesComponent } from './components/acuerdos-legales/acuerdos-legales.component';

const routes: Routes = [
  {
    path:'',
    component:MapaHomeComponent
  },
  {
    path:'galeria',
    component:GaleriaComponent
  },
  {
    path: 'acuerdosLegales',
    component: AcuerdosLegalesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
