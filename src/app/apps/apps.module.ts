import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIFrameworkModule } from '@modules/ui-framework.module';
import { AppsRoutingModule } from './apps-routing.module';

import { AppsComponent } from './apps.component';

@NgModule({
  imports: [
    CommonModule,
    UIFrameworkModule,
    AppsRoutingModule
  ],
  declarations: [AppsComponent]
})
export class AppsModule { }
