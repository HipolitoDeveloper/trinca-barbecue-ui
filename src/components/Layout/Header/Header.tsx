import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { BackButtonStyle } from '@components/Layout/Header/Header.styles';
import React from 'react';
import * as I from 'react-icons/all';
import { useNavigate } from 'react-router';

interface Props {
	showBackButton: boolean;
}

const Header: React.FC<Props> = ({ showBackButton }) => {
	const navigate = useNavigate();

	return (
		<Flex as={'header'} justify="center" bg="yellow" w="100%">
			{showBackButton && (
				<IconButton
					onClick={() => navigate(-1)}
					aria-label="back-button"
					variant="unstyled"
					__css={BackButtonStyle}
				>
					<I.IoArrowBack size={25} />
				</IconButton>
			)}

			<Heading m="70px 0 102px">Agenda de Churras</Heading>
		</Flex>
	);
};

export default Header;
