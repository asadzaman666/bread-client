import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRemoveDialogComponent } from './expense-remove-dialog.component';

describe('ExpenseRemoveDialogComponent', () => {
  let component: ExpenseRemoveDialogComponent;
  let fixture: ComponentFixture<ExpenseRemoveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseRemoveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
