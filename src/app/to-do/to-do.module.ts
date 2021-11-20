import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoItemDetailComponent } from './to-do-item-detail/to-do-item-detail.component';
import { FormsModule } from '@angular/forms';
import { AddToDoItemComponent } from './add-to-do-item/add-to-do-item.component';


@NgModule({
  declarations: [
    ToDoComponent,
    ToDoListComponent,
    ToDoItemComponent,
    ToDoItemDetailComponent,
    AddToDoItemComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    FormsModule
  ]
})
export class ToDoModule { }
