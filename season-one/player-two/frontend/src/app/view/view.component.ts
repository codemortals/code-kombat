import { Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public post: PostModel;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
    ) { }

  ngOnInit() {
    this.blogService.findOneById(this.route.snapshot.params.id).subscribe((post: PostModel) => this.post = post);
  }

}
