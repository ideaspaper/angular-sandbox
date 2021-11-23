import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-add-to-do-item-dialog',
  templateUrl: './add-to-do-item-dialog.component.html',
  styleUrls: ['./add-to-do-item-dialog.component.css']
})
export class AddToDoItemDialogComponent implements OnInit {

  @Output() addToDoItemEvent = new EventEmitter<ToDoItem>();

  toDoItem: ToDoItem = {} as ToDoItem;

  constructor(private dialogRef: MatDialogRef<AddToDoItemDialogComponent>) { }

  ngOnInit(): void {
  }

  emitEvent() {
    this.dialogRef.close({ toDoItem: this.toDoItem });
  }

}
