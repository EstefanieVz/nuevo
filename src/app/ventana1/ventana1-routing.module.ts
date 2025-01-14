import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ventana1Page } from './ventana1.page';

const routes: Routes = [
  {
    path: '',
    component: Ventana1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ventana1PageRoutingModule {}
