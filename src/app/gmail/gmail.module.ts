import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { GmailRoutingModule } from './gmail-routing.module';
import { SearchBarComponent } from './layouts/common/search-bar/search-bar.component';
import { SectionComponent } from './layouts/components/section/section.component';
import { InboxSectionComponent } from './layouts/components/inbox-section/inbox-section.component';
import { MailSectionComponent } from './pages/mail-section/mail-section.component';
import { Store, StoreModule } from '@ngrx/store';
import { emailReducer } from './store';


@NgModule({
  declarations: [
    LandingComponent,
    AuthenticationComponent,
    SearchBarComponent,
    SectionComponent,
    InboxSectionComponent,
    MailSectionComponent
  ],
  imports: [
    CommonModule,
    GmailRoutingModule,
    StoreModule.forFeature('gmail', emailReducer),
  ]
})
export class GmailModule { }
