import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username = new FormControl('');

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  public register(): void {
    const newUser = new User(this.username.value);
    this.authService.registerUser(newUser);
  }
}
