import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { setviewComponent } from './set-view.component';

describe('SetViewComponent', () => {
  let component: setviewComponent;
  let fixture: ComponentFixture<setviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ setviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(setviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
