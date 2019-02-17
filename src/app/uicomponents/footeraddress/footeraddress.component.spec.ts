import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteraddressComponent } from './footeraddress.component';

describe('FooteraddressComponent', () => {
  let component: FooteraddressComponent;
  let fixture: ComponentFixture<FooteraddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooteraddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooteraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
