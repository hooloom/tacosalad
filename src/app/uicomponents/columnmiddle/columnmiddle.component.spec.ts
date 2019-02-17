import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnmiddleComponent } from './columnmiddle.component';

describe('ColumnmiddleComponent', () => {
  let component: ColumnmiddleComponent;
  let fixture: ComponentFixture<ColumnmiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnmiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnmiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
