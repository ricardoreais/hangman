import { Guid } from 'guid-typescript';
import { environment } from 'src/environments/environment';

export class User {
    id: Guid;
    name: string;
    highscore: number;
    language: string;

    constructor(name: string) {
        this.id = Guid.create();
        this.name = name;
        this.highscore = 0;
        this.language = environment.defaultLanguage;
    }
}
