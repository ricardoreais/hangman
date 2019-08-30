import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  words = ['3dhubs', 'marvin', 'print', 'filament', 'order', 'layer'];
  emptyChar = '_ ';

  constructor() {}

  public getRandomWord(): string {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  // This could also be implemented with RegEx but it would be harder to read.
  public guessLetter(word: string, letter?: string, correctLetters?: string[]): string {
    return word.toLowerCase().split('').map((l: string) =>  {
      if (letter && (l === letter.toLowerCase() || correctLetters.indexOf(l) > -1)) {
        correctLetters.push(l);
        return l;
      } else {
        return this.emptyChar;
      }
    }).join('');
  }
}
