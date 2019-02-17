import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { headerlogoComponent } from './headerlogo.component';

describe('HeaderlogoComponent', () => {
  let component: headerlogoComponent;
  let fixture: ComponentFixture<headerlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ headerlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(headerlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
