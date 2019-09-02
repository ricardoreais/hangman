import { NgModule } from '@angular/core';

import { HangmanGameRoutingModule } from './hangman-game-routing.module';
import { GameWidgetComponent } from './components/game-widget/game-widget.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GameWidgetComponent],
  imports: [
    HangmanGameRoutingModule,
    SharedModule
  ]
})
export class HangmanGameModule {}
