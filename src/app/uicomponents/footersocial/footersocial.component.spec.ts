import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersocialComponent } from './footersocial.component';

describe('FootersocialComponent', () => {
  let component: FootersocialComponent;
  let fixture: ComponentFixture<FootersocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootersocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootersocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
