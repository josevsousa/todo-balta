import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpJsonComponent } from './exp-json/exp-json.component';
import { InicioComponent } from './inicio/inicio.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'json', component: ExpJsonComponent},
  { path: 'localStorage', component: LocalStorageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
