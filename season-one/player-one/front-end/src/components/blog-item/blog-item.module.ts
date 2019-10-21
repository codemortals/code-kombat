import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogItemComponent } from './blog-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BlogItemComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        BlogItemComponent,
    ],
})
export class BlogItemModule {
}
