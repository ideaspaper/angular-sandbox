import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() toDoItem: ToDoItem = {} as ToDoItem;
  @Output() toDoItemEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(): void {
    this.toDoItemEvent.emit();
  }

}
