import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { lostviewComponent } from './lost-view.component';

describe('LostViewComponent', () => {
  let component: lostviewComponent;
  let fixture: ComponentFixture<lostviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ lostviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(lostviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
