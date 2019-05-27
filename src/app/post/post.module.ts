import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostRoutingModule } from './post.routes';
import { PostOutletComponent } from './post.outlet';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostActionsComponent } from './post-actions/post-actions.component';
import { PostService } from './post.service';
import { AbsPipe } from '../core/abs.pipe';

@NgModule({
  declarations: [
    PostOutletComponent,
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
    PostRoutingModule,
  ],
  providers: [
    PostService,
  ],
})
export class PostModule { }
