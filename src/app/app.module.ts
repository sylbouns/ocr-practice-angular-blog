import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { POST_BASE_PATH } from 'src/environments/environment';

const routes: Routes = [
  { path: '', redirectTo: POST_BASE_PATH, pathMatch: 'full' },
  { path: POST_BASE_PATH, loadChildren: './post/post.module#PostModule' },
  { path: '', loadChildren: './pages/pages.module#PagesModule' },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
