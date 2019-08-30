export class GameState {
    victory: boolean;
    lost: boolean;

    // The game is over if the user has either won or lost.
    get gameOver(): boolean {
        return this.victory || this.lost;
    }
}
