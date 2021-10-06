import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cidade } from 'src/app/models/Cidade';
import { Estado } from 'src/app/models/Estado';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { CepService } from 'src/app/services/cep.service';
import { Cep } from '../../models/Cep'
import { Globals } from 'src/app/shared/Globals';


@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrls: ['./novo-paciente.component.css']
})
export class NovoPacienteComponent implements OnInit {
  message: String = ""
  pipe = new DatePipe('en-US');
    //Endereço
    cep: Cep;
    cidades: Cidade[] = [];
    estados: Estado[] = [];
    //Paciente
    paciente: Paciente;
  //Variaveis de controle
  cepIsInvalid: Boolean = false;
  cpfIsInvalid: Boolean = false;
  
  constructor(private global:Globals,private cepService: CepService, private apiService: PacienteService, private route: Router) {
    this.getEstados()
    this.cep = {
      cepNumero: "",
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
      ibge: 0,
      gia: 0,
      ddd: 0,
      siafi: 0,
      erro: false,
    }
    this.paciente = {
      nome:"",telefone:"",complemento:"",observacao:"",cep:"",cpf:"",numero:"",status:"",last:"",medico:""
    }
  }

  ngOnInit(): void {
    this.verificarAutenticacao()
  }

  onBlurCep(cepNumero: any) {
    this.cepService.getEndereco(cepNumero).subscribe((data: Cep) => {
      console.log(data)
      if (data.erro === true) {
        this.cepIsInvalid = true
        return
      }
      this.cep = data

      this.getCidades(this.cep.uf)
      this.cepIsInvalid = false
    }, (err) => this.cepIsInvalid = true)
  }
  onBlurCpf(cpfNumero: any){
    if(cpfNumero.toString().length!=11){
      this.cpfIsInvalid = true
    }
    else{
      this.cpfIsInvalid = false
    }
  }
  getCidades(uf: String) {
    this.cepService.getCidade(uf).subscribe(data => {
      this.cidades = data
    })
  }
  getEstados() {
    this.cepService.getEstado().subscribe(data => {
      this.estados = data
    })
  }
  onChangeEstado(value: any) {
    this.getCidades(value)
  }
  cadastrarPaciente(){
    this.paciente.last = this.pipe.transform(Date.now(),'dd/MM/yyyy')?.toString()
    const pacienteIsValid=this.verificarPaciente();
    if(pacienteIsValid){
      this.apiService.postPaciente(this.paciente).subscribe(response=>{this.route.navigate(['home'])},err=>window.alert("Preencha todos os campos corretamente!"))
    }
    else{
      window.alert("Preencha todos os campos corretamente!")
    }
  }
  cancelar(){
    this.route.navigate(['home'])
  }
  verificarPaciente():Boolean{
    if(this.paciente.nome.length<0||this.paciente.numero == ""||this.cepIsInvalid == true||this.paciente.medico == ""||this.paciente.telefone.toString().length<10||this.paciente.status==""||this.cpfIsInvalid==true){
      return false
    }
    return true
  }
  verificarAutenticacao(){
    if(this.global.logado){
      return
    }
    else{
      this.route.navigate(['/login'])
    }
  }
  
}



