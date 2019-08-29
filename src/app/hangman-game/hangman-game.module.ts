import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangmanGameRoutingModule } from './hangman-game-routing.module';
import { GameWidgetComponent } from './components/game-widget/game-widget.component';


@NgModule({
  declarations: [
    GameWidgetComponent
  ],
  imports: [
    CommonModule,
    HangmanGameRoutingModule
  ]
})
export class HangmanGameModule { }
