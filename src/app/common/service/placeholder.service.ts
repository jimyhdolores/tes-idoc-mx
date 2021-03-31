import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum, IComment, IPost, IUser } from '../models/services.interface';
import { EndPoint } from './../statics/endpoint';

@Injectable({ providedIn: 'root' })
export class PlaceHolderService {
	constructor(private httpClient: HttpClient) {}

	getUsers(): Observable<IUser[]> {
		return this.httpClient.get<IUser[]>(EndPoint.GET_USERS);
	}

	getPosts(): Observable<IPost[]> {
		return this.httpClient.get<IPost[]>(EndPoint.GET_POSTS);
	}

	getAlbums(): Observable<IAlbum[]> {
		return this.httpClient.get<IAlbum[]>(EndPoint.GET_ALBUMS);
	}

	getPostsByUser(idUser: number): Observable<IPost> {
		return this.httpClient.get<IPost>(EndPoint.getPathPostsByUser(idUser));
	}

	getCommentsByPost(idPost: number): Observable<IComment[]> {
		return this.httpClient.get<IComment[]>(EndPoint.getPathCommentsByPosts(idPost));
	}
}
