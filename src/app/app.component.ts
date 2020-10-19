import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.appPages = [
      {
        title: 'Inicio',
        url: '/home',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Categorias',
        url: '/categorias',
        direct: 'forward',
        icon: 'information-circle-outline'
      },

      {
        title: 'Configuracion',
        url: '/configuracion',
        direct: 'forward',
        icon: 'cog'
      }
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  editPerfil() {
    this.navCtrl.navigateForward('editar-perfil');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }

}
