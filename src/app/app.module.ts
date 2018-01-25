import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@static/layout/layout.module';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { ThemeService } from '@services/index';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutes
  ],
  declarations: [AppComponent],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
