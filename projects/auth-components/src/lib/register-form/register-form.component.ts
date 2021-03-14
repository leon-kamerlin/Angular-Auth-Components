import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../auth.service';
import { AuthUser, TranslationLoaderService } from 'leon-angular-utils';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConnectionService } from 'ng-connection-service';
import { TranslateService } from '@ngx-translate/core';
import { locale as eng } from '../i18n/en';
import { locale as cro } from '../i18n/hr';

export interface RegisterData {
    email: string;
    firstName?: string;
    lastName?: string;
    password: string;
}

@Component({
    selector: 'lib-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
    form: FormGroup;
    loading = false;

    @Output()
    register: EventEmitter<AuthUser> = new EventEmitter<AuthUser>();

    constructor(
        private fb: FormBuilder,
        private service: AuthService,
        private snackBar: MatSnackBar,
        private connectionService: ConnectionService,
        private translate: TranslateService,
        private translationLoaderService: TranslationLoaderService
    ) {
        translationLoaderService.loadTranslations(eng, cro);

        const password = new FormControl(null, Validators.required);
        const confirmPassword = new FormControl(null, CustomValidators.equalTo(password));


        this.form = this.fb.group({
            email: [null, Validators.compose([Validators.required, CustomValidators.email])],
            password,
            confirmPassword
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

    get confirmPassword(): FormControl {
        return this.form.get('confirmPassword') as FormControl;
    }

    onSubmit(data: RegisterData) {
        this.loading = true;
        this.service.register(data).subscribe((res) => {
            this.loading = false;
            this.register.emit(res);
            this.openSnackBar(`Welcome ${res.email}`, 'SUCCESS');
        }, (err) => {
            this.loading = false;
            this.openSnackBar('Your email or password is incorrect', 'FAILURE');
        });
    }

    private openSnackBar(message: string, action?: string) {
        return this.snackBar.open(message, action, {
            duration: 3000,
        });
    }

}
