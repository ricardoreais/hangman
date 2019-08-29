import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  words = ['3dhubs', 'marvin', 'print', 'filament', 'order', 'layer'];
  emptyChar = '_ ';
  correctLetters: string[] = [];

  constructor() {}

  public getRandomWord(): string {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  // This could also be implemented with RegEx but it would be harder to read.
  public guessLetter(word: string, letter?: string): string {
    return word.toLowerCase().split('').map((l: string) =>  {
      if (letter && l === letter.toLowerCase() || this.correctLetters.indexOf(l) > -1) {
        this.correctLetters.push(l);
        return l.toUpperCase();
      } else {
        return this.emptyChar;
      }
    }).join('');
  }
}
