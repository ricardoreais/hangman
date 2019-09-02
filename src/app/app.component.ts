import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hangman';

  constructor(private readonly translate: TranslateService, public readonly userService: UserService) {}

  ngOnInit(): void {
    const language = this.userService.getLanguage();
    this.changeLanguage(language);
  }

  changeLanguage(language: string): void {
    const user = this.userService.CurrentUser;
    // If there is an active user update his selected language.
    if (user) {
      user.language = language;
      this.userService.update(user);
    }
    this.translate.use(language);
    this.translate.setDefaultLang(language);
  }
}
