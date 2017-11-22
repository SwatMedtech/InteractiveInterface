import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistryLab3Component } from './chemistry-lab-3.component';

describe('ChemistryLab3Component', () => {
  let component: ChemistryLab3Component;
  let fixture: ComponentFixture<ChemistryLab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemistryLab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemistryLab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
