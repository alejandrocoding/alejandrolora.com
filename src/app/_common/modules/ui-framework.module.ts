import { NgModule } from '@angular/core';
import { FlexModule } from './flex.module';
import { MateraialModule } from './material.module';

@NgModule({
    imports: [FlexModule, MateraialModule],
    exports: [FlexModule, MateraialModule]
})
export class UIFrameworkModule { }
