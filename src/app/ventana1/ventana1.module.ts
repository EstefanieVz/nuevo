import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ventana1PageRoutingModule } from './ventana1-routing.module';

import { Ventana1Page } from './ventana1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ventana1PageRoutingModule
  ],
  declarations: [Ventana1Page]
})
export class Ventana1PageModule {}
