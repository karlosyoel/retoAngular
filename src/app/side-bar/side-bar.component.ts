import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent {

  constructor() { }
  
  
  showFiller = false;
  _user:User = {
    user: '',
    password: '',
    remember: false,
    nombre: '',
    apellidos: '',
    email: ''
  };
}
