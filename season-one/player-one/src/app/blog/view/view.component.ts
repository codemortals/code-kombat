import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog.service';
import { Blog } from '../../services/models/blog';

@Component({
    templateUrl: './view.component.html',
    styleUrls: [ './view.component.scss' ],
})
export class BlogViewComponent implements OnInit {

    public blogItem: Blog;

    constructor(
        private blogService: BlogService,
    ) {
    }

    public ngOnInit(): void {
        this.blogService.findOneBlog().subscribe((blog) => this.blogItem = blog);
    }

}
