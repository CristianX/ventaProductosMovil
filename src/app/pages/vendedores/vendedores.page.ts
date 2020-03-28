import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.page.html',
  styleUrls: ['./vendedores.page.scss'],
})
export class VendedoresPage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  salirSinArgumentos( ) {

    this.modalCtrl.dismiss();

  }

}
