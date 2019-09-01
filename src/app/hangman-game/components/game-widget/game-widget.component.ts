import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { FormControl, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Hangman } from '../../models/hangman.model';

@Component({
  selector: 'app-game-widget',
  templateUrl: './game-widget.component.html',
  styleUrls: ['./game-widget.component.scss']
})
export class GameWidgetComponent implements OnInit {
  letterGuessControl = new FormControl('', [Validators.required, Validators.pattern(new RegExp(/[^\s]/))]);
  user: User;
  hangman: Hangman;
  currentHighscore = 0;
  maxIncorrectGuessCount = environment.maxIncorrectGuessCount;

  constructor(private gameService: GameService, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.CurrentUser;
    this.startGame();
  }

  public guess() {
    const letterGuess = this.letterGuessControl.value;
    this.gameService.guess(letterGuess);
    // Reset the user input.
    this.letterGuessControl.reset();
  }

  public startGame(): void {
    this.gameService.hangman$.subscribe((hangman: Hangman) => {
      this.hangman = hangman;
      this.updateGameState();
    });
    this.gameService.startGame();
  }

  public updateGameState(): void {
    const gameState = this.hangman.gameState;
    if (gameState.victory) {
      this.currentHighscore++;
      // If the currentHighscore is above the user highscore update the user highscore.
      if (this.currentHighscore > this.user.highscore) {
        this.user.highscore = this.currentHighscore;
        this.userService.update(this.user);
      }
    }
    // If the user loses a game reset the current highscore.
    if (gameState.lost) {
      this.currentHighscore = 0;
    }
  }
}
