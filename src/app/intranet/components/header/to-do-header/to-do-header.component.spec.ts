import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoHeaderComponent } from './to-do-header.component';

describe('ToDoHeaderComponent', () => {
  let component: ToDoHeaderComponent;
  let fixture: ComponentFixture<ToDoHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoHeaderComponent]
    });
    fixture = TestBed.createComponent(ToDoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
