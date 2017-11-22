import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsLabsComponent } from './electronics-labs.component';

describe('ElectronicsLabsComponent', () => {
  let component: ElectronicsLabsComponent;
  let fixture: ComponentFixture<ElectronicsLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
