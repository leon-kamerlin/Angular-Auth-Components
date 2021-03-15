import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthService } from 'auth-components';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (service: AuthService) => {
                return () => {
                    return new Promise((resolve, reject) => {
                        service.me().pipe(
                            first()
                        ).subscribe((user) => {
                            console.log('APP_INITIALIZER', user);
                            resolve(user);
                        }, (err) => {
                            console.log('APP_INITIALIZER', err);
                            resolve(err);
                        });
                    });
                };
            },
            multi: true,
            deps: [AuthService]
        },


    ]
})
export class InitializerModule {
}
