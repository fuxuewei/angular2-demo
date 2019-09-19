import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteTakerModule } from 'src/voter/votetaker.module';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import {BirthdayModule} from '../birthday/birthday.module'
import { JueJinModule } from 'src/juejin/juejin.module';
import { CountdownParentModule } from 'src/countdown/countdown-parent.module';
// import { CountdownTimerModule } 

/* （https://www.angular.cn/api/core/NgModule） */
@NgModule({
  declarations: [//声明
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BirthdayModule,
    JueJinModule,
    VoteTakerModule,
    CountdownParentModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  providers: [],//导出，全局注册，任何组件可用
  bootstrap: [AppComponent]//应用的主视图
})
export class AppModule { }
