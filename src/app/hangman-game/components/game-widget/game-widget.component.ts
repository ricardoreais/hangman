import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Hangman } from '../../models/hangman.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-game-widget',
  templateUrl: './game-widget.component.html',
  styleUrls: ['./game-widget.component.scss']
})
export class GameWidgetComponent implements OnInit {
  hangman: Hangman;
  currentHighscore$: BehaviorSubject<number>;
  maxIncorrectGuessCount: number;
  letterGuessControl = new FormControl('');

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.hangman$.subscribe((hangman: Hangman) => {
      this.hangman = hangman;
      // When the hangman is updated, we have new letters that have been guessed by the user and we have to dinamically set a validator.
      // In order to make sure the user does not introduce them again
      this.letterGuessControl.setValidators([
        Validators.required,
        Validators.pattern(new RegExp(/[^\s]/)),
        alreadyUsedValidator(this.hangman)
      ]);
    });
    this.currentHighscore$ = this.gameService.currentHighscore$;
    this.startGame();
  }

  public guess() {
    const letterGuess = this.letterGuessControl.value;
    this.gameService.guess(letterGuess);
    // Reset the user input.
    this.letterGuessControl.reset();
  }

  public startGame(): void {
    this.gameService.startGame();
    this.maxIncorrectGuessCount = this.gameService.maxIncorrectGuessCount;
  }
}

export function alreadyUsedValidator(hangman: Hangman): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (hangman) {
      const alreadyUsed = hangman.incorrectLetters.includes(control.value) || hangman.correctLetters.includes(control.value);
      return alreadyUsed ? { alreadyUsed: { value: true } } : null;
    } else {
      return null;
    }
  };
}
