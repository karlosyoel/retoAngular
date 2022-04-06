import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlatillosComponent} from './platillos/platillos.component'
import { ProfileComponent } from './profile/profile.component'
import { IngredientesComponent } from './ingredientes/ingredientes.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'platillos', component: PlatillosComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ingredientes', component: IngredientesComponent },
  { path: 'bar', component: SideBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
