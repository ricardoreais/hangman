import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service';
import { environment } from 'src/environments/environment';
import { GameState } from '../../models/game-state.model';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-game-widget',
  templateUrl: './game-widget.component.html',
  styleUrls: ['./game-widget.component.scss']
})
export class GameWidgetComponent implements OnInit {
  letterGuessControl = new FormControl('', [Validators.required, Validators.pattern(new RegExp(/[^\s]/))]);
  word: string;
  wordGuess: string;
  correctGuessCount: number;
  incorrectGuessCount: number;
  correctLetters: string[];
  maxIncorrectGuessCount = environment.maxIncorrectGuessCount;
  gameState: GameState;
  user: User;
  currentHighscore = 0;

  constructor(private wordService: WordService, private userService: UserService, private readonly translate: TranslateService) {}

  ngOnInit() {
    this.user = this.userService.CurrentUser;
    this.startGame();
  }

  public guessLetter() {
    const letter = this.letterGuessControl.value;
    const previousGuess = this.wordGuess;
    this.wordGuess = this.wordService.guessLetter(this.word, letter, this.correctLetters);
    if (previousGuess === this.wordGuess) {
      this.incorrectGuessCount++;
    } else {
      this.correctGuessCount++;
    }
    // The user wins the game if his word guess is the same as the expected word.
    this.gameState.victory = this.word === this.wordGuess;
    if (this.gameState.victory) {
      this.currentHighscore++;
      // If the currentHighscore is above the user highscore update the user highscore.
      if (this.currentHighscore > this.user.highscore) {
        this.user.highscore = this.currentHighscore;
        this.userService.update(this.user);
      }
    }
    // The user loses the game if he has a number of incorrect guesses equal or bigger than the maximum of incorrect guesses.
    this.gameState.lost = this.incorrectGuessCount >= this.maxIncorrectGuessCount;
    // If the user loses a game reset the current highscore.
    if (this.gameState.lost) {
      this.currentHighscore = 0;
    }
    this.letterGuessControl.reset();
  }

  public startGame(): void {
    this.word = this.wordService.getRandomWord();
    // Initially we try to guess the word without passing any guessed letter in order to get the word template.
    this.wordGuess = this.wordService.guessLetter(this.word);
    this.correctGuessCount = 0;
    this.incorrectGuessCount = 0;
    this.correctLetters = [];
    this.gameState = new GameState();
  }
}
