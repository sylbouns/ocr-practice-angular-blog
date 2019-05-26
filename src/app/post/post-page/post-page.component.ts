import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  public post: Post;

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.post = this.postService.getPost(Guid.parse(id));
  }

  loveItsUp() {
    this.post.loveIts++;
  }

  loveItsDown() {
    this.post.loveIts--;
  }
}
