import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSectionComponent } from './mail-section.component';

describe('MailSectionComponent', () => {
  let component: MailSectionComponent;
  let fixture: ComponentFixture<MailSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailSectionComponent]
    });
    fixture = TestBed.createComponent(MailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
