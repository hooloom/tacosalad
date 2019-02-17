import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooternewsletterComponent } from './footernewsletter.component';

describe('FooternewsletterComponent', () => {
  let component: FooternewsletterComponent;
  let fixture: ComponentFixture<FooternewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooternewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooternewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
