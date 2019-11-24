import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-expense-update-dialog',
  templateUrl: './expense-update-dialog.component.html',
  styleUrls: ['./expense-update-dialog.component.scss']
})
export class ExpenseUpdateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExpenseUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {date: Date, purpose: string, amount: number}) { }

  ngOnInit() {
  }

  onDecline() {
    this.dialogRef.close();
  }

}
