import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './containers/register/register.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldRequiredModule } from 'leon-angular-utils';
import { LoginComponent } from './containers/login/login.component';
import { AuthComponentsModule } from 'auth-components';
import { InitializerModule } from '../app/initializer.module';


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    },
];

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ResetPasswordComponent
    ],
    imports: [
        CommonModule,
        AuthComponentsModule.forRoot({ apiBasePath: 'https://tenseconds-backend-dev-jve7ga6r2a-ew.a.run.app' }),
        RouterModule.forChild(routes),
        TranslateModule,
        ReactiveFormsModule,
        FieldRequiredModule,
        InitializerModule
    ]
})
export class AuthModule {
}
