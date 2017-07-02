import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SliderService } from './slider/slider.service';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
