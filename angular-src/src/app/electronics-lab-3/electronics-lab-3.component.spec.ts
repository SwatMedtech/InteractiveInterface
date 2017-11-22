import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsLab3Component } from './electronics-lab-3.component';

describe('ElectronicsLab3Component', () => {
  let component: ElectronicsLab3Component;
  let fixture: ComponentFixture<ElectronicsLab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsLab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsLab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
