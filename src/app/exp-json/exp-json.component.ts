import { Component } from '@angular/core';
import { iCar } from '../models/carro';
import { CarsService } from '../services/cars-jsonServe.service';

@Component({
  selector: 'app-exp-json',
  templateUrl: './exp-json.component.html',
  styleUrls: ['./exp-json.component.css']
})
export class ExpJsonComponent {

  title = 'todo';
  
  // carros: any[] = [];

  constructor(
    private carService: CarsService ){
      this.obterCarros();
    }

  
  obterCarros(){
    return this.carService.obterCarros()
      .subscribe(car => console.log(car));
  }

  obterCarro(){
    return this.carService.obterCarro(5)
      .subscribe(carro => console.log(carro))
  }

  addCarro(): void{
    const carro: iCar = {
     model: "hhh",
     year: 2022,
     color: 'red'
    };

    this.carService.addCarro(carro)
      .subscribe(carro => console.log(carro))
  }

  atualizarCarro(): void{
    const carro: iCar = {
      id: 3,
      model: "jkjk",
      year: 2000,
      color: "Blue" 
     };

    this.carService.atualizarCarro(carro)
     .subscribe(carro => console.log(carro));
  }

  deleteCarro(){
    this.carService.deleteCarro(2)
      .subscribe(res => console.log(res + "deletado"));
  }


}
