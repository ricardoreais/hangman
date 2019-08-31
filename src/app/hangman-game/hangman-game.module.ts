import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangmanGameRoutingModule } from './hangman-game-routing.module';
import { GameWidgetComponent } from './components/game-widget/game-widget.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    GameWidgetComponent
  ],
  imports: [
    CommonModule,
    HangmanGameRoutingModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class HangmanGameModule { }
