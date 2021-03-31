import { Component, Input } from '@angular/core';
import { IUser } from '../../models/services.interface';

@Component({
	selector: 'app-card-user',
	templateUrl: './card-user.component.html',
	styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent {
	@Input() user: IUser;
}
