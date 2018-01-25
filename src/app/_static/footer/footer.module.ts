import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';

import { UIFrameworkModule } from '@modules/ui-framework.module';

@NgModule({
    imports: [CommonModule, UIFrameworkModule],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})
export class FooterModule { }
