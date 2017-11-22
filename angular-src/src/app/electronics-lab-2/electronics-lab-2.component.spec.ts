import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsLab2Component } from './electronics-lab-2.component';

describe('ElectronicsLab2Component', () => {
  let component: ElectronicsLab2Component;
  let fixture: ComponentFixture<ElectronicsLab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsLab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsLab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
