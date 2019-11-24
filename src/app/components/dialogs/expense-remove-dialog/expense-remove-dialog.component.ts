import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Expense } from '../../../expense';

@Component({
  selector: 'app-expense-remove-dialog',
  templateUrl: './expense-remove-dialog.component.html',
  styleUrls: ['./expense-remove-dialog.component.scss']
})
export class ExpenseRemoveDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExpenseRemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: any}) {}

    onDecline(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
