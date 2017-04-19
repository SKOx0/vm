import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';


import {MainComponent} from './main';
import {HeaderComponent} from './header';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
