import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/Paciente'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  constructor(private http:HttpClient) { }
  SERVER_URL = "http://localhost:8080/pacientes"
  findAllPacientes():Observable<Paciente[]>{
    const url = this.SERVER_URL+'/listar-pacientes'
     return this.http.get<Paciente[]>(url)
  }
  findPacienteByID(id:String):Observable<Paciente>{
    const url = this.SERVER_URL+'/buscar-paciente?codigo='+id;
    return this.http.get<Paciente>(url)
  }
  deletePacienteByID(id: string){
    const url = this.SERVER_URL+'/deletar-paciente?codigo='+id;
    return this.http.post(url,{},{responseType:"text"}).subscribe((response) =>{
      console.log(response)
    });
  }
  postPaciente(paciente:Paciente){
    const url = this.SERVER_URL+'/cadastrar-paciente';
    const header = new HttpHeaders()
    return this.http.post(url,paciente,{headers:header})
  }
}
