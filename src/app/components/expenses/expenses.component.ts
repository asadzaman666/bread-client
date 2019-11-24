import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExpenseService } from 'src/app/services/expense.service';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpenseCreateDialogComponent } from '../dialogs/expense-create-dialog/expense-create-dialog.component';
import { ExpenseUpdateDialogComponent } from '../dialogs/expense-update-dialog/expense-update-dialog.component';
import { ExpenseRemoveDialogComponent } from '../dialogs/expense-remove-dialog/expense-remove-dialog.component';
import * as moment from 'moment';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  date1 = new FormControl(new Date());
  expenses: [];
  loggedInUser: string;
  constructor(private expenseService: ExpenseService, public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.expenseService.getUserData().subscribe(data => {
      localStorage.setItem('userName', data.username);
      this.loggedInUser = data.username;
      this.expenses = data.expenses;
      // this.loading = false;
      // this.users = users;
    });
  }

  intoMoment(date): string {
    return moment(date).format('LL');
  }

  forgeExpense(): void {
    const dialogRef = this.dialog.open(ExpenseCreateDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // result.date = moment(result.date).toISOString();
        // console.log(result);
        this.expenseService.forgeUserExpense(result).subscribe(data => {
          this._snackBar.open('New thing forged', 'Nice!', {
            duration: 2000,
          });
        });
        this.ngOnInit();
      }
    });
  }

  updateExpense(expense): void {
    const dialogRef = this.dialog.open(ExpenseUpdateDialogComponent, {
      width: '350px',
      data: { date: expense.date, purpose: expense.purpose , amount: expense.amount }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.date = moment(result.date).format('L');
        console.log(expense);
        // this._snackBar.open('Updated is done yo!', 'Cool!', {
        //   duration: 2000,
        // });

        this.expenseService.updateUserExpense(result, expense._id).subscribe(data => {
          if (data) {
            this._snackBar.open('Updated is done yo!', 'Cool!', {
              duration: 2000,
            });
            this.ngOnInit();
          }
        });

      }
    });
  }

  deleteExpense(expID): void {
    const dialogRef = this.dialog.open(ExpenseRemoveDialogComponent, {
      width: '350px',
      data: { id: expID }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.expenseService.deleteUserExpense(result._id).subscribe((data: any) => {
          this._snackBar.open(data.message, 'Ok', {
            duration: 2000,
          });
        });

        this.ngOnInit();

      }
    });
  }

}
