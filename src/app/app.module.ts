import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { MaterialModule } from './material-module';
import { UserService } from './services/user.service';
import { from } from 'rxjs';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewExpenseComponent } from './components/new-expense/new-expense.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseCreateDialogComponent } from './components/dialogs/expense-create-dialog/expense-create-dialog.component';
import { ExpenseUpdateDialogComponent } from './components/dialogs/expense-update-dialog/expense-update-dialog.component';
import { ExpenseRemoveDialogComponent } from './components/dialogs/expense-remove-dialog/expense-remove-dialog.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginErrorDialogComponent } from './components/dialogs/login-error-dialog/login-error-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NewExpenseComponent,
    ExpensesComponent,
    ExpenseCreateDialogComponent,
    ExpenseUpdateDialogComponent,
    ExpenseRemoveDialogComponent,
    RegisterComponent,
    LoginErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

        // provider used to create fake backend
        // fakeBackendProvider
  ],
  entryComponents: [ExpenseCreateDialogComponent, ExpenseUpdateDialogComponent, ExpenseRemoveDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
