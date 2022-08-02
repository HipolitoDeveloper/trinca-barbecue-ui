import { useSession } from '@hooks/session/useSession';
import React from 'react';
import {Navigate, Outlet, Route } from 'react-router-dom';

interface Props {

}

const AuthorizedRoutes: React.FC<Props> = () => {
	const { session } = useSession();
	const loggedUser = session.authorized;

	 return loggedUser ? <Outlet /> : <Navigate to="/" />;
};

export default AuthorizedRoutes;
