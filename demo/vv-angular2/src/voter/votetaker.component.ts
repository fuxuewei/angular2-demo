import { Component }      from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-vote-taker',
  templateUrl: './votetaker.component.html'
})
export class VoteTakerComponent {
constructor(private router: Router){
}
  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];
 
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}