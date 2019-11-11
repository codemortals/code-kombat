import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { PostModel } from '../models/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) {}

  private posts: PostModel[] = [];

  create(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('http://localhost:3001/fake');
  }

  findAll(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('http://localhost:3001/blogs');
  }

  findOneById(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`http://localhost:3001/blogs/${id}`);
  }
}
