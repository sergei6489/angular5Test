import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import {UserService} from './users/user.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
