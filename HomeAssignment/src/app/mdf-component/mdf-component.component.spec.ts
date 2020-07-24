import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfComponentComponent } from './mdf-component.component';

describe('MdfComponentComponent', () => {
  let component: MdfComponentComponent;
  let fixture: ComponentFixture<MdfComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
