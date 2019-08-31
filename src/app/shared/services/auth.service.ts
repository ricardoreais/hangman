import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  get IsLogged() {
    return this.currentUser != null;
  }

  // Here we could save the user in the database
  public registerUser(user: User): User {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
    return user;
  }
}
