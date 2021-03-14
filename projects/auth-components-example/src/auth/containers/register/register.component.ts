import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'leon-angular-utils';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    onRegister(authUser: AuthUser) {
        console.log('onRegister', authUser);
    }
}
