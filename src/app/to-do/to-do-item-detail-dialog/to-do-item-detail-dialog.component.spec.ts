import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemDetailDialogComponent } from './to-do-item-detail-dialog.component';

describe('ToDoItemDetailDialogComponent', () => {
  let component: ToDoItemDetailDialogComponent;
  let fixture: ComponentFixture<ToDoItemDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoItemDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoItemDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
