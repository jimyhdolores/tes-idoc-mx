import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPost } from './../../common/models/services.interface';
import { DataService } from './../../common/service/data.service';
import { PlaceHolderService } from './../../common/service/placeholder.service';
import { filterList } from './../../common/statics/util';

@Component({
	selector: 'app-posts-page',
	templateUrl: './posts-page.component.html',
	styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit, OnDestroy {
	constructor(private placeHolderService: PlaceHolderService, private dataService: DataService) {}

	private postSubscription: Subscription;
	private dataServiceSubscription: Subscription;

	listPosts: IPost[] = [];
	private listBackup: IPost[] = [];

	ngOnInit(): void {
		this.postSubscription = this.placeHolderService.getPosts().subscribe((data) => {
			this.listPosts = data;
			this.listBackup = data;
		});

		this.dataServiceSubscription = this.dataService.currentValueName.subscribe((id) => {
			this.listPosts = filterList(id, this.listPosts, this.listBackup, 'userId');
		});
	}

	ngOnDestroy(): void {
		this.postSubscription.unsubscribe();
		this.dataServiceSubscription.unsubscribe();
	}
}
