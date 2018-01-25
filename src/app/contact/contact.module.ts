import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIFrameworkModule } from '@modules/ui-framework.module';
import { ContactRoutingModule } from './contact-routing.module';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    UIFrameworkModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
