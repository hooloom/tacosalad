import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { headercontentoutletComponent } from './headercontentoutlet.component';

describe('HeadercontentoutletComponent', () => {
  let component: headercontentoutletComponent;
  let fixture: ComponentFixture<headercontentoutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ headercontentoutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(headercontentoutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
