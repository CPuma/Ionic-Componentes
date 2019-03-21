import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
	selector: 'app-infinite-scroll',
	templateUrl: './infinite-scroll.page.html',
	styleUrls: [ './infinite-scroll.page.scss' ]
})
export class InfiniteScrollPage implements OnInit {
// cuando quieres obtener un elemento del html usar @ViewChild

@ViewChild(IonInfiniteScroll) inifiniteScroll: IonInfiniteScroll;
  
  data: any[] = Array(20);
  
	constructor() {}

	ngOnInit() {}

	loadData(event) {
    console.log('cargando siguientes ....');
    
    // si se alcanza el maximo de datos que queremos mostrar
    if(this.data.length>50){
      event.target.complete();
      // deshabilitamos
      this.inifiniteScroll.disabled = true;
      return;
    }

		// simulando un carga asyncrona
		setTimeout(() => {
			const nuevoArr = Array(20);
			this.data.push(...nuevoArr);

			// para que no se quede cargando el mismo evento . debo terminar el evento ,
			//  asi podre volverlo a llamar otra vez.
			event.target.complete();
		}, 1000);
	}
}
