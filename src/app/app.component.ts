import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hangman';

  constructor(private readonly translate: TranslateService, private readonly userService: UserService) {}

  ngOnInit(): void {
    this.translate.setDefaultLang(environment.defaultLanguage);
    this.translate.use(environment.defaultLanguage);
  }

  changeLanguage(languageCode: string): void {
    this.translate.use(languageCode);
    this.translate.setDefaultLang(languageCode);
  }
}
