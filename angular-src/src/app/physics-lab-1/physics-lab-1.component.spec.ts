import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsLab1Component } from './physics-lab-1.component';

describe('PhysicsLab1Component', () => {
  let component: PhysicsLab1Component;
  let fixture: ComponentFixture<PhysicsLab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicsLab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsLab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
