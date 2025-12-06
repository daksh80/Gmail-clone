import { Component, OnInit } from '@angular/core';
import { GMAIL_DATA } from '../../constants/dummy/email-list';

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
  constructor() { }
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

}
