import { OnInit, Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/Componente-model';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Observable<Componente[]>;

  constructor( private menuCTRL: MenuController,
    private dataService:DataService
     ) { }

  ngOnInit() {
    this.componentes= this.dataService.getMenuOpts();
  }

  toggleMenu(){
    this.menuCTRL.toggle();
  }

}

