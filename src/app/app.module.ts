import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ExpJsonComponent } from './exp-json/exp-json.component';
import { ExpLocalStorageComponent } from './exp-local-storage/exp-local-storage.component';

//material
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { TodoComponent } from './exp-todo/exp-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ExpJsonComponent,
    ExpLocalStorageComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
