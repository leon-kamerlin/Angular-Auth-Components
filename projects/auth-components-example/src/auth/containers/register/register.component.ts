import { Component, OnInit } from '@angular/core';
import { RegisterData } from 'auth-components';

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

    onRegister(data: RegisterData) {

    }
}
