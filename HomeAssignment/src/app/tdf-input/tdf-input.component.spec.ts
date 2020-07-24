import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfInputComponent } from './tdf-input.component';

describe('TdfInputComponent', () => {
  let component: TdfInputComponent;
  let fixture: ComponentFixture<TdfInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
