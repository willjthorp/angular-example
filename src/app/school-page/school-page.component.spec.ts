import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPageComponent } from './school-page.component';

describe('SchoolPageComponent', () => {
  let component: SchoolPageComponent;
  let fixture: ComponentFixture<SchoolPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
