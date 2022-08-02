import { Box, Flex, FlexProps } from '@chakra-ui/react';
import Header from '@components/Layout/Header/Header';
import React from 'react';

interface Props extends FlexProps {
	children: React.ReactNode;
	showBackButton?: boolean;
}

const Layout: React.FC<Props> = ({
	showBackButton = false,
	children,
	bg,
	direction,
	align,
	justify,
	flex,
}) => {
	return (
		<Box h="100%">
			<Flex
				h="100%"
				w="100%"
				bg={'white'}
				align={'flex-start'}
				justify={'flex-start'}
				direction={'column'}
			>
				<Header showBackButton={showBackButton} />

				<Flex
					w="100%"
					h="100%"
					bg={bg ?? 'white'}
					align={align ?? 'flex-start'}
					justify={justify ?? 'flex-start'}
					direction={direction ?? 'column'}
				>
					{children}
				</Flex>
			</Flex>
		</Box>
	);
};

export default Layout;
