import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toCaracter(){
    document.getElementById('caracter')?.scrollIntoView({behavior: 'smooth'});
  }
  toInicio(){
    document.getElementById('home')?.scrollIntoView({behavior: 'smooth'});
  }
  toContacto(){
    document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'});
    // tslint:disable-next-line:no-unused-expression
    
    
  }
}
