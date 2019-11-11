import { NgModule } from '@angular/core';

import { BlogItemModule } from './blog-item/blog-item.module';
import { InputModule } from './input/input.module';

@NgModule({
    imports: [
        BlogItemModule,
        InputModule,
    ],
    exports: [
        BlogItemModule,
        InputModule,
    ],
})
export class ComponentsModule {
}
