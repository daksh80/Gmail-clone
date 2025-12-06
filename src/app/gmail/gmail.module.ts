import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { GmailRoutingModule } from './gmail-routing.module';
import { SearchBarComponent } from './layouts/common/search-bar/search-bar.component';
import { SectionComponent } from './layouts/components/section/section.component';
import { InboxSectionComponent } from './layouts/components/inbox-section/inbox-section.component';


@NgModule({
  declarations: [
    LandingComponent,
    AuthenticationComponent,
    SearchBarComponent,
    SectionComponent,
    InboxSectionComponent
  ],
  imports: [
    CommonModule,
    GmailRoutingModule
  ]
})
export class GmailModule { }
