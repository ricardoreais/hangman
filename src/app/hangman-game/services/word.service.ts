import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Word } from 'src/app/shared/models/word.model';
import { firestore } from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  public word: Observable<Word>;
  private wordsCollection: firestore.CollectionReference;

  constructor(private db: AngularFirestore) {
    this.wordsCollection = this.db.collection<Word>('words').ref;
  }

  public getRandomWord(): Observable<string> {
    const random = this.db.createId();
    return from(
      this.wordsCollection
        .where(firestore.FieldPath.documentId(), '>=', random)
        .orderBy(firestore.FieldPath.documentId())
        .limit(1)
        .get()
    ).pipe(
      map(snapshot => {
        if (snapshot.size > 0) {
          const word = snapshot.docs[0];
          return word.data().value;
        }
      })
    );
  }
}
