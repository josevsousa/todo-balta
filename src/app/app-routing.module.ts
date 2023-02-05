import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpJsonComponent } from './exp-json/exp-json.component';
import { InicioComponent } from './inicio/inicio.component';
import { ExpLocalStorageComponent } from './exp-local-storage/exp-local-storage.component';
import { TodoComponent } from './exp-todo/exp-todo.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'json', component: ExpJsonComponent},
  { path: 'localStorage', component: ExpLocalStorageComponent },
  { path: 'todo', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
