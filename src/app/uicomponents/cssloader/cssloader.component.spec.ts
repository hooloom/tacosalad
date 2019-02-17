import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cssloaderComponent } from './cssloader.component';

describe('cssloaderComponent', () => {
  let component: cssloaderComponent;
  let fixture: ComponentFixture<cssloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cssloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cssloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
