import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { ProfileComponent } from './profile/profile.component';

import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideBarComponent } from './side-bar/side-bar.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    IngredientesComponent,
    PlatillosComponent,
    ProfileComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
