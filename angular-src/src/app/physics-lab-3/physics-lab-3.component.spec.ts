import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsLab3Component } from './physics-lab-3.component';

describe('PhysicsLab3Component', () => {
  let component: PhysicsLab3Component;
  let fixture: ComponentFixture<PhysicsLab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicsLab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsLab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
