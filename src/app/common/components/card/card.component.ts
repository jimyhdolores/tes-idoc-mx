import { Component, Input } from '@angular/core';
import { TypeDirectionCard } from './../../models/types';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	@Input() direction: TypeDirectionCard = 'column';
}
