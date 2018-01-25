import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIFrameworkModule } from '@modules/ui-framework.module';
import { BackstageRoutingModule } from './backstage-routing.module';

import { BackstageComponent } from './backstage.component';

@NgModule({
  imports: [
    CommonModule,
    UIFrameworkModule,
    BackstageRoutingModule
  ],
  declarations: [BackstageComponent]
})
export class BackstageModule { }
