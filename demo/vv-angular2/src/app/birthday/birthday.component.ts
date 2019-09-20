import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"

@Component({
    selector:'app-birthday',
    templateUrl: './birthday.component.html'
})

export class BirthdayComponent{
    constructor(private router: Router){
    }
    birthday: Date = new Date(1994, 11, 11);
    user: Object = {
        name: 'vv',
        age : '24'
    }
}