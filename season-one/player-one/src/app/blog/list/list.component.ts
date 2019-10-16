import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog.service';
import { Blog } from '../../services/models/blog';

@Component({
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.scss' ],
})
export class BlogListComponent implements OnInit {

    public blogList: Array<Blog>;

    constructor(
        private blogService: BlogService,
    ) {
    }

    public ngOnInit(): void {
        this.blogService.findAllBlogs().subscribe((blogList) => this.blogList = blogList);
    }

}
