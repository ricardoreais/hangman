import { NgModule } from '@angular/core';

import { HangmanGameRoutingModule } from './hangman-game-routing.module';
import { GameWidgetComponent } from './components/game-widget/game-widget.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/hangman-game/', '.json');
}

@NgModule({
  declarations: [GameWidgetComponent],
  imports: [
    HangmanGameRoutingModule,
    SharedModule,
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
