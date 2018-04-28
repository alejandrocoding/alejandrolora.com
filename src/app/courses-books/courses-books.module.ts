import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIFrameworkModule } from '@modules/ui-framework.module';
import { CoursesBooksRoutingModule } from './courses-books-routing.module';

import { CoursesBooksComponent } from './courses-books.component';
import { CoursesService, BooksService } from './_shared/index';

import { SortByNumberPipe } from './_shared/index';

@NgModule({
  imports: [
    CommonModule,
    UIFrameworkModule,
    CoursesBooksRoutingModule
  ],
  declarations: [CoursesBooksComponent, SortByNumberPipe],
  providers: [CoursesService, BooksService]
})
export class CoursesBooksModule { }
