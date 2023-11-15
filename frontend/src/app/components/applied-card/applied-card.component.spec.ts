import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedCardComponent } from './applied-card.component';

describe('AppliedCardComponent', () => {
  let component: AppliedCardComponent;
  let fixture: ComponentFixture<AppliedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliedCardComponent]
    });
    fixture = TestBed.createComponent(AppliedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
