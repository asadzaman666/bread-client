import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';

import { environment } from '../../environments/environment';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/login`, { email, password }, httpOptions)
      .pipe(
        map(user => {
          if (user && user.accessToken) {
            // store user details in local storage to keep user logged in
            localStorage.setItem('currentUser', user.accessToken);
            this.currentUserSubject.next(user);
          }

          return user;
        })
      );
  }

  register(username: string, email: string, password: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/signup`, { username, email, password }, httpOptions);
  }

  logout() {
    // remove user data from local storage for log out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
