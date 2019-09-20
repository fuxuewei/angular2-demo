import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthdayComponent } from './birthday/birthday.component'
import { VoteTakerComponent } from './voter/votetaker.component'
import { CountdownLocalVarParentComponent } from './countdown/countdown-parent.component'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component'
import {AppComponent} from '../app/app.component'

export const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'birthday', component: BirthdayComponent },
  { path: 'home', component: HomeComponent },
  { path: 'votetaker', component: VoteTakerComponent },
  { path: 'countdownTimer', component: CountdownLocalVarParentComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports : [
    RouterModule.forRoot(
      routes,
      {enableTracing : true}
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
