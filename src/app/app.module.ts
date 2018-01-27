import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase Config
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { LayoutModule } from '@static/layout/layout.module';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { RestoreDBService, ThemeService } from '@services/index';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    LayoutModule,
    AppRoutes
  ],
  declarations: [AppComponent],
  providers: [RestoreDBService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
