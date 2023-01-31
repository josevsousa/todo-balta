import { Injectable } from '@angular/core';
import { API_PATH } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { iCar } from '../models/carro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarsService {

  constructor(private httpClient: HttpClient) { }

  obterCarros(): Observable<iCar[]>{
    return this.httpClient.get<iCar[]>(`${API_PATH}cars`)
  }
}
