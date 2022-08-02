import { Button, ButtonProps, Flex } from '@chakra-ui/react';
import { ButtonStyle } from '@components/Barbecue/BarbecueAddButton/BarbecueAddButton.styles';
import React from 'react';

interface Props extends ButtonProps {
	title: string;
}

const BarbecueAddButton: React.FC<Props> = ({ title, onClick }) => {
	return (
		<Button __css={ButtonStyle} onClick={onClick}>
			<Flex justify="center">{title}</Flex>
		</Button>
	);
};

export default BarbecueAddButton;
