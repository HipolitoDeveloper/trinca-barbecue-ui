import { Flex, Heading, Text } from '@chakra-ui/react';
import { WrapperStyle } from '@components/Barbecue/BarbecueCard/BarbecueCard.styles';
import { IBarbecue } from '@interfaces/Barbecue';
import format from 'date-fns/format';
import React from 'react';
interface Props extends IBarbecue {
	onPress(): void;
}

const BarbecueCard: React.FC<Props> = ({ title, date, guests, onPress }) => {
	let barbecueAmount = 0;
	guests.forEach((guest) => {
		barbecueAmount += guest.amount;
	});

	return (
		<Flex __css={WrapperStyle} onClick={onPress}>
			<Flex direction="column" align="flex-start">
				<Text fontWeight="bold" fontSize="23px">
					{format(date, 'dd/MM')}
				</Text>
				<Text fontSize="18px">{title}</Text>
			</Flex>
			<Flex mt="28px" align="flex-start" justify="space-between">
				<Text fontSize="18px">{guests.length}</Text>
				<Text fontSize="18px">R${barbecueAmount.toFixed(2)}</Text>
			</Flex>
		</Flex>
	);
};

export default BarbecueCard;
