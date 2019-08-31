import { Guid } from 'guid-typescript';

export class User {
    id: Guid;
    name: string;
    highscore: number;

    constructor(name: string) {
        this.id = Guid.create();
        this.name = name;
        this.highscore = 0;
    }
}
