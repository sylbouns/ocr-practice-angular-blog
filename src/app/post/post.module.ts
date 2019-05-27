import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostActionsComponent } from './post-actions/post-actions.component';
import { PostService } from './post.service';
import { AbsPipe } from '../core/abs.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PostListComponent },
  { path: 'new', component: PostFormComponent },
  { path: ':id', component: PostPageComponent },
  { path: ':id/edit', component: PostFormComponent },
];

@NgModule({
  declarations: [
    PostItemComponent,
    PostListComponent,
    PostFormComponent,
    PostPageComponent,
    PostActionsComponent,
    AbsPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PostService,
  ],
})
export class PostModule { }
