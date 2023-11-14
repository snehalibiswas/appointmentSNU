import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCardComponent } from './saved-card.component';

describe('SavedCardComponent', () => {
  let component: SavedCardComponent;
  let fixture: ComponentFixture<SavedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedCardComponent]
    });
    fixture = TestBed.createComponent(SavedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
