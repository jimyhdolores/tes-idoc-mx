import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IComment } from 'src/app/common/models/services.interface';
import { PlaceHolderService } from 'src/app/common/service/placeholder.service';
import { PathProject } from './../../common/statics/path-project';

@Component({
	selector: 'app-comments-page',
	templateUrl: './comments-page.component.html',
	styleUrls: ['./comments-page.component.scss'],
	animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('200ms ease-out', style({ opacity: 1 }))
			]),
			transition(':leave', [style({ opacity: 1 }), animate('200ms ease-in', style({ opacity: 0 }))])
		])
	]
})
export class CommentsPageComponent implements OnInit, OnDestroy {
	private subscriptionRouter: Subscription;

	listComment: IComment[] = [];
	titlePost = '';
	constructor(
		private activeRoute: ActivatedRoute,
		private route: Router,
		private placeHolderService: PlaceHolderService
	) {}

	ngOnInit(): void {
		this.subscriptionRouter = this.activeRoute.queryParams.subscribe((params) => {
			this.titlePost = params['title'] as string;
			const idPosts = +params['id'];
			if (idPosts) {
				this.loadComments(idPosts);
			}
		});
	}

	ngOnDestroy(): void {
		this.subscriptionRouter.unsubscribe();
	}

	private loadComments(idPosts: number) {
		this.placeHolderService.getCommentsByPost(idPosts).subscribe((data) => {
			this.listComment = data;
		});
	}

	return(): void {
		void this.route.navigateByUrl(PathProject.DASHBOARD_POSTS);
	}
}
