import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameWidgetComponent } from './components/game-widget/game-widget.component';


const routes: Routes = [
  {
    path: '',
    component: GameWidgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HangmanGameRoutingModule { }
