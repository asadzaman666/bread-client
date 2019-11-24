import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseUpdateDialogComponent } from './expense-update-dialog.component';

describe('ExpenseUpdateDialogComponent', () => {
  let component: ExpenseUpdateDialogComponent;
  let fixture: ComponentFixture<ExpenseUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
