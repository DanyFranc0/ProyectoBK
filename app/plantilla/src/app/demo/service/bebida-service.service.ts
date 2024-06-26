import { Injectable } from '@angular/core';
import {Bebidas} from '../models/BebidasViewModel'
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BebidasServiceService {

  constructor(private http: HttpClient) { }
  Url = 'https://localhost:44332/API/Bebida/List';
  getBebidas (){
    return this.http.get<Bebidas[]>(this.Url);
  }
}
