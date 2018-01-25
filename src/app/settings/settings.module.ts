import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIFrameworkModule } from '@modules/ui-framework.module';
import { SettingsRoutingModule } from './settings-routing.module';

import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UIFrameworkModule,
    SettingsRoutingModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
