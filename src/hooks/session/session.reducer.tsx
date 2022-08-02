import { SessionActions, SessionTypes } from './session.action';
import { SessionState } from './session.provider';

export const SessionReducer = (state: SessionState, action: SessionActions) => {
	const reducerFunctions = {
		[SessionTypes.signIn]: () => {
			return {
				...state,
				session: {
					...action.payload,
					authorized: true
				},
			};
		},
	};

	return reducerFunctions[action.type]();
};
