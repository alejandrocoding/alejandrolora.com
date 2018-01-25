import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIFrameworkModule } from '@modules/ui-framework.module';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    UIFrameworkModule,
    BlogRoutingModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
