import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AUTH_CONFIG_TOKEN, AuthConfig } from './auth-components.module';
import { LoginData } from './login-form/login-form.component';
import { RegisterData } from './register-form/register-form.component';
import { AuthUser, WithAccessToken } from 'leon-angular-utils';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        @Inject(AUTH_CONFIG_TOKEN) private config: AuthConfig,
        private http: HttpClient
    ) {
    }

    login(data: LoginData): Observable<WithAccessToken<AuthUser>> {
        return this.http.post<WithAccessToken<AuthUser>>(`${this.config.apiBasePath}/auth/login`, data);
    }

    register(data: RegisterData): Observable<AuthUser> {
        return this.http.post<AuthUser>(`${this.config.apiBasePath}/auth/register`, data);
    }

    resetPassword(email: string): Observable<{ success: boolean }> {
        return this.http.post<{ success: boolean }>(`${this.config.apiBasePath}/auth/reset-password`, { email });
    }

    me(): Observable<AuthUser> {
        return this.http.get<AuthUser>(`${this.config.apiBasePath}/auth/me`);
    }
}
