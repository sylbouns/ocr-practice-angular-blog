import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';


const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    NotFoundComponent,
    AccessDeniedComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class PagesModule { }
