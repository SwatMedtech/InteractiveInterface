import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsLab2Component } from './physics-lab-2.component';

describe('PhysicsLab2Component', () => {
  let component: PhysicsLab2Component;
  let fixture: ComponentFixture<PhysicsLab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicsLab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsLab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
