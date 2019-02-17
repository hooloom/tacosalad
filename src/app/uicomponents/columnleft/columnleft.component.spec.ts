import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { columnleftComponent } from './columnleft.component';

describe('columnleftComponent', () => {
  let component: columnleftComponent;
  let fixture: ComponentFixture<columnleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ columnleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(columnleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
