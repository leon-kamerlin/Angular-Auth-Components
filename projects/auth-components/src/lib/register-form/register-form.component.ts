import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

export interface RegisterData {
    email: string;
    password: string;
}

@Component({
    selector: 'lib-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
    form: FormGroup;
    @Output()
    submitted: EventEmitter<RegisterData> = new EventEmitter<RegisterData>();

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        const password = new FormControl('', Validators.required);
        const confirmPassword = new FormControl('', CustomValidators.equalTo(password));


        this.form = this.fb.group({
            email: [null, Validators.compose([Validators.required, CustomValidators.email])],
            password,
            confirmPassword
        });
    }

    get email(): FormControl {
        return this.form.get('email') as FormControl;
    }

    get password(): FormControl {
        return this.form.get('password') as FormControl;
    }

    get confirmPassword(): FormControl {
        return this.form.get('confirmPassword') as FormControl;
    }

}
