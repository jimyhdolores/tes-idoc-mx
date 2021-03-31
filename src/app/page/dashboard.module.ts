import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../common/components/shared-components.module';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { CommentsPageComponent } from './comments-page/comments-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
@NgModule({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [
		UsersPageComponent,
		AlbumsPageComponent,
		PostsPageComponent,
		DashboardComponent,
		CommentsPageComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		MatToolbarModule,
		MatSidenavModule,
		SharedComponentsModule,
		RouterModule,
		ScrollingModule
	]
})
export class DashboardModule {}
