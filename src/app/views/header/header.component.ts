import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/shared/Globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private global:Globals, private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.global.logado = false;
    this.route.navigate(['/login'])
  }
}
