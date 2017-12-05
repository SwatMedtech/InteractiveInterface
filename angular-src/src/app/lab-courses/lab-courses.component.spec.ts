import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabCoursesComponent } from './lab-courses.component';

describe('LabCoursesComponent', () => {
  let component: LabCoursesComponent;
  let fixture: ComponentFixture<LabCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
