import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoItemDialogComponent } from './add-to-do-item-dialog.component';

describe('AddToDoItemDialogComponent', () => {
  let component: AddToDoItemDialogComponent;
  let fixture: ComponentFixture<AddToDoItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToDoItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToDoItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
