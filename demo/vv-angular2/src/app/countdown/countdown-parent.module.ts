import { NgModule } from "@angular/core"
import { CountdownTimerComponent } from "./countdown-timer.component"
import { CountdownLocalVarParentComponent } from "./countdown-parent.component"
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [CountdownLocalVarParentComponent,CountdownTimerComponent],
    exports: [CountdownLocalVarParentComponent],
    imports: [BrowserModule],
})
export class CountdownParentModule {

}