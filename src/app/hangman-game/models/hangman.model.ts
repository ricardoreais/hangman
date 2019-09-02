import { GameState } from './game-state.model';

export class Hangman {
    word: string;
    wordGuess: string;
    correctLetters: string[];
    incorrectLetters: string[];
    gameState: GameState;

    constructor(word: string) {
        this.word = word;
        this.correctLetters = [];
        this.incorrectLetters = [];
        this.gameState = new GameState();
    }
}
