import { Component,Input,OnChanges,OnInit,DoCheck,OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnChanges,OnInit,DoCheck,OnDestroy{
  title = "vv's project home";
  ngOnChanges(changes){
    console.log('ngOnchanges')
  }

  ngOnInit(){
    console.log('ngOnInit')
  }

  ngDoCheck(){
    console.log('ngDoCheck')
  }

  ngOnDestroy(){
    console.log('ngOnDestory')
  }
}
