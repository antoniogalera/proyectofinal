import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteriorJuegoPageRoutingModule } from './interior-juego-routing.module';

import { InteriorJuegoPage } from './interior-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteriorJuegoPageRoutingModule
  ],
  declarations: [InteriorJuegoPage]
})
export class InteriorJuegoPageModule {}
