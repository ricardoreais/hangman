import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service';

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

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.startGame();
  }

  guessLetter(letter: string) {
    const previousGuess = this.wordGuess;
    this.wordGuess = this.wordService.guessLetter(this.word, letter, this.correctLetters);
    if (previousGuess === this.wordGuess) {
      this.incorrectGuessCount++;
    } else {
      this.correctGuessCount++;
    }
  }

  startGame(): void {
    this.word = this.wordService.getRandomWord();
    // Initially we try to guess the word without passing any guessed letter in order to get the word template.
    this.wordGuess = this.wordService.guessLetter(this.word);
    this.correctGuessCount = 0;
    this.incorrectGuessCount = 0;
    this.correctLetters = [];
  }
}
