import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post = new Post();
  isNewPost: Boolean = true;
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (null !== id) {
      this.post = this.postService.getPost(Guid.parse(id));
      this.isNewPost = false;
    }
    this.initForm();
  }

  initForm() {
    console.log(this.post);
    this.postForm = this.formBuilder.group({
      title: [this.post.title, Validators.required],
      content: [this.post.content, Validators.required],
    });
  }

  onSubmitForm() {
    this.post.title = this.postForm.value['title'];
    this.post.content = this.postForm.value['content'];

    if (this.isNewPost) {
      this.postService.addPost(this.post);
    } else {
      this.postService.updatePost(this.post);
    }

    this.router.navigate(['/post']);
  }
}
