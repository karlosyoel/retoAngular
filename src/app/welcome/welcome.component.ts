import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { PlatilloService } from '../platillo.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {
  
  _user?:User;
  _meal?:any;

  constructor(private logService:LoginService, private r:Router, public randomPl:PlatilloService) { }

  ngOnInit(): void {
    this.logService.getSession().subscribe(dat=>{
      if(dat){
        this._user = dat;
      }else{
        this.r.navigateByUrl("/login");
      }
    });

    this.randomPl.getRandomPlatillo().subscribe((d:[])=>{
      if(d){
        this._meal = Object.values(d)[0];
        // console.log(this._meal[0])
      }
    });
  }

  showDetails(): void {

  }

}
