import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightarrowComponent } from './sliderbutton.component';

describe('RightarrowComponent', () => {
  let component: RightarrowComponent;
  let fixture: ComponentFixture<RightarrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightarrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightarrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
