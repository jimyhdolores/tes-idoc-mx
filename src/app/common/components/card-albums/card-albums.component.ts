import { Component, Input } from '@angular/core';
import { IAlbum } from './../../models/services.interface';

@Component({
	selector: 'app-card-albums',
	templateUrl: './card-albums.component.html',
	styleUrls: ['./card-albums.component.scss']
})
export class CardAlbumsComponent {
	@Input() album: IAlbum;
}
