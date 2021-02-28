import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponentsModule } from 'auth-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
