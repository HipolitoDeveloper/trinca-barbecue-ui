export interface IUser {
	email: string;
	password: string;
}

export interface ISession {
	user: IUser;
	authorized: boolean;
}
