import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { contentoutletComponent } from './contentoutlet.component';

describe('ContentoutletComponent', () => {
  let component: contentoutletComponent;
  let fixture: ComponentFixture<contentoutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ contentoutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(contentoutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
