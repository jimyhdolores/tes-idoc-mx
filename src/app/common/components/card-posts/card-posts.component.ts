import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IPost } from './../../models/services.interface';
import { PathProject } from './../../statics/path-project';

@Component({
	selector: 'app-card-posts',
	templateUrl: './card-posts.component.html',
	styleUrls: ['./card-posts.component.scss']
})
export class CardPostsComponent {
	@Input() post: IPost;

	constructor(private route: Router) {}
	showComments(): void {
		const navigationExtras: NavigationExtras = {
			queryParams: {
				id: this.post.id,
				title: this.post.title
			}
		};
		void this.route.navigate([PathProject.DASHBOARD_COMMENTS], navigationExtras);
	}
}
