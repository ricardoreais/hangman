// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  maxIncorrectGuessCount: 5,
  defaultLanguage: 'pt',
  emptyChar: '_',
  firebase: {
    apiKey: 'AIzaSyDp5IxedmEALhzu22hmw1cpzc8Y1fhwdqs',
    authDomain: 'hangman-eaaf4.firebaseapp.com',
    databaseURL: 'https://hangman-eaaf4.firebaseio.com',
    projectId: 'hangman-eaaf4',
    storageBucket: 'hangman-eaaf4.appspot.com',
    messagingSenderId: '305621710198',
    appId: '1:305621710198:web:82ff6b6210024670b3f657'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
