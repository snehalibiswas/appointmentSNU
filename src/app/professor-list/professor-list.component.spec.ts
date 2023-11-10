import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorListComponent } from './professor-list.component';

describe('ProfessorListComponent', () => {
  let component: ProfessorListComponent;
  let fixture: ComponentFixture<ProfessorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessorListComponent]
    });
    fixture = TestBed.createComponent(ProfessorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
