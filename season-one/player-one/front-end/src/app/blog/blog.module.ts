import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';

import { BlogComponent } from './blog.component';
import { BlogCreateComponent } from './create/create.component';
import { BlogListComponent } from './list/list.component';
import { BlogViewComponent } from './view/view.component';

import { ComponentsModule } from '../../components/components.module';

import { RoutingModule } from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        BlogComponent,
        BlogCreateComponent,
        BlogListComponent,
        BlogViewComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        RoutingModule,
        ComponentsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
    ],
})
export class BlogModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faHome, faPlus);
    }
}
