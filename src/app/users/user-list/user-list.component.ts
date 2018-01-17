import { Component, OnInit } from '@angular/core';
import {TemplateRef, ViewChild} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
  private users: Array<User> = new Array<User>();
  private editedUser: User; 
  private isLoaded: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    let loadedCount = 0;
    for (let n=0;n<10;n++)
    {
      var self = this;
      setTimeout(function(){
        self.userService.getRandomUser().subscribe(response=>{
          self.users.push(response);
          loadedCount++;
          self.isLoaded = loadedCount == 10;
        });

      },n*200)

     }
  }

  loadTemplate(user: User) {
    if (this.editedUser && this.editedUser.seed == user.seed) {
        return this.editTemplate;
    } else {
        return this.readOnlyTemplate;
    }
  }

  saveUser()
  {
    var data = this.users.filter(item=>item.seed == this.editedUser.seed)
    data[0].email = this.editedUser.email;
    data[0].name = this.editedUser.name;
    data[0].phone = this.editedUser.phone;
    data[0].dob = this.editedUser.dob;
    this.editedUser = null;
  }

  editUser(user: User)
  {
    this.editedUser = new User(user.picture,
      user.name,
      user.email,
      user.phone,
      user.dob,
      user.seed);
  }

  deleteUser(user: User)
  {
    let index = this.users.indexOf(user);
    this.users.splice(index,1);
  }

  cancel()
  {
    this.editedUser = null;
  }
}
