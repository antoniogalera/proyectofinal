import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteriorJuegoPage } from './interior-juego.page';

const routes: Routes = [
  {
    path: '',
    component: InteriorJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteriorJuegoPageRoutingModule {}
