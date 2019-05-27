import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <h1>Access denied</h1>
    <a routerLink="/post/list"><i class="fas fa-long-arrow-alt-left"></i> Back to post list</a>
  `,
})
export class AccessDeniedComponent { }
