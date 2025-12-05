import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { GmailRoutingModule } from './gmail-routing.module';


@NgModule({
  declarations: [
    LandingComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    GmailRoutingModule
  ]
})
export class GmailModule { }
