import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inbox-section',
  templateUrl: './inbox-section.component.html',
  styleUrls: ['./inbox-section.component.scss']
})
export class InboxSectionComponent implements OnInit {
  @Input() inboxSection: any[] = [];
  @Output() emailSelected = new EventEmitter<any>();
  @Output() starToggled = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    console.log('Inbox Section Data:', this.inboxSection);
  }

  selectSection(email: any) {
    console.log("Selected email:", email);
    this.emailSelected.emit(email); 
  }
  toggleStar(event: Event, email: any) {
    event.stopPropagation(); 
    email.starred = !email.starred;
    this.starToggled.emit(email);
    console.log('Star toggled:', email.id, 'Starred:', email.starred);
  }
}