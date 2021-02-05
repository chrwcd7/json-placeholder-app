import { Injectable } from '@angular/core';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {
  }

  // Calls the JsonPlaceholder API to get the posts
  getPosts(posts: Post[]): void {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => posts.push(...json))
      .catch(error => console.error('Error:', error));
  }
}
