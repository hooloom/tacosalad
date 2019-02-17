import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { headerbackgroundComponent } from './headerbackground.component';

describe('HeaderbackgroundComponent', () => {
  let component: headerbackgroundComponent;
  let fixture: ComponentFixture<headerbackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ headerbackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(headerbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
