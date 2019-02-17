import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { footernavbarComponent } from './footernavbar.component';

describe('footernavbarComponent', () => {
  let component: footernavbarComponent;
  let fixture: ComponentFixture<footernavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ footernavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(footernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
