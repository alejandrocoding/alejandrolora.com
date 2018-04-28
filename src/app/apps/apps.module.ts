import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIFrameworkModule } from '@modules/ui-framework.module';
import { AppsRoutingModule } from './apps-routing.module';

import { AppsComponent } from './apps.component';
import { AppsService } from './_shared/services/apps.service';

import { FilterByCategoryPipe, SortByNumberPipe } from './_shared/index';

@NgModule({
  imports: [
    CommonModule,
    UIFrameworkModule,
    AppsRoutingModule
  ],
  declarations: [AppsComponent, FilterByCategoryPipe, SortByNumberPipe],
  providers: [AppsService]
})
export class AppsModule { }
