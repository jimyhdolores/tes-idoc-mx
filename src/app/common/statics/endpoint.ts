import { environment } from '../../../environments/environment';
export class EndPoint {
	static readonly GET_USERS = environment.host + '/users';
	static readonly GET_POSTS = environment.host + '/posts';
	static readonly GET_ALBUMS = environment.host + '/albums';
	static readonly GET_COMMENTS = environment.host + '/comments';

	private static readonly PATH_USER = environment.host + '/user/';
	private static readonly PATH_POSTS = environment.host + '/posts/';

	static getPathAlbumsByUser(id: number): string {
		return `${this.PATH_USER} ${id} '/albums`;
	}

	static getPathPostsByUser(id: number): string {
		return `${this.PATH_USER} ${id} '/posts`;
	}

	static getPathCommentsByPosts(id: number): string {
		return `${this.PATH_POSTS}${id}/comments`;
	}
}
