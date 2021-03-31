import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { CommentsPageComponent } from './comments-page/comments-page.component';
import { DashboardComponent } from './dashboard.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'users',
				component: UsersPageComponent
			},
			{
				path: 'albums',
				component: AlbumsPageComponent
			},
			{
				path: 'posts',
				component: PostsPageComponent
			},
			{
				path: 'comments',
				component: CommentsPageComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}
