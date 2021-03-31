import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAlbum } from './../../common/models/services.interface';
import { DataService } from './../../common/service/data.service';
import { PlaceHolderService } from './../../common/service/placeholder.service';
import { filterList } from './../../common/statics/util';

@Component({
	selector: 'app-albums-page',
	templateUrl: './albums-page.component.html',
	styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit, OnDestroy {
	constructor(private placeHolderService: PlaceHolderService, private dataService: DataService) {}

	private albumServiceSubscription: Subscription;
	private dataServiceSubscription: Subscription;

	listAlbums: IAlbum[] = [];
	private listAlbumsBackup: IAlbum[] = [];

	ngOnInit(): void {
		this.albumServiceSubscription = this.placeHolderService.getAlbums().subscribe((data) => {
			this.listAlbums = data;
			this.listAlbumsBackup = data;
		});

		this.dataServiceSubscription = this.dataService.currentValueName.subscribe((id) => {
			this.listAlbums = filterList(id, this.listAlbums, this.listAlbumsBackup, 'userId');
		});
	}

	ngOnDestroy(): void {
		this.albumServiceSubscription.unsubscribe();
		this.dataServiceSubscription.unsubscribe();
	}
}
