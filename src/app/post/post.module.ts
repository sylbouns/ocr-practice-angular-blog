import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostActionsComponent } from './post-actions/post-actions.component';
import { PostService } from './post.service';
import { PostGuard } from './post.guard';
import { AbsPipe } from '../core/abs.pipe';


const routes: Routes = [
  { path: '', component: PostComponent, canActivateChild: [PostGuard], children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: PostListComponent },
    { path: 'new', component: PostFormComponent },
    { path: ':id', component: PostPageComponent },
    { path: ':id/edit', component: PostFormComponent },
  ]}
];

@NgModule({
  declarations: [
    PostComponent,
    PostItemComponent,
    PostListComponent,
    PostFormComponent,
    PostPageComponent,
    PostActionsComponent,
    AbsPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    PostService,
  ],
})
export class PostModule { }
