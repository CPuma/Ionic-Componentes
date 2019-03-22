import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Componente } from '../interfaces/Componente-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient
  ) { 
  }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // servicio que apunta al json donde tenemos los datos del menu
  getMenuOpts(){
    return  this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
