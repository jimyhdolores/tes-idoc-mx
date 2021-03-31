import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from './../../common/models/services.interface';
import { PlaceHolderService } from './../../common/service/placeholder.service';

@Component({
	selector: 'app-users-page',
	templateUrl: './users-page.component.html',
	styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, OnDestroy {
	constructor(private placeHolderService: PlaceHolderService) {}

	userSubscription: Subscription;
	listUser: IUser[] = [];

	ngOnInit(): void {
		this.userSubscription = this.placeHolderService.getUsers().subscribe((data) => {
			this.listUser = data;
		});
	}

	ngOnDestroy(): void {
		this.userSubscription.unsubscribe();
	}
}
