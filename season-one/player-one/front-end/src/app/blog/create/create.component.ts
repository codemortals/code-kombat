import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './create.component.html',
})
export class BlogCreateComponent implements OnInit {

    public blogForm: FormGroup;

    constructor(
        private form: FormBuilder,
        private router: Router,
        private blogService: BlogService,
    ) { }

    public ngOnInit(): void {
        this.blogForm = this.form.group({
            title: [ undefined, [ Validators.required ] ],
            image: [ undefined, [] ],
        });
    }

    public saveBlog(): void {
        this.blogService
            .create(this.blogForm.getRawValue())
            .subscribe((blog) => {
                console.log(blog);
                this.router.navigate(['/']);
            });
    }

}
