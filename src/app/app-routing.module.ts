import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'game',
    loadChildren: () => import('./hangman-game/hangman-game.module').then(mod => mod.HangmanGameModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
