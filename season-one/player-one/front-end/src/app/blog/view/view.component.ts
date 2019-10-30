import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog.service';
import { Blog } from '../../services/models/blog';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './view.component.html',
    styleUrls: [ './view.component.scss' ],
})
export class BlogViewComponent implements OnInit {

    public blogItem: Blog;

    constructor(
        private route: ActivatedRoute,
        private blogService: BlogService,
    ) { }

    public ngOnInit(): void {
        const blogId = this.route.snapshot.params.blogId;
        this.blogService.findOneBlog(blogId).subscribe((blog) => this.blogItem = blog);
    }

}
