import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-add-to-do-item',
  templateUrl: './add-to-do-item.component.html',
  styleUrls: ['./add-to-do-item.component.css']
})
export class AddToDoItemComponent implements OnInit {

  @Output() addToDoItemEvent = new EventEmitter<ToDoItem>();

  toDoItem: ToDoItem = {} as ToDoItem;

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent() {
    this.addToDoItemEvent.emit(this.toDoItem);
  }

}
