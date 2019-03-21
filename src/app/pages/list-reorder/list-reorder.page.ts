import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes=[ 'Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla']


  constructor() { }

  ngOnInit() {
  }

  reorder(event){
    // event.detail.from --- Posicion INICIAL
    // event.detail.to --- Posicion FINAL
    // console.log(event);

    // vamos a mover manualmente el elemento
    const itemMover = this.personajes.splice( event.detail.from, 1)[0] // extraemos el item y lo eliminamos (1) ... [0] el item extraido
    this.personajes.splice(event.detail.to,0,itemMover) // no eliminamos (0) pero insertamos el item extraido

    // al llamat el metodo COMPLETE , ANGULAR VUELVE A ORDENAR EL ARREGLO 
    event.detail.complete();
  }
  guardar(){
    console.log(this.personajes)
  }
}
