import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './list/list.component';
import { BlogViewComponent } from './view/view.component';

const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
        children: [
            {
                path: 'view',
                component: BlogViewComponent,
            },
            {
                path: '',
                component: BlogListComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class RoutingModule {
}
