import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormControl, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Hangman } from '../../models/hangman.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-game-widget',
  templateUrl: './game-widget.component.html',
  styleUrls: ['./game-widget.component.scss']
})
export class GameWidgetComponent implements OnInit {
  letterGuessControl = new FormControl('', [Validators.required, Validators.pattern(new RegExp(/[^\s]/))]);
  hangman$: BehaviorSubject<Hangman>;
  currentHighscore$: BehaviorSubject<number>;
  maxIncorrectGuessCount = environment.maxIncorrectGuessCount;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.startGame();
  }

  public guess() {
    const letterGuess = this.letterGuessControl.value;
    this.gameService.guess(letterGuess);
    // Reset the user input.
    this.letterGuessControl.reset();
  }

  public startGame(): void {
    this.hangman$ = this.gameService.hangman$;
    this.currentHighscore$ = this.gameService.currentHighscore$;
    this.gameService.startGame();
  }
}
