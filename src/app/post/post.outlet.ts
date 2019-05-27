import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  template: `<router-outlet></router-outlet>`,
  styles: [':host { width: 100%; }'],
})
export class PostOutletComponent { }
