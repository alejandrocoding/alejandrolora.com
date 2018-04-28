import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesBooksComponent } from './courses-books.component';

const routes: Routes = [
  { path: '', component: CoursesBooksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesBooksRoutingModule { }
