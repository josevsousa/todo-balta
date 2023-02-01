import { Component } from '@angular/core';
import { iCar } from '../models/carro';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-exp-json',
  templateUrl: './exp-json.component.html',
  styleUrls: ['./exp-json.component.css']
})
export class ExpJsonComponent {

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
