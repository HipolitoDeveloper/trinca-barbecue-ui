import { ISession, IUser } from '@interfaces/Session';
import React, { createContext, useContext, useReducer } from 'react';

import { ISignIn, SessionTypes } from './session.action';
import { SessionReducer } from './session.reducer';

interface ISessionContext {
	session: ISession;

	signIn(user: IUser): void;

	signOut(): void;
}

export interface SessionState {
	session: ISession;
}

const initialState: SessionState = {
	session: {
		user: {
			email: '',
			password: '',
		},
		authorized: false,
	},
};

const SessionContext = createContext({} as ISessionContext);

const SessionProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
	const [state, dispatch] = useReducer(SessionReducer, initialState);

	const signIn = (user: IUser) => {
		const session = {
			user: user,
		};

		dispatch({ type: SessionTypes.signIn, payload: session } as ISignIn);
	};

	const signOut = () => {};

	const contextValues: ISessionContext = {
		...state,
		signIn,
		signOut,
	};

	return <SessionContext.Provider value={contextValues}>{children}</SessionContext.Provider>;
};

export { SessionContext, SessionProvider };
