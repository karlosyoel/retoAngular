import { Injectable } from '@angular/core';
import { Observable, of} from "rxjs";
import { User } from './user';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private cookie:CookieService) { }

  user?: User;
  key = "_login"

  salir(): Observable<boolean>{
    window.sessionStorage.removeItem(this.key);
    this.user = undefined;
    return of(true);
  }

  rememberUser(u:User): Observable<boolean> {
    window.localStorage.removeItem(this.key);
    window.localStorage.setItem(this.key, JSON.stringify(u));
    return of(true);
  }
  
  login(user: User): Observable<boolean> {

    if(user.user == "root" && user.password=="root"){
      this.user = user;
      if(user.remember){
        this.rememberUser(user);
      }
      this.saveSession(this.user);
      return of(true);
    }
    return of(false);
  }

  saveSession(u:User): Observable<boolean> {
    window.sessionStorage.removeItem(this.key);
    window.sessionStorage.setItem(this.key, JSON.stringify(u));
    return of(true);
  }

  getSession(): Observable<User | null |undefined> {
    var dat = window.sessionStorage.getItem(this.key);
    if(dat){
      this.user=JSON.parse(dat);
    }
    return of(this.user);
  }
}
