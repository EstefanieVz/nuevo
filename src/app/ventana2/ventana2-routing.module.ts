import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ventana2Page } from './ventana2.page';

const routes: Routes = [
  {
    path: '',
    component: Ventana2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ventana2PageRoutingModule {}
