import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalInfoPage } from './modal-info.page';

/**  No se ingresara directamente, Se usara esta pagino como si fuese un componente */
// const routes: Routes = [
//   {
//     path: '',
//     component: ModalInfoPage
//   }
// ];

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    IonicModule, 
    // al no ser una pagina Completa  se elimina el RouterModule
    // RouterModule.forChild(routes) 
  ],
  declarations: [ ModalInfoPage ],
  exports:[ ModalInfoPage ]
})
export class ModalInfoPageModule {}
