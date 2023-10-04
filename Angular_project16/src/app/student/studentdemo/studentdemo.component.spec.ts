import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdemoComponent } from './studentdemo.component';

describe('StudentdemoComponent', () => {
  let component: StudentdemoComponent;
  let fixture: ComponentFixture<StudentdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentdemoComponent]
    });
    fixture = TestBed.createComponent(StudentdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
