import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { BlogService } from '../services/blog.service';
import { PostModel } from '../models/post.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public posts: PostModel[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.findAll().subscribe((data: PostModel[]) => this.posts = data);
  }

  public create(): void {
    this.blogService.create()
      .pipe(
        switchMap(() => this.blogService.findAll())
      )
      .subscribe((data: PostModel[]) => this.posts = data);
  }
}
