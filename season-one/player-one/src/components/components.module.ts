import { NgModule } from '@angular/core';

import { BlogItemModule } from './blog-item/blog-item.module';

@NgModule({
    imports: [
        BlogItemModule,
    ],
    exports: [
        BlogItemModule,
    ],
})
export class ComponentsModule {
}
