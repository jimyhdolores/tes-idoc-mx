import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-item-user',
	templateUrl: './item-user.component.html',
	styleUrls: ['./item-user.component.scss']
})
export class ItemUserComponent {
	@Input() title: string;
	@Input() value: string;
	@Input() iconName: string;
}
