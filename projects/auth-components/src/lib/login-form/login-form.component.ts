import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface LoginData {
    email: string;
    password: string;
    stayLoggedIn: boolean;
}

@Component({
    selector: 'lib-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    form: FormGroup;

    @Output()
    submitted: EventEmitter<LoginData> = new EventEmitter<LoginData>();

    constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
        this.form = this.fb.group({
            email: [null, Validators.compose([Validators.required])],
            password: [null, Validators.compose([Validators.required])],
            stayLoggedIn: [false, Validators.required]
        });
    }

    ngOnInit() {
    }

    get email(): FormControl {
        return this.form.get('email') as FormControl;
    }

    get password(): FormControl {
        return this.form.get('password') as FormControl;
    }

    get stayLoggedIn(): FormControl {
        return this.form.get('stayLoggedIn') as FormControl;
    }
}
