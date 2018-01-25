import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UIFrameworkModule } from '@modules/ui-framework.module';
import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';

import { AboutI18NService } from './_shared/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UIFrameworkModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent],
  providers: [AboutI18NService]
})
export class AboutModule { }
