import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIFrameworkModule } from '@modules/ui-framework.module';

import { HeaderComponent } from './header.component';
import { HeaderI18NService } from './header-i18n.service';

@NgModule({
    imports: [CommonModule, UIFrameworkModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    providers: [HeaderI18NService]
})
export class HeaderModule { }
