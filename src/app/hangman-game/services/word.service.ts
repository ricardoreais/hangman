import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  emptyChar = '_ ';

  constructor() {}

  public getRandomWord(): string {
    const words = environment.words;
    return words[Math.floor(Math.random() * words.length)];
  }

  // This could also be implemented with RegEx but it would be harder to read.
  public guessLetter(word: string, letter?: string, correctLetters?: string[]): string {
    return word
      .toLowerCase()
      .split('')
      .map((l: string) => {
        if (letter && (l === letter.toLowerCase() || correctLetters.indexOf(l) > -1)) {
          correctLetters.push(l);
          return l;
        } else {
          return this.emptyChar;
        }
      })
      .join('');
  }
}
