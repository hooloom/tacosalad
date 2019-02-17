import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercopyrightComponent } from './footercopyright.component';

describe('FootercopyrightComponent', () => {
  let component: FootercopyrightComponent;
  let fixture: ComponentFixture<FootercopyrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootercopyrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
