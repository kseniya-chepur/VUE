import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/components/user/user.component';
import { RouterModule } from '@angular/router';
import { AllUsersComponent } from './user/components/all-users/all-users.component';
import { AllPostsComponent } from './user/components/all-posts/all-posts.component';
import { CommentsComponent } from './user/components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    AllPostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot( [
      {path: 'users', component: AllUsersComponent},
      {path: 'posts', component: AllPostsComponent},
      {path: 'comments', component: CommentsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
