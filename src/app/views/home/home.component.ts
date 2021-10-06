import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/shared/Globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private global:Globals,private route:Router) { }

  ngOnInit(): void {
    this.verificarAutenticacao()
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
