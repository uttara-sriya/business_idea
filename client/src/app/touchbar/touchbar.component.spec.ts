import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchbarComponent } from './touchbar.component';

describe('TouchbarComponent', () => {
  let component: TouchbarComponent;
  let fixture: ComponentFixture<TouchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
