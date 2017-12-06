import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLabComponent } from './pre-lab.component';

describe('PreLabComponent', () => {
  let component: PreLabComponent;
  let fixture: ComponentFixture<PreLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
