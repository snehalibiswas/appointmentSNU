import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCardComponent } from './meeting-card.component';

describe('MeetingCardComponent', () => {
  let component: MeetingCardComponent;
  let fixture: ComponentFixture<MeetingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingCardComponent]
    });
    fixture = TestBed.createComponent(MeetingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
