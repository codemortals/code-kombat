import { Component, Input } from '@angular/core';

import { Blog } from '../../app/services/models/blog';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: [ './blog-item.component.scss' ],
})
export class BlogItemComponent {

    @Input()
    public blog: Blog;

    @Input()
    public hasLink = false;

}
