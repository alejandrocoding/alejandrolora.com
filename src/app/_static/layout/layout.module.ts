import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderModule } from '@static/header/header.module';
import { FooterModule } from '@static/footer/footer.module';
import { SidebarModule } from '@static/sidebar/sidebar.module';

import { LayoutComponent } from './layout.component';

import { UIFrameworkModule } from '@modules/ui-framework.module';

@NgModule({
    imports: [CommonModule, RouterModule, HeaderModule, FooterModule, SidebarModule, UIFrameworkModule],
    declarations: [LayoutComponent],
    exports: [LayoutComponent]
})
export class LayoutModule { }
