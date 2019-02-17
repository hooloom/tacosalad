import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pagebuilderDirective } from './page-view/page-builder.directive';
import { pagebuiltComponent } from './page-view/page-built.component';
import { lostviewComponent } from './lost-view/lost-view.component';
import { setviewComponent } from './set-view/set-view.component';
import { uicomponentsModule } from './../uicomponents/ui.module';

@NgModule({
    imports: [
        CommonModule,
        uicomponentsModule
        ],
    declarations: [
        pagebuilderDirective,
        pagebuiltComponent,
        lostviewComponent,
        setviewComponent
    ],
    exports: [
        pagebuiltComponent
    ]
})
export class ViewsModule
{

}