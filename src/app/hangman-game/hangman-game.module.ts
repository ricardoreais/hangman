import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangmanGameRoutingModule } from './hangman-game-routing.module';
import { GameWidgetComponent } from './components/game-widget/game-widget.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatIconModule } from '@angular/material/icon';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/hangman-game/', '.json');
}

@NgModule({
  declarations: [GameWidgetComponent],
  imports: [
    CommonModule,
    HangmanGameRoutingModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class HangmanGameModule {}
