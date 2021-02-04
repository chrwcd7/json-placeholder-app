import { Component, Input, OnInit } from '@angular/core';

import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  showId = true;
  showUserId = false;

  constructor() { }

  ngOnInit(): void {
  }

  onPostClick(): void {
    this.showId = !this.showId;
    this.showUserId = !this.showUserId;
  }
}
