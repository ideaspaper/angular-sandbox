import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ToDoItemDetailDialogComponent } from './to-do-item-detail-dialog/to-do-item-detail-dialog.component';
import { AddToDoItemDialogComponent } from './add-to-do-item-dialog/add-to-do-item-dialog.component';


@NgModule({
  declarations: [
    ToDoComponent,
    ToDoListComponent,
    ToDoItemComponent,
    ToDoItemDetailDialogComponent,
    AddToDoItemDialogComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class ToDoModule { }
