import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsLab1Component } from './electronics-lab-1.component';

describe('ElectronicsLab1Component', () => {
  let component: ElectronicsLab1Component;
  let fixture: ComponentFixture<ElectronicsLab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsLab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsLab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
