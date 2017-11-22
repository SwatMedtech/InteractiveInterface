import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsLabsComponent } from './physics-labs.component';

describe('PhysicsLabsComponent', () => {
  let component: PhysicsLabsComponent;
  let fixture: ComponentFixture<PhysicsLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicsLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
