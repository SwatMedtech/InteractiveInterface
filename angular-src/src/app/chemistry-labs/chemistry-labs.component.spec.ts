import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemistryLabsComponent } from './chemistry-labs.component';

describe('ChemistryLabsComponent', () => {
  let component: ChemistryLabsComponent;
  let fixture: ComponentFixture<ChemistryLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemistryLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemistryLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
