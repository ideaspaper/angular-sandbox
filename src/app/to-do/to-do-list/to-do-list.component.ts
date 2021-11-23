import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ToDoItem } from '../to-do-item';
import { ToDoListService } from '../to-do-list.service';
import { MatDialog } from '@angular/material/dialog';
import { ToDoItemDetailDialogComponent } from '../to-do-item-detail-dialog/to-do-item-detail-dialog.component';
import { AddToDoItemDialogComponent } from '../add-to-do-item-dialog/add-to-do-item-dialog.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit, OnDestroy {

  toDoList: ToDoItem[] = {} as ToDoItem[];
  private subscriptions: Subscription[] = [];
  private sortState = true;
  selectedToDoItem?: ToDoItem;

  constructor(
    private toDoListService: ToDoListService,
    public toDoItemDetailDialog: MatDialog,
    public addToDoItemDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getToDoList();
    this.buttonSortBy('completed');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }

  liToDoItem(toDoItem: ToDoItem): void {
    this.selectedToDoItem = toDoItem;
    this.toDoItemDetailDialog.open(ToDoItemDetailDialogComponent, { data: toDoItem, width: '40vw' });
  }

  buttonShowAddToDoItem(): void {
    const dialogRef = this.addToDoItemDialog.open(AddToDoItemDialogComponent, { width: '40vw' });
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((data) => {
        if (data) this.toDoListService.addToDoItem(data.toDoItem);
      })
    );
  }

  buttonSortBy(property: string): void {
    const sortProperties = ['title', 'completed', 'due-date'];
    if (!sortProperties.includes(property)) return;
    this.sortState = !this.sortState;
    console.log(this.toDoList);
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

  handleToDoItemDetailEvent(): void {
    this.selectedToDoItem = undefined;
  }

  handleAddToDoItemEvent(newToDoItem: ToDoItem): void {
    this.toDoListService.addToDoItem(newToDoItem);
  }

  getToDoList(): void {
    this.subscriptions.push(
      this.toDoListService.getToDoList().subscribe((data) => {
        this.toDoList = data;
      })
    );
  }

}
