import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  public login(user: User) {
    return this.http.post(`${this.apiBaseUrl}/login`, user);
  }

  public register(user: User) {
    return this.http.post(`${this.apiBaseUrl}/register`, user);
  }
}