import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSelectedSectionEmails } from '../../store/email.selectors';

@Component({
  selector: 'app-mail-section',
  templateUrl: './mail-section.component.html',
  styleUrls: ['./mail-section.component.scss']
})
export class MailSectionComponent implements OnInit {
  private selectSelectedSectionEmails$: Observable<any[]>;
  public selectedEmails: any[] = [];

  constructor(private _store: Store) {
    this.selectSelectedSectionEmails$ = this._store.select(selectSelectedSectionEmails);
  }

  ngOnInit(): void {
    this.selectSelectedSectionEmails$.subscribe(emails => {
      this.selectedEmails = emails;
    });
  }

}
