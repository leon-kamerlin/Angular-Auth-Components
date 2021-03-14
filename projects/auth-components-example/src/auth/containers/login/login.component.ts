import { Component, OnInit } from '@angular/core';
import { AuthUser, WithAccessToken } from 'leon-angular-utils';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    onLoggedIn(authUserWithAccessToken: WithAccessToken<AuthUser>) {
        localStorage.setItem('accessToken', authUserWithAccessToken.accessToken);
    }
}
