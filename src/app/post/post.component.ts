import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  loveIts = 0;
  created_at = new Date();

  constructor() { }

  ngOnInit() {
  }

  loveItsUp() {
    this.loveIts++;
  }

  loveItsDown() {
    this.loveIts--;
  }
}
