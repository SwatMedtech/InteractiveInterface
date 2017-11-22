import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistryLab1Component } from './chemistry-lab-1.component';

describe('ChemistryLab1Component', () => {
  let component: ChemistryLab1Component;
  let fixture: ComponentFixture<ChemistryLab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemistryLab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemistryLab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
