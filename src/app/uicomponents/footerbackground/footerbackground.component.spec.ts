import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbackgroundComponent } from './footerbackground.component';

describe('FooterbackgroundComponent', () => {
  let component: FooterbackgroundComponent;
  let fixture: ComponentFixture<FooterbackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterbackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
