import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app-root/app';
import { SeasonClock } from './cmp/season-clock/season-clock';
import { Animals } from './cmp/animals/animals';
import { CountDown } from './cmp/count-down/count-down';

@NgModule({
  declarations: [
    App,
    SeasonClock,
    Animals,
    CountDown
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
