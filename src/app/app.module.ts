import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './colors/color/color.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorService } from './services/color.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    ColorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
