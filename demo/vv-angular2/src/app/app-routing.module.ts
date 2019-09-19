import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Birthday } from '../birthday/birthday.component'
import { VoteTakerComponent } from '../voter/votetaker.component'
import { CountdownLocalVarParentComponent } from '../countdown/countdown-parent.component'
import { JueJin } from '../juejin/juejin.component'
import {AppComponent} from '../app/app.component'

export const routes: Routes = [
  { path: 'birthday', component: Birthday },
  { path: 'juejin', component: JueJin },
  { path: 'votetaker', component: VoteTakerComponent },
  { path: 'countdownTimer', component: CountdownLocalVarParentComponent },

];

@NgModule({
  exports: [RouterModule]
})

export class AppRoutingModule { }
