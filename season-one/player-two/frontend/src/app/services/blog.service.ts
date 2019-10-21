import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { PostModel } from '../models/post.model';

@Injectable()
export class BlogService {

  private posts: PostModel[] = [
    {
      id: 1,
      title: 'Post 1',
      subtitle: 'morbi tincidunt ornare ',
      image: 'https://mooshme.com/wp-content/uploads/2017/08/cute-2500929-1200x800.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Porttitor lacus luctus accumsan tortor. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Pharetra et ultrices neque ornare aenean euismod. Turpis cursus in hac habitasse platea dictumst. Mi eget mauris pharetra et ultrices neque ornare. Aliquam id diam maecenas ultricies. Placerat orci nulla pellentesque dignissim enim. A erat nam at lectus urna. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Amet venenatis urna cursus eget. Hendrerit gravida rutrum quisque non tellus orci. Leo in vitae turpis massa sed. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Bibendum neque egestas congue quisque egestas diam' },
    {
      id: 2,
      title: 'Post 2',
      subtitle: 'A erat nam at lectus urna',
      image: 'https://www.vets4pets.com/siteassets/species/rabbit/bunny-in-field.jpg?width=1040',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Porttitor lacus luctus accumsan tortor. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Pharetra et ultrices neque ornare aenean euismod. Turpis cursus in hac habitasse platea dictumst. Mi eget mauris pharetra et ultrices neque ornare. Aliquam id diam maecenas ultricies. Placerat orci nulla pellentesque dignissim enim. A erat nam at lectus urna. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Amet venenatis urna cursus eget. Hendrerit gravida rutrum quisque non tellus orci. Leo in vitae turpis massa sed. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Bibendum neque egestas congue quisque egestas diam' },
    {
      id: 3,
      title: 'Post 3',
      subtitle: 'nullam non nisi est sit amet',
      image: 'https://www.vets4pets.com/siteassets/species/rabbit/two-rabbits-playing.jpg?width=1040',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Porttitor lacus luctus accumsan tortor. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Pharetra et ultrices neque ornare aenean euismod. Turpis cursus in hac habitasse platea dictumst. Mi eget mauris pharetra et ultrices neque ornare. Aliquam id diam maecenas ultricies. Placerat orci nulla pellentesque dignissim enim. A erat nam at lectus urna. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Amet venenatis urna cursus eget. Hendrerit gravida rutrum quisque non tellus orci. Leo in vitae turpis massa sed. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Bibendum neque egestas congue quisque egestas diam' },
  ];

  findAll(): Observable<PostModel[]> {
    return of(this.posts)
  }

  findOneById(id: number): Observable<PostModel> {
    return of(this.posts.find((post: PostModel) => post.id = id));
  }
}
