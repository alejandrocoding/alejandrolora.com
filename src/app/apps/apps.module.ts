import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIFrameworkModule } from '@modules/ui-framework.module';
import { AppsRoutingModule } from './apps-routing.module';

import { AppsComponent } from './apps.component';
import { AppsService } from './_shared/services/apps.service';

@NgModule({
  imports: [
    CommonModule,
    UIFrameworkModule,
    AppsRoutingModule
  ],
  declarations: [AppsComponent],
  providers: [AppsService]
})
export class AppsModule { }
