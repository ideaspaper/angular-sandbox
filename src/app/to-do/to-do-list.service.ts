import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TODOLIST } from './mock-to-do-list';
import { ToDoItem } from './to-do-item';


@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  private toDoList: ToDoItem[] = TODOLIST;

  constructor() { }

  getToDoList(): Observable<ToDoItem[]> {
    const toDoList = of(this.toDoList);
    return toDoList;
  }

}
