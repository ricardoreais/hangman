import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service';
import { environment } from 'src/environments/environment';
import { GameState } from '../../models/game-state.model';

@Component({
  selector: 'app-game-widget',
  templateUrl: './game-widget.component.html',
  styleUrls: ['./game-widget.component.scss']
})
export class GameWidgetComponent implements OnInit {
  word: string;
  wordGuess: string;
  correctGuessCount: number;
  incorrectGuessCount: number;
  correctLetters: string[];
  maxIncorrectGuessCount = environment.maxIncorrectGuessCount;
  gameState: GameState;

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.startGame();
  }

  public guessLetter(letter: string) {
    const previousGuess = this.wordGuess;
    this.wordGuess = this.wordService.guessLetter(this.word, letter, this.correctLetters);
    if (previousGuess === this.wordGuess) {
      this.incorrectGuessCount++;
    } else {
      this.correctGuessCount++;
    }
    // The user wins the game if his word guess is the same as the expected word.
    this.gameState.victory = this.word === this.wordGuess;
    // The user loses the game if he has a number of incorrect guesses equal or bigger than the maximum of incorrect guesses.
    this.gameState.lost = this.incorrectGuessCount >= this.maxIncorrectGuessCount;
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
