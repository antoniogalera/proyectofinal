import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  lang: any;
  enableNotifications: any;
  paymentMethod: any;
  currency: any;
  enablePromo: any;
  enableHistory: any;

  languages: any = ['English', 'Spanish', 'French'];
  paymentMethods: any = ['Paypal', 'Credit Card'];
  currencies: any = ['USD', 'LIB', 'EUR'];
  colors: any = ['Red', 'Blue', 'Black'];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  editarPerfil() {
    this.navCtrl.navigateForward('editar-perfil');
  }

  logout() {
    this.navCtrl.navigateRoot('/login');
  }


}
