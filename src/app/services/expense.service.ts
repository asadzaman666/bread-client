import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  dat = localStorage.getItem('currentUser');
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      // Authorization: `Bearer ${this.dat}`
    })
  };
  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get<any>(`${apiUrl}/expenses`, this.httpOptions);
  }

  forgeUserExpense(data: {}) {
    return this.http.post<any>(`${apiUrl}/expenses`, data, this.httpOptions);
  }

  updateUserExpense(data: {}, id: string) {
    return this.http.put<any>(`${apiUrl}/expenses/${id}`, data, this.httpOptions);
  }

  deleteUserExpense(id: string) {
    return this.http.delete<any>(`${apiUrl}/expenses/${id}`, this.httpOptions);
  }
}
