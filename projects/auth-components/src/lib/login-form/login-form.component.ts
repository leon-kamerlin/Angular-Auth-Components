import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthUser, TranslationLoaderService, WithAccessToken } from 'leon-angular-utils';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConnectionService } from 'ng-connection-service';
import { TranslateService } from '@ngx-translate/core';
import { locale as eng } from '../i18n/en';
import { locale as cro } from '../i18n/hr';
import { combineLatest, Observable, of } from 'rxjs';
import { first, mergeMap, tap } from 'rxjs/operators';

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
    loading = false;

    @Output()
    loggedIn: EventEmitter<WithAccessToken<AuthUser>> = new EventEmitter<WithAccessToken<AuthUser>>();

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
            email: [null, Validators.compose([Validators.required, Validators.email])],
            password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
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

    get welcome$(): Observable<string> {
        return this.translate.get('welcome').pipe(
            first()
        );
    }

    get failureMessage$(): Observable<string> {
        return this.translate.get('yourEmailOrPasswordIsIncorrect').pipe(
            first()
        );
    }


    onSubmit(data: LoginData) {
        this.loading = true;

        return combineLatest([this.welcome$, this.failureMessage$]).pipe(
            mergeMap(([welcome, message]) => {
                return this.service.login(data).pipe(
                    tap((res) => {
                        this.loading = false;
                        this.loggedIn.emit(res);
                        this.openSnackBar(`${welcome} ${res.email}`, 'SUCCESS');
                    }, (err) => {
                        this.loading = false;
                        this.openSnackBar(message, 'FAILURE');
                    })
                );
            })
        ).subscribe();
    }

    private openSnackBar(message: string, action?: string) {
        return this.snackBar.open(message, action, {
            duration: 3000,
        });
    }
}
