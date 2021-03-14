import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'hr']);
        translate.setDefaultLang('en');

        const browserLang: string = translate.getBrowserLang();
        const cacheLang = localStorage.getItem('lang');
        const lang = cacheLang || browserLang;
        translate.use(lang.match(/en|hr/) ? lang : 'en');
    }
}
