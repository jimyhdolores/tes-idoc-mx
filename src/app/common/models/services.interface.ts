export interface IUser {
	id: number;
	name: string;
	username: string;
	phone: string;
}

export interface IAlbum {
	userId: number;
	title: string;
}

export interface IPost {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export interface IComment {
	postId: number;
	name: string;
	email: string;
	body: string;
}
