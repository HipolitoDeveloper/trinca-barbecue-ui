import { SessionContext } from '@hooks/session/session.provider';
import { useContext } from 'react';

export const useSession = () => {
	const context = useContext(SessionContext);

	return context;
};
