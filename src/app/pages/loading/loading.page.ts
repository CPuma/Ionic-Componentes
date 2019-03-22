import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
	selector: 'app-loading',
	templateUrl: './loading.page.html',
	styleUrls: [ './loading.page.scss' ]
})
export class LoadingPage implements OnInit {

  loading: any;

	constructor(private loadinCTRL: LoadingController) {}

	ngOnInit() {
    
    this.presentLoading('Espere por favor...');

    setTimeout(()=>{ 
      // De esta manera
      // se puede llamar dentro de una promesa u observable  . para cordar el Loading la recibir la respuesta
      this.loading.dismiss();
    },1500)
  }

	async presentLoading(message : string) {
		this.loading = await this.loadinCTRL.create({
			message
			// duration: 2000
		});
		return this.loading.present();

	}


  

}
