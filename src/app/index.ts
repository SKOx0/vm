import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';


import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {ParticleComponent} from './components/particle';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    ParticleComponent
  ],
  providers: [
     
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
