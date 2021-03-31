import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CardAlbumsComponent } from './card-albums/card-albums.component';
import { CardCommentsComponent } from './card-comments/card-comments.component';
import { CardPostsComponent } from './card-posts/card-posts.component';
import { CardUserComponent } from './card-user/card-user.component';
import { ItemUserComponent } from './card-user/components/item-user/item-user.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
@NgModule({
	declarations: [
		CardComponent,
		CardAlbumsComponent,
		CardCommentsComponent,
		CardPostsComponent,
		CardUserComponent,
		ItemUserComponent,
		MenuComponent,
		SearchComponent
	],
	imports: [
		CommonModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		RouterModule
	],
	exports: [
		MenuComponent,
		MatIconModule,
		MatButtonModule,
		CardUserComponent,
		CardAlbumsComponent,
		CardPostsComponent,
		SearchComponent,
		CardCommentsComponent
	]
})
export class SharedComponentsModule {}
