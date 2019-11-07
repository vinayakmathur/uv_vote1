import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { ServicesComponent } from './services/services.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { VotingComponent } from './voting/voting.component';

const routes: Routes = [
  
  {path:'about', component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'why-us',component:WhyUsComponent},
  {path:'team',component:TeamComponent},
  {path:'clients',component:ClientsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
 {path:'home',component:HomeComponent},
 {path:'voting',component:VotingComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
