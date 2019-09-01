import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WordService } from './word.service';
import { Hangman } from '../models/hangman.model';
import { GameState } from '../models/game-state.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  emptyChar = environment.emptyChar;
  maxIncorrectGuessCount = environment.maxIncorrectGuessCount;
  hangman: Hangman;

  constructor(private readonly wordService: WordService) {}

  public startGame(): Hangman {
    const randomWord = this.wordService.getRandomWord();
    this.hangman = new Hangman(randomWord);
    // Initially we try to guess the word without passing any guessed letter in order to get the word template.
    this.hangman.wordGuess = this.guess();
    return this.hangman;
  }

  public guess(letterGuess?: string): string {
    const wordLetters = this.hangman.word.toLowerCase().split('');
    let wordGuess = '';
    let isCorrectGuess = false;
    let hasRemainingLetters = false;

    for (let i = 0; i < wordLetters.length; i++) {
      const wordLetter = wordLetters[i];

      // If the letter guess is correct.
      if (letterGuess && wordLetter === letterGuess.toLowerCase()) {
        isCorrectGuess = true;
        this.hangman.correctLetters.push(wordLetter);
      }

      // If we already guessed the letter, add it to the word guess. Else add an empty char.
      if (this.hangman.correctLetters.indexOf(wordLetter) > -1) {
        wordGuess += wordLetter;
      } else {
        hasRemainingLetters = true;
        wordGuess += this.emptyChar;
      }

      // If it isn't the last letter, add a space between each letter.
      if (i !== wordLetters.length) {
        wordGuess += ' ';
      }
    }

    // If none of the word letters matched our guess, add it to the incorrect letters.
    if (letterGuess && !isCorrectGuess) {
      this.hangman.incorrectLetters.push(letterGuess);
    }

    // If we've guessed all the letters return the "normal" word without spaces in between each letter.
    if (!hasRemainingLetters) {
      this.hangman.wordGuess = this.hangman.word;
    } else {
      this.hangman.wordGuess = wordGuess;
    }

    return this.hangman.wordGuess;
  }

  public updateGameState(): GameState {
    const gameState = this.hangman.gameState;
    // The user wins the game if his word guess is the same as the expected word.
    gameState.victory = this.hangman.word === this.hangman.wordGuess;

    // The user loses the game if he has a number of incorrect guesses equal or bigger than the maximum of incorrect guesses.
    gameState.lost = this.hangman.incorrectLetters.length >= this.maxIncorrectGuessCount;
    return gameState;
  }
}
