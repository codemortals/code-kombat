import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { PostModel } from '../models/post.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public posts: PostModel;

  constructor(private blogService: BlogService) { }

  ngOnInit() {

  }

}
