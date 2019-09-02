import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  usernameControl = new FormControl('');

  constructor(private userService: UserService) {}

  ngOnInit() {}

  public register(): void {
    const newUser = new User(this.usernameControl.value);
    this.userService.register(newUser);
  }
}
