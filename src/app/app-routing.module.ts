import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'game',
    canLoad: [AuthGuard],
    loadChildren: () => import('./hangman-game/hangman-game.module').then(mod => mod.HangmanGameModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
