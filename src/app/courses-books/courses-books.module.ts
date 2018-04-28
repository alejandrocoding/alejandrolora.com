import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIFrameworkModule } from '@modules/ui-framework.module';
import { CoursesBooksRoutingModule } from './courses-books-routing.module';

import { CoursesBooksComponent } from './courses-books.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UIFrameworkModule,
    CoursesBooksRoutingModule
  ],
  declarations: [CoursesBooksComponent]
})
export class CoursesBooksModule { }
