import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(
    private actionSheetCTRL: ActionSheetController
  ) { }

  ngOnInit() {
  }

  async presentActionSheet() { // async ... dice . este metodo regresa una promesa . (tarea asyncrona)
    const actionSheet = await this.actionSheetCTRL.create({ // await es para esperar  que se cumpla esa tarea
      header: 'Albums',
      backdropDismiss:false, // para que no desaparesca si se hace click fuera de las opciones
      buttons: [{
        text: 'Delete',
        cssClass:'rojo',  // rojo es una clase personalizada 
        role: 'destructive', // destructive . pinta de rojo el item en IOS
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present(); // await  para espera que se cree el actionSheet y luego lo present
  }

}
