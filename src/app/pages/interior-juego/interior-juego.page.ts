import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Juego } from 'src/app/interfaces/juego';

@Component({
  selector: 'app-interior-juego',
  templateUrl: './interior-juego.page.html',
  styleUrls: ['./interior-juego.page.scss'],
})
export class InteriorJuegoPage implements OnInit {

  public juegoRecibido: Juego;
  constructor( 
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((juegoRecibido: Juego)=>{
      console.log(juegoRecibido);
      this.juegoRecibido = juegoRecibido;
  });

  }

  public back(): void {
    this.navCtrl.navigateRoot('/home');
  }
}
