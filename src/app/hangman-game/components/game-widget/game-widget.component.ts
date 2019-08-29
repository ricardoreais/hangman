import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service';

@Component({
  selector: 'app-game-widget',
  templateUrl: './game-widget.component.html',
  styleUrls: ['./game-widget.component.scss']
})
export class GameWidgetComponent implements OnInit {
  word: string;
  wordTemplate: string;

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.word = this.wordService.getRandomWord();
    // Initially we try to guess the word without passing any guessed letter in order to get the word template.
    this.wordTemplate = this.wordService.guessLetter(this.word);
  }

  guessLetter(letter: string) {
    this.wordTemplate = this.wordService.guessLetter(this.word, letter);
  }
}
