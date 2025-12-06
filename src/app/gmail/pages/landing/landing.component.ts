import { Component, OnInit } from '@angular/core';
import { EMAIL_LIST } from '../../constants/dummy/email-list';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public email = EMAIL_LIST;
  constructor() { 
    console.log(JSON.stringify(this.email));
  }
  ngOnInit(): void {
  }

}
