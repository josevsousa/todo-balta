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

  obterCarro(id: number): Observable<iCar>{
    return this.httpClient.get<iCar>(`${API_PATH}cars/${id}`);
  }

  addCarro(carro: iCar): Observable<iCar>{
    return this.httpClient.post<iCar>(`${API_PATH}cars`, carro);
  }

  atualizarCarro(carro: iCar): Observable<iCar>{
    return this.httpClient.put<iCar>(`${API_PATH}cars/${carro.id}`, carro);
  }
   
  deleteCarro(carroId: number): Observable<void>{
    return this.httpClient.delete<void>(`${API_PATH}cars/${carroId}`)
  }
}
