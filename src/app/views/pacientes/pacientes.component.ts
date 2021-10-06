import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/Paciente';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit{
  
  pacientes:Paciente[] = []
  filter:string = '';
 
  displayedColumns:string[] = ['nome','cpf','medico','last','status']

  constructor(private apiService: PacienteService, private route: Router) {

   }

  ngOnInit(): void {
    this.getPacients()
  }

  getPacients(){
    this.apiService.findAllPacientes().subscribe(data=>this.pacientes=data)
  }
  deletePaciente(id: any){
    this.apiService.deletePacienteByID(id)
    this.pacientes = this.pacientes.filter((paciente)=> paciente.codigo != id);
    console.log(this.pacientes)
  }
  
}
