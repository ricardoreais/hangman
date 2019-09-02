import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor() {}

  public getRandomWord(): string {
    const words = environment.words;
    return words[Math.floor(Math.random() * words.length)];
  }
}
