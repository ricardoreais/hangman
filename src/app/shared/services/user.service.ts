import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  get IsLogged() {
    return this.currentUser != null;
  }

  get CurrentUser() {
    return this.currentUser;
  }

  // Here we could save the user in the database
  public register(user: User): User {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
    return user;
  }

  // This method contains duplicate code (same as register), but if I had an API it would call 2 different methods.
  // And it would use an http PUT instead (update user) of an http POST (register user).
  public update(user: User): User {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
    return user;
  }
}
