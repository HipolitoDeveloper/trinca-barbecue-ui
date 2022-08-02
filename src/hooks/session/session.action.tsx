import { ISession } from '@interfaces/Session';

export enum SessionTypes {
	signIn = 'SIGN_IN',
	signOut = 'SIGN_OUT',
}

export interface ISignIn {
	type: SessionTypes.signIn;
	payload: ISession;
}

export type SessionActions = ISignIn;
