import { NgModule } from "@angular/core"
import { VoterComponent } from "./voter.component"
import { VoteTakerComponent } from "./votetaker.component"
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [VoteTakerComponent,VoterComponent],
    exports: [VoteTakerComponent],
    imports: [BrowserModule],
})
export class VoteTakerModule {

}