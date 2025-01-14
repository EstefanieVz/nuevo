import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ventana2PageRoutingModule } from './ventana2-routing.module';

import { Ventana2Page } from './ventana2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ventana2PageRoutingModule
  ],
  declarations: [Ventana2Page]
})
export class Ventana2PageModule {}
