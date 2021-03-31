import { Component, Input } from '@angular/core';
import { IComment } from '../../models/services.interface';

@Component({
	selector: 'app-card-comments',
	templateUrl: './card-comments.component.html',
	styleUrls: ['./card-comments.component.scss']
})
export class CardCommentsComponent {
	@Input() comment: IComment;
}
