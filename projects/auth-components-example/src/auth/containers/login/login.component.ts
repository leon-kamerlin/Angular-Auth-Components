import { Component, OnInit } from '@angular/core';
import { LoginData } from 'auth-components';

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

    onLogIn(data: LoginData) {

    }
}
