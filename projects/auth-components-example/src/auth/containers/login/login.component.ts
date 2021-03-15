import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthUser, WithAccessToken } from 'leon-angular-utils';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
    }

    ngOnInit() {
    }

    onLoggedIn(authUserWithAccessToken: WithAccessToken<AuthUser>) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('accessToken', authUserWithAccessToken.accessToken);
        }

    }
}
