import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component'
import {FormsModule} from '@angular/forms'
import { UsersService } from './users.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    FooterComponent,

    AboutComponent,

    HomeComponent,

    ServicesComponent,

    WhyUsComponent,

    TeamComponent,

    ClientsComponent,

    ContactusComponent,

    LoginComponent,

    SignupComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
