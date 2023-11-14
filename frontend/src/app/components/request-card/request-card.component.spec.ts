import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCardComponent } from './request-card.component';

describe('RequestCardComponent', () => {
  let component: RequestCardComponent;
  let fixture: ComponentFixture<RequestCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestCardComponent]
    });
    fixture = TestBed.createComponent(RequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
