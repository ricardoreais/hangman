import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  emptyChar = environment.emptyChar;
  
  constructor() {}

  public getRandomWord(): string {
    const words = environment.words;
    return words[Math.floor(Math.random() * words.length)];
  }

  // This could also be implemented with RegEx but it would be harder to read.
  public guess(word: string, letterGuess?: string, correctLetters?: string[]): string {
    const wordLetters = word.toLowerCase().split('');
    let wordGuess = '';
    let hasRemainingLetters = false;

    for (let i = 0; i < wordLetters.length; i++) {
      const wordLetter = wordLetters[i];
      if (letterGuess && (wordLetter === letterGuess.toLowerCase() || correctLetters.indexOf(wordLetter) > -1)) {
        correctLetters.push(wordLetter);
        wordGuess += wordLetter;
      } else {
        hasRemainingLetters = true;
        wordGuess += this.emptyChar;
      }
      // If it is not the last character add a space between each letter.
      if (i !== wordLetters.length) {
        wordGuess += ' ';
      }
    }

    if (!hasRemainingLetters) {
      return word;
    }

    return wordGuess;
  }
}
