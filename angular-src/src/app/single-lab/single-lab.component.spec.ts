import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLabComponent } from './single-lab.component';

describe('SingleLabComponent', () => {
  let component: SingleLabComponent;
  let fixture: ComponentFixture<SingleLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
