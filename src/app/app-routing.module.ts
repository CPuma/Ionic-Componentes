import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
	{ path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
	{ path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
	{ path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
	{ path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
	{ path: 'botones', loadChildren: './pages/botones/botones.module#BotonesPageModule' },
	{ path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
	{ path: 'check', loadChildren: './pages/check/check.module#CheckPageModule' },
	{ path: 'date-time', loadChildren: './pages/date-time/date-time.module#DateTimePageModule' },
	{ path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
	{ path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
	{ path: 'infinite-scroll', loadChildren: './pages/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
	{ path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
	{ path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
	{ path: 'list-reorder', loadChildren: './pages/list-reorder/list-reorder.module#ListReorderPageModule' },
	{ path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  
  //modals
	{ path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' }
	/**  modal-info esta dentro del modal- por eso se deshabilita. se podria crear como componente.
                                                 *  pero como page se hace menos modificaciones */
	// { path: 'modal-info', loadChildren: './pages/modal-info/modal-info.module#ModalInfoPageModule' },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
