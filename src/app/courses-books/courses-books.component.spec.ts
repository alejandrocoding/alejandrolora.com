import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBooksComponent } from './courses-books.component';

describe('CoursesBooksComponent', () => {
  let component: CoursesBooksComponent;
  let fixture: ComponentFixture<CoursesBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesBooksComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
