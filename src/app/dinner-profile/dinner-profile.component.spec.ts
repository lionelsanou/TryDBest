import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerProfileComponent } from './dinner-profile.component';

describe('DinnerProfileComponent', () => {
  let component: DinnerProfileComponent;
  let fixture: ComponentFixture<DinnerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
