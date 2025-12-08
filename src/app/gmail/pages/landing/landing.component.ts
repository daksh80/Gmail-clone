import { Component, OnInit } from '@angular/core';
import { GMAIL_DATA } from '../../constants/dummy/email-list';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { setSelectedSectionEmails } from '../../store';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public email = GMAIL_DATA;
  public emailType: string= '';
  public sections: any[] = [];
  public currentEmails: any[] = [];
  public selectedSectionEmails: any[] = [];
  constructor(
    private _store: Store,
    private _router: Router
  ) { }
  ngOnInit(): void {
    this.handelList('primary')
    console.log(this.currentEmails);
  }
  public handelList(emailType: string) {
    switch (emailType) {
      case 'primary':
        this.emailType = 'Primary';
        this.currentEmails = this.email.emails.primary;
        break;
      case 'social':
        this.emailType = 'Social';
        this.currentEmails = this.email.emails.social;
        break;
      case 'promotions':
        this.emailType = 'Promotions';
        this.currentEmails = this.email.emails.promotions;
        break;
    }
  }
  public changeSection(selectedEmails: any) {
    this.currentEmails = selectedEmails;
  }
  public selectedEvent(sectionType: any) {
    this.emailType = sectionType;
    this.handelList(sectionType);
  }
  public selectedSection(selectedEmails: any) {
    this.selectedSectionEmails = selectedEmails;
    this._store.dispatch(setSelectedSectionEmails({emails: selectedEmails}));
    this._router.navigate(['/gmail/mail-section']);
  }
}
