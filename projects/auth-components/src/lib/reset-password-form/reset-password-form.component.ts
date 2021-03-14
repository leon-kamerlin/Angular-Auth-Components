import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConnectionService } from 'ng-connection-service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationLoaderService } from 'leon-angular-utils';
import { locale as eng } from '../i18n/en';
import { locale as cro } from '../i18n/hr';

@Component({
    selector: 'lib-reset-password-form',
    templateUrl: './reset-password-form.component.html',
    styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {
    form: FormGroup;
    loading = false;

    @Output()
    resetSuccess: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    failure: EventEmitter<Error> = new EventEmitter<Error>();

    constructor(
        private fb: FormBuilder,
        private service: AuthService,
        private snackBar: MatSnackBar,
        private connectionService: ConnectionService,
        private translate: TranslateService,
        private translationLoaderService: TranslationLoaderService
    ) {
        translationLoaderService.loadTranslations(eng, cro);
        this.form = this.fb.group({
            email: [
                null, Validators.compose([Validators.required, CustomValidators.email])
            ]
        });
    }

    ngOnInit() {
    }


    get email(): FormControl {
        return this.form.get('email') as FormControl;
    }

    onSubmit(email: string) {
        this.loading = true;
        this.service.resetPassword(email).subscribe((res) => {
            this.loading = false;
            this.resetSuccess.emit();
            this.openSnackBar(`We have send you an recovery email}`, 'SUCCESS');
        }, (_) => {
            this.loading = false;
            this.openSnackBar('Something went wrong', 'FAILURE');
        });
    }

    private openSnackBar(message: string, action?: string) {
        return this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
}
