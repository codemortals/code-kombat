import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Blog } from './models/blog';

@Injectable({
    providedIn: 'root',
})
export class BlogService {

    constructor(
        private http: HttpClient,
    ) {
    }

    public findAllBlogs(): Observable<Array<Blog>> {
        return this.http.get<Array<Blog>>('/assets/blog/list.json');
    }

    public findOneBlog(): Observable<Blog> {
        return this.http.get<Blog>('/assets/blog/item.json');
    }

}
