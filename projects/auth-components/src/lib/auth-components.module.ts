import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldRequiredModule } from 'leon-angular-utils';
import { LoginFormComponent } from './login-form/login-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';


@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        ResetPasswordFormComponent,
    ],
    imports: [
        CommonModule,
        FieldRequiredModule,
        ReactiveFormsModule,
        TranslateModule,
        RouterModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatButtonModule,
        MatCheckboxModule
    ],
    exports: [
        LoginFormComponent,
        RegisterFormComponent,
        ResetPasswordFormComponent,
    ]
})
export class AuthComponentsModule {
}
