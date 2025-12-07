import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emailCategories } from 'src/app/gmail/constants/dummy/email-list';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() Emailsections: any;
  @Input() emailType: string = '';
  @Output() emailSelected = new EventEmitter<any>();
  @Output() selectedType = new EventEmitter<any>();
  
  public selectCategory: any;
  public emailCategories = emailCategories;
  constructor() { }
  ngOnInit(): void {
  }
  public selectSection(sectionType: any) {
    switch (sectionType.folder) {
    case 'social':
      this.selectCategory = this.Emailsections.emails.social;
      this.emailSelected.emit(this.selectCategory)
      this.selectedType.emit(sectionType.folder)
      console.log("this.sections",this.selectCategory);
      break;
    case 'promotions':
      this.selectCategory = this.Emailsections.emails.promotions;
      this.emailSelected.emit(this.selectCategory)
      this.selectedType.emit(sectionType.folder)
      console.log("this.sections",this.selectCategory);
      break;
    case 'primary':
      this.selectCategory = this.Emailsections.emails.primary;
      this.emailSelected.emit(this.selectCategory)
      this.selectedType.emit(sectionType.folder)
      console.log("this.sections",this.selectCategory);
      break;
    default:
      break;
    }
  }
}
