import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  users: User[];

  constructor( private userService: UserService,
               private expenseService: ExpenseService
              ) { }

  ngOnInit() {
    this.loading = true;
    this.expenseService.getUserData().subscribe(data => {
      console.log(data);
      console.log('sdfsdfs');
      // this.loading = false;
      // this.users = users;
    });
  }
}
