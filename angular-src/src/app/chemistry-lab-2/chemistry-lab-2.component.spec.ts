import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistryLab2Component } from './chemistry-lab-2.component';

describe('ChemistryLab2Component', () => {
  let component: ChemistryLab2Component;
  let fixture: ComponentFixture<ChemistryLab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemistryLab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemistryLab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
