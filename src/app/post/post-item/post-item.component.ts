import { Component, OnInit, Input } from '@angular/core';
import { Guid } from 'guid-typescript';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() id: Guid;
  public post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.post = this.postService.getPost(this.id);
  }

  loveItsUp() {
    this.post.loveIts++;
  }

  loveItsDown() {
    this.post.loveIts--;
  }
}
