import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loginService.getSession().subscribe(dat=>{
      if(dat?.user){
        this.user = dat;
        this.router.navigateByUrl('/welcome');
      }
    });
  }

  user:User  = {
    user: '',
    password: '',
    remember: false,
    nombre: '',
    apellidos: '',
    email: ''
  } 

  acceder():void{
    this.loginService.login(this.user).subscribe(dat=>{
      if(dat){
        this.router.navigateByUrl('/welcome');
      }
    });
  }

}
