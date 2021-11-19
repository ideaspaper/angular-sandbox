import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-item-detail',
  templateUrl: './to-do-item-detail.component.html',
  styleUrls: ['./to-do-item-detail.component.css']
})
export class ToDoItemDetailComponent implements OnInit {

  @Input() toDoItem: ToDoItem = {} as ToDoItem;
  @Output() toDoItemDetailCloseEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitClick(): void {
    this.toDoItemDetailCloseEvent.emit();
  }

  toggleCompleted(): void {
    this.toDoItem.completed = !this.toDoItem.completed;
  }

}
