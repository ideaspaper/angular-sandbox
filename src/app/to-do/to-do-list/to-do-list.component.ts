import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoList: ToDoItem[] = [];
  private sortState = true;
  selectedToDoItem?: ToDoItem;

  constructor(private toDoListService: ToDoListService) { }

  ngOnInit(): void {
    this.getToDoList();
    this.sortBy('completed');
  }

  handleToDoItemClick(toDoItem: ToDoItem): void {
    this.selectedToDoItem = toDoItem;
  }

  handleToDoItemDetailClick(): void {
    this.selectedToDoItem = undefined;
  }

  getToDoList(): void {
    this.toDoListService.getToDoList().subscribe((data) => {
      this.toDoList = data;
    });
  }

  sortBy(property: string): void {
    const sortProperties = ['title', 'completed', 'due-date'];
    if (!sortProperties.includes(property)) return;
    this.sortState = !this.sortState;
    this.toDoList.sort((a, b) => {
      let valueA: any, valueB: any;
      if (property === 'title') [valueA, valueB] = [a.title, b.title];
      else if (property === 'completed') [valueA, valueB] = [a.completed, b.completed];
      else if (property === 'due-date') [valueA, valueB] = [a.dueDate, b.dueDate];
      if (this.sortState) [valueA, valueB] = [valueB, valueA];
      if (valueA > valueB) return 1;
      else if (valueA < valueB) return -1;
      else return 0;
    });
  }

}
