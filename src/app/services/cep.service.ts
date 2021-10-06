import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cep} from '../models/Cep'
import { Cidade } from '../models/Cidade';
import { Estado } from '../models/Estado';
@Injectable({
  providedIn: 'root'
})
export class CepService {
  constructor(private http:HttpClient) {
   }
   getEndereco(numeroCep: Number):Observable<Cep>{
     return  this.http.get<Cep>(`https://viacep.com.br/ws/${numeroCep}/json/`)
  }
   getCidade(estado:String):Observable<Cidade[]>{
    console.log(estado)
    return  this.http.get<Cidade[]>(`https://br-cidade-estado-nodejs.glitch.me/cidades?estadoId=${estado}`)
  }
   getEstado():Observable<Estado[]>{
    return  this.http.get<Estado[]>(`https://br-cidade-estado-nodejs.glitch.me/estados`)
  }
}
