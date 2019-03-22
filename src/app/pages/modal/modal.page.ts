import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { componentFactoryName } from '@angular/compiler';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.page.html',
	styleUrls: [ './modal.page.scss' ]
})
export class ModalPage implements OnInit {
	constructor(private modalCTRL: ModalController) {}

	ngOnInit() {}

	async abrirModal() {
		// Creamos el modal
		const modal = await this.modalCTRL.create({
			component: ModalInfoPage,
			componentProps: {
				nombre: 'Cesar',
				pais: 'Peru'
			}
		});
		// lanzamos el modal
    await modal.present();
    
    // promesa que escucha cuandl modal se Cierra
    const{data} = await modal.onDidDismiss();
    console.log('Retorno del modal', data);

  }
  

}
