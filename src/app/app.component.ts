import { Component } from '@angular/core';
import { iCar } from './models/carro';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todo';
  carros: iCar[] = [];

  constructor(private carService: CarsService){
    this.obterCarros();
  }

  obterCarros(){
    return this.carService.obterCarros()
      .subscribe(car => this.carros = car)
  }

}
