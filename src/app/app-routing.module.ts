import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpJsonComponent } from './exp-json/exp-json.component';

const routes: Routes = [
  { path: '', redirectTo: 'json', pathMatch: 'full' },
  { path: 'json', component: ExpJsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
