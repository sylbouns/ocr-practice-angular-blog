import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  template: `
    <h1>Page not found</h1>
    <a (click)="onGoBack()" style="cursor:pointer;"><i class="fas fa-long-arrow-alt-left"></i> Back</a>
  `,
})
export class NotFoundComponent {

  constructor(private location: Location) { }

  onGoBack() {
    this.location.back();
  }
}
