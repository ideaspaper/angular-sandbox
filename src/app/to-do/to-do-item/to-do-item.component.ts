import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() toDoItem: ToDoItem = {} as ToDoItem;
  @Output() toDoItemClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitClick(): void {
    this.toDoItemClickEvent.emit();
  }

}
