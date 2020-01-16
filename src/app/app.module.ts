import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormioModule, FormioAppConfig } from 'angular-formio';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FormioModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ {provide: FormioAppConfig, useValue: {
    appUrl: 'https://examples.form.io',
    apiUrl: 'https://api.form.io',
    icons: 'fontawesome'
  }} ]
})
export class AppModule { }
