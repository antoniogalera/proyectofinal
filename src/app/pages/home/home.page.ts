import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController, PopoverController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { NotificacionesComponent } from 'src/app/components/notificaciones/notificaciones.component';
import { Juego } from 'src/app/interfaces/juego';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { BuscadorPage } from '../buscador/buscador.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchKey = '';
  public arrayJuegos: Juego[] = [];
  user: Usuario;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private authService: AuthService,
    private router: Router
  ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {

    //Aqui pongo un array que he hecho yo a mano, pero esto lo sacaras de la consulta al servidor
    this.arrayJuegos = [{
      id: 1, nombre: 'GTA V', descripcion:'Aqui escribe la descripcion gorda', fecha_lanzamiento: '01/02/2010', imagen: 'assets/img/GTAV.jpg', precio: 22.2
    },{
      id: 2, nombre: 'FIFA 20', descripcion:'Aqui escribe la descripcion gorda', fecha_lanzamiento: '01/02/2010', imagen: 'assets/img/fifa.jpeg', precio: 22.2
    },{
      id: 3, nombre: 'NBA 2K21', descripcion:'Aqui escribe la descripcion gorda', fecha_lanzamiento: '01/02/2010', imagen: 'assets/img/nba.jpg', precio: 22.2
    }]


  }

  public verDetallesJuego(juego_seleccionado): void {

    console.log("Pulsa navegar");
    
    this.router.navigate(['/interior-juego'],{ //Aqui navegas a la pantalla interior-juego, enviandole el juego que has seleccionado con todos sus datos, y en la otra pantalla lo recojeras
      queryParams: juego_seleccionado,
    });

  }

  async buscador() {
    const modal = await this.modalCtrl.create({
      component: BuscadorPage
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificacionesComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }


}
