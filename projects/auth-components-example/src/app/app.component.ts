import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationLoaderService } from 'leon-angular-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService, private translationLoaderService: TranslationLoaderService) {

  }
  title = 'auth-components-example';
}
