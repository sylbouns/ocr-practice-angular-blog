import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Guid } from 'guid-typescript';

@Injectable()
export class PostResolverService implements Resolve<Post> {

  constructor(private postService: PostService,
               private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Observable<never> {
    let id = route.paramMap.get('id');
    return new Observable(); // this.postService.getPost(id);

    // return this.postService.getPost(id).pipe(
    //   take(1),
    //   mergeMap(crisis => {
    //     if (crisis) {
    //       return of(crisis);
    //     } else { // id not found
    //       this.router.navigate(['/crisis-center']);
    //       return EMPTY;
    //     }
    //   })
    // );
  }
}