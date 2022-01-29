import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppHeader} from './header/app.header';
import { AppHome } from './home/app.home';
import { HttpClientModule } from '@angular/common/http';
import { AppSettings } from './settings-modal/app.settings-modal';

@NgModule({
  declarations: [
    AppComponent,
    AppHome,
    AppHeader,
    AppSettings,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
