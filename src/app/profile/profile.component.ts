import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  @Input() _user!:User;
  showUpdate:boolean = false;

  constructor(private loginSer:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginSer.getSession().subscribe(dat=>{
      if(dat){
        this._user = dat;
      }else{
        this.router.navigateByUrl("/login");
      }
    });
  }

  salirU():void{
    this.loginSer.salir().subscribe(d=>{
      // if(d){
        this.router.navigateByUrl("/login");
      // }
    });
  }

  saveUserData():void{
    this.loginSer.saveSession(this._user).subscribe(dat=>{
      this.showUpdate=!this.showUpdate
      console.log("Datos guardados");
    });
  }

}
