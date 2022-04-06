import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {
  
  _user?:User;

  constructor(private logService:LoginService, private r:Router) { }

  ngOnInit(): void {
    this.logService.getSession().subscribe(dat=>{
      if(dat){
        this._user = dat;
      }else{
        this.r.navigateByUrl("/login");
      }
    });
  }

}
