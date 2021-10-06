import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/UsuarioLogin';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Globals } from 'src/app/shared/Globals';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:String = '';
  password:String = '';
  usuario: Usuario = {login:this.login,password:this.password}
  constructor(private global:Globals,private route:Router, private pacienteService: PacienteService, private usuarioService: UsuarioService){}
  ngOnInit(): void {
    this.verificarAutenticacao()
  }
  logar(){
    this.usuario = {login:this.login,password:this.password}
    this.usuarioService.logar(this.usuario).subscribe(data=>
      {
        if(data == "Usuario Logado!"){
          this.global.logado = true;
          console.log(this.usuarioService.logado)
          this.verificarAutenticacao()
        }
        else{
          window.alert(data)
          this.global.logado = false;
        }
      }
      )
    console.log(this.usuarioService.logado)
    
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
