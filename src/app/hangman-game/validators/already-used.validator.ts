import { Hangman } from '../models/hangman.model';
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function alreadyUsedValidator(hangman: Hangman): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (hangman) {
      const alreadyUsed = hangman.incorrectLetters.includes(control.value) || hangman.correctLetters.includes(control.value);
      return alreadyUsed ? { alreadyUsed: { value: true } } : null;
    } else {
      return null;
    }
  };
}
