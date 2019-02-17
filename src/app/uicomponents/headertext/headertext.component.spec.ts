import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { headertextComponent } from './headertext.component';

describe('HeadertextComponent', () => {
  let component: headertextComponent;
  let fixture: ComponentFixture<headertextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ headertextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(headertextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
