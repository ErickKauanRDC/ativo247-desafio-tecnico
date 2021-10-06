import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Usuario} from '../models/UsuarioLogin'
import { UsuarioRegister } from '../models/UsuarioRegister';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {
   }
   logado = false;
   SERVER_URL = "http://localhost:8080/usuarios"
   logar(usuarioLogin: Usuario){
    const url = this.SERVER_URL+"/logar"
    return this.http.post(url,usuarioLogin,{responseType:"text"})
   }
   cadastrarUsuario(usuarioRegister: UsuarioRegister){
    const url = this.SERVER_URL+"/novo-usuario"
    return this.http.post(url,usuarioRegister,{responseType:'text'})
   }
}
