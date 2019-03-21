import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { IonList } from '@ionic/angular';

@Component({
	selector: 'app-list',
	templateUrl: './list.page.html',
	styleUrls: [ './list.page.scss' ]
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;
	usuarios: Observable<any>;
	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.usuarios = this.dataService.getUsers();
	}

	favorito(user) {
    console.log('favorito', user);
    // para cerrar el sliding
    this.lista.closeSlidingItems();

	}

	borrar(user) {
    console.log('borrar', user);
     // para cerrar el sliding
     this.lista.closeSlidingItems();
	}

	compartir(user) {
    console.log('compartir', user);
     // para cerrar el sliding
     this.lista.closeSlidingItems();
	}
}
