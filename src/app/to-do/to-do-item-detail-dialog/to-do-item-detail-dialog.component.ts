import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-item-detail-dialog',
  templateUrl: './to-do-item-detail-dialog.component.html',
  styleUrls: ['./to-do-item-detail-dialog.component.css']
})
export class ToDoItemDetailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public toDoItem: ToDoItem) { }

  ngOnInit(): void {
  }

  toggleCompleted(): void {
    this.toDoItem.completed = !this.toDoItem.completed;
  }

}
