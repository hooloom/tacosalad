import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterpaidforComponent } from './footerpaidfor.component';

describe('FooterpaidforComponent', () => {
  let component: FooterpaidforComponent;
  let fixture: ComponentFixture<FooterpaidforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterpaidforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterpaidforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
