import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoBodyComponent } from './to-do-body.component';

describe('ToDoBodyComponent', () => {
  let component: ToDoBodyComponent;
  let fixture: ComponentFixture<ToDoBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoBodyComponent]
    });
    fixture = TestBed.createComponent(ToDoBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
