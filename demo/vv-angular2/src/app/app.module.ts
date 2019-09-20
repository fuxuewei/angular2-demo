import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteTakerModule } from 'src/app/voter/votetaker.module';
import { CountdownParentModule } from 'src/app/countdown/countdown-parent.module';

import { BirthdayComponent } from './birthday/birthday.component'
import { HomeComponent } from 'src/app/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { CountdownTimerModule } 

/* （https://www.angular.cn/api/core/NgModule） */
@NgModule({
  declarations: [//声明
    AppComponent, 
    PageNotFoundComponent, 
    BirthdayComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VoteTakerModule,
    CountdownParentModule
  ],
  providers: [],//导出，全局注册，任何组件可用
  bootstrap: [AppComponent]//应用的主视图
})
export class AppModule { }
