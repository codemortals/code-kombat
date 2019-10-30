import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Blog, RestList } from './models';

@Injectable({
    providedIn: 'root',
})
export class BlogService {

    constructor(
        private http: HttpClient,
    ) { }

    public create(blog: Blog): Observable<Blog> {
        return this.http.post<Blog>('http://localhost:3000/blog', blog);
    }

    public findAllBlogs(): Observable<RestList<Blog>> {
        return this.http.get<RestList<Blog>>('http://localhost:3000/blog');
    }

    public findOneBlog(blogId: string): Observable<Blog> {
        return this.http.get<Blog>(`http://localhost:3000/blog/${blogId}`);
    }

}
