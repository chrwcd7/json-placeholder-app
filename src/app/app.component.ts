import { Component, OnInit } from '@angular/core';

import { PostService } from './post/post.service';
import { Post } from './post/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  // Calls the service method to get the posts
  getPosts(): void {
    this.postService.getPosts(this.posts);
  }

}
