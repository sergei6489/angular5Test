import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  private user: User = new User();
  constructor(private userService: UserService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let seed = params['seed']; // (+) converts string 'id' to a number
      this.userService.getUser(seed).subscribe(response=> {
        this.user = response}
      );    
   });
  }

}
