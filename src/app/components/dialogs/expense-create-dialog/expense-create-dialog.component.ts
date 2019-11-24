import { Component, OnInit, Inject } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Expense } from '../../../expense';

@Component({
  selector: 'app-expense-create-dialog',
  templateUrl: './expense-create-dialog.component.html',
  styleUrls: ['./expense-create-dialog.component.scss']
})
export class ExpenseCreateDialogComponent implements OnInit {

  constructor(
    private expenseService: ExpenseService,
    public createDialogRef: MatDialogRef<ExpenseCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private _snackBar: MatSnackBar) {}

    onDecline(): void {
      this.createDialogRef.close();
    }

  ngOnInit() {
  }

}
