import { NgModule } from '@angular/core';
import { AuthComponentsComponent } from './auth-components.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FieldRequiredModule } from 'leon-angular-utils';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AuthComponentsComponent,
    LoginFormComponent
  ],
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule,
    FieldRequiredModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot([]),
    BrowserAnimationsModule
  ],
  exports: [
    AuthComponentsComponent,
    LoginFormComponent
  ]
})
export class AuthComponentsModule {
}
