import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UIFrameworkModule } from '@modules/ui-framework.module';

import { SidebarComponent } from './sidebar.component';

@NgModule({
    imports: [CommonModule, RouterModule, UIFrameworkModule],
    declarations: [SidebarComponent],
    exports: [SidebarComponent]
})
export class SidebarModule { }
