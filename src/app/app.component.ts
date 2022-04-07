import { Component } from '@angular/core';
import { User } from './user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent{
  title = 'Reto'; 


  constructor(public login:LoginService) {
    login.getSession().subscribe(d=>{
      if(d){
        // this._user = d;
      }
    }) 
   }
}