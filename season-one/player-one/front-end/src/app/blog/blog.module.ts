import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './list/list.component';
import { BlogViewComponent } from './view/view.component';

import { ComponentsModule } from '../../components/components.module';

import { RoutingModule } from './routing.module';

@NgModule({
    declarations: [
        BlogComponent,
        BlogListComponent,
        BlogViewComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        RoutingModule,
        ComponentsModule,
    ],
})
export class BlogModule {
}
