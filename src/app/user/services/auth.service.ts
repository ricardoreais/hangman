import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  constructor() { }

  // Here we could save the user in the database
  public registerUser(user: User): User {
    this.currentUser = user;
    return user;
  }
}
