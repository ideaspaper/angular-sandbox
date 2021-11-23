import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { toDoList } from './mock-to-do-list';
import { ToDoItem } from './to-do-item';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  private toDoList: ToDoItem[] = toDoList;

  constructor() { }

  getToDoList(): Observable<ToDoItem[]> {
    const toDoList = of(this.toDoList);
    return toDoList;
  }

  addToDoItem(newToDoItem: ToDoItem): void {
    if (!newToDoItem.title || !newToDoItem.dueDate || !newToDoItem.description) {
      return;
    }
    let newId = 0;
    this.toDoList.forEach((element) => {
      if (element.id > newId) newId = element.id;
    });
    newToDoItem.id = newId + 1;
    newToDoItem.dueDate = new Date(newToDoItem.dueDate);
    newToDoItem.completed = false;
    newToDoItem.createdAt = new Date();
    newToDoItem.updatedAt = new Date();
    this.toDoList.push(newToDoItem);
  }

}
