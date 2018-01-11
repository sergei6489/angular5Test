import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { UserListComponent } from './user-list/user-list.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {UsersRoutingModule} from './users-routing';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [UserViewComponent, UserListComponent]
})
export class UsersModule { }
