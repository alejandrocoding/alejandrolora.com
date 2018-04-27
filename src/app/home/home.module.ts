import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIFrameworkModule } from '@modules/ui-framework.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    UIFrameworkModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
