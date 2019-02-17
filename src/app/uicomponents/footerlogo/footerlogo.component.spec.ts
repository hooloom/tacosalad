import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterlogoComponent } from './footerlogo.component';

describe('FooterlogoComponent', () => {
  let component: FooterlogoComponent;
  let fixture: ComponentFixture<FooterlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
