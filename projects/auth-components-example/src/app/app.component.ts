import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationLoaderService } from 'leon-angular-utils';
import { LoginData } from 'auth-components';
import { locale as eng } from './../../i18n/en';
import { locale as cro } from './../../i18n/hr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService, private translationLoaderService: TranslationLoaderService) {
    translationLoaderService.loadTranslations(eng, cro);
    translate.addLangs(['en', 'hr']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    const cacheLang = localStorage.getItem('lang');
    const lang = cacheLang || browserLang;
    translate.use(lang.match(/en|hr/) ? lang : 'en');
  }
  title = 'auth-components-example';

  onLogIn(data: LoginData) {

  }
}
