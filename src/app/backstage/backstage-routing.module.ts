import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackstageComponent } from './backstage.component';

const routes: Routes = [
  { path: '', component: BackstageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackstageRoutingModule { }
