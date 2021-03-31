import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/internal/operators';
import { PathProject } from './../common/statics/path-project';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
	constructor(private router: Router) {}

	private _subscriptionRouter: Subscription;

	showInput = false;
	title = '';
	textHint = '';

	ngOnInit(): void {
		this.determinateComponents(this.router.url);
		this.detectedRouter();
	}

	private detectedRouter(): void {
		this._subscriptionRouter = this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe((event) => {
				const navigation = event as NavigationEnd;
				this.determinateComponents(navigation.url);
			});
	}

	private determinateComponents(path: string) {
		this.showInput =
			path !== PathProject.DASHBOARD &&
			path !== PathProject.DASHBOARD_USERS &&
			!path.startsWith(PathProject.DASHBOARD_COMMENTS);
		this.changeTexts(path);
	}

	private changeTexts(path: string): void {
		switch (path) {
			case PathProject.DASHBOARD_USERS:
				this.title = 'Users';
				this.textHint = '';
				break;
			case PathProject.DASHBOARD_ALBUMS:
				this.title = 'Albums';
				this.textHint = 'Enter the user id to search for an album';
				break;
			case PathProject.DASHBOARD_POSTS:
				this.title = 'Posts';
				this.textHint = 'Enter the user id to search for an post';
				break;
			default:
				this.title = 'Comments';
				break;
		}
	}

	ngOnDestroy(): void {
		this._subscriptionRouter.unsubscribe();
	}
}
