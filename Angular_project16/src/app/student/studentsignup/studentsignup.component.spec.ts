import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsignupComponent } from './studentsignup.component';

describe('StudentsignupComponent', () => {
  let component: StudentsignupComponent;
  let fixture: ComponentFixture<StudentsignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsignupComponent]
    });
    fixture = TestBed.createComponent(StudentsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
