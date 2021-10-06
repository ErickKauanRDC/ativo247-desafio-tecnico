import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Globals } from 'src/app/shared/Globals';
import {UsuarioRegister} from '../../models/UsuarioRegister'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  erros:String[]= []
  login:String=""
  password:String=""
  passwordConfirm:String=""
  nome:String=""
  telefone:String=""
  sexo:String=""
  usuario:UsuarioRegister = {login:"",password:"",nome:"",telefone:"",sexo:""};
  constructor(private usuarioService: UsuarioService, private route: Router, private global: Globals) { }

  ngOnInit(): void {
    this.verificarAutenticacao();
  }
  cadastrar(){
    if(this.verificarCadastro()){
      this.usuario = {login:this.login,password:this.password,nome:this.nome,telefone:this.telefone,sexo:this.sexo}
      this.usuarioService.cadastrarUsuario(this.usuario).subscribe(data =>{
        if(data == "Usuario cadastrado!"){
          this.global.logado = true
          this.verificarAutenticacao()
        }
        else{
          window.alert(data)
        }
      })
    }
  }
  verificarCadastro(){
    this.erros = [];
    if(this.passwordConfirm != this.password){
      this.erros.push("As senhas nao se coincidem!")
    }
    if(this.login.length != 11){
      this.erros.push("Cpf Inválido!")
    }

    if(this.password.length < 7){
      this.erros.push("Senha muito pequena")
    }
    if(this.erros.length>0){
      return false
    }
    return true
  }
  verificarAutenticacao(){
    if(!this.global.logado){
      return
    }
    else{
      this.route.navigate(['/home'])
    }
  }
}
