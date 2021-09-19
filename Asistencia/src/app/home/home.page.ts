import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarioIngresado: string;

  constructor(private routerA: ActivatedRoute, public toastController: ToastController) {
    this.usuarioIngresado = this.routerA.snapshot.paramMap.get('obtenerUsuario');
    this.presentToast('¡Sesión iniciada correctamente!');
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
