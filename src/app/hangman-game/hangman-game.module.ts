import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangmanGameRoutingModule } from './hangman-game-routing.module';
import { GameWidgetComponent } from './components/game-widget/game-widget.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    GameWidgetComponent
  ],
  imports: [
    CommonModule,
    HangmanGameRoutingModule,
    UserModule
  ]
})
export class HangmanGameModule { }
