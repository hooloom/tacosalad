import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { headernavbarComponent } from './headernavbar.component';

describe('HeadernavbarComponent', () => {
  let component: headernavbarComponent;
  let fixture: ComponentFixture<headernavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ headernavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(headernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
