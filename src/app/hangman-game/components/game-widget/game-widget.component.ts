import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Hangman } from '../../models/hangman.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { alreadyUsedValidator } from '../../validators/already-used.validator';


@Component({
  selector: 'app-game-widget',
  templateUrl: './game-widget.component.html',
  styleUrls: ['./game-widget.component.scss']
})
export class GameWidgetComponent implements OnInit, OnDestroy {
  hangman: Hangman;
  currentHighscore$: BehaviorSubject<number>;
  maxIncorrectGuessCount: number;
  letterGuessControl = new FormControl('');
  destroy$ = new Subject<void>();

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.hangman$
    // Let the hangman$ stream live until the destroy$ Subject gets a value.
    .pipe(takeUntil(this.destroy$))
    .subscribe((hangman: Hangman) => {
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

  ngOnDestroy() {
    // When the component get's destroyed, pass something to the destroy$ Subject.
    this.destroy$.next();
    this.destroy$.complete();
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
