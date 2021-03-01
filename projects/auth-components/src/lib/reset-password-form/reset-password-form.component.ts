import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
    selector: 'lib-reset-password-form',
    templateUrl: './reset-password-form.component.html',
    styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {
    @Output()
    submitted: EventEmitter<string> = new EventEmitter<string>();
    form: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            email: [
                null, Validators.compose([Validators.required, CustomValidators.email])
            ]
        });
    }


    get email(): FormControl {
        return this.form.get('email') as FormControl;
    }

}
