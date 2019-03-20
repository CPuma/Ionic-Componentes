import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fechaNaci1: Date=new Date();
  fechaNaci2: Date=new Date();

  customDate;
  customPickerOptions;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) =>{
          console.log(evento)
          console.log('Y ASI CAMBIAMOS LA FECHA MANUALMENTE')
          this.customDate = new Date(evento.year.value, evento.month.value,evento.day.value).toISOString()
          console.log(this.customDate)
        } 
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false; // para que no se cierre el componente al hace click
        }
      }]
    }
  }

  cambioFecha1(event){
    console.log('ionChange', event);
  }
  cambioFecha2(event){
    console.log('ionChange', event);
    console.log('Date',new Date(event.detail.value));
  }

}
