import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnrightComponent } from './columnright.component';

describe('ColumnrightComponent', () => {
  let component: ColumnrightComponent;
  let fixture: ComponentFixture<ColumnrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
