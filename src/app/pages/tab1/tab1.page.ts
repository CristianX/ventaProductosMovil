import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VendedoresPage } from '../vendedores/vendedores.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private modalCtrl: ModalController ) {}


  async abrirVendedores() {
    const modal = await this.modalCtrl.create({
      component: VendedoresPage,
      componentProps: {
        nombre: 'Nombre Vendedor',
        pais: 'Ecuador'
      }
    });

    await modal.present();
  }

}
