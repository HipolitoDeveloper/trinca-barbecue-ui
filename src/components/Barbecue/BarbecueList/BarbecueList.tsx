import { Center, Checkbox, HStack, IconButton, Text } from '@chakra-ui/react';
import { RowStyle } from '@components/Barbecue/BarbecueList/BarbecueList.styles';
import React from 'react';
import * as I from 'react-icons/all';

interface Props {
	showCheckItem?: boolean;
	data: any;

	onDelete(index: number, rowId?: number): void;

	handleCheck?: any;
}

const BarbecueList: React.FC<Props> = ({ data, onDelete, showCheckItem, handleCheck }) => {
	return (
		<>
			{data.map((row: any, index: number) => (
				<HStack
					key={row.id}
					__css={RowStyle}
					textDecoration={row.confirmed && 'line-through'}
				>
					{showCheckItem && (
						<Checkbox
							colorScheme="yellow"
							onChange={(event) =>
								handleCheck && handleCheck(event.target.checked, row.id)
							}
						>
							Radio
						</Checkbox>
					)}
					<HStack spacing="50px">
						<Text fontSize="14px">{row.name}</Text>
						<Text fontSize="14px">R$ {row.amount}</Text>
					</HStack>
					<IconButton
						variant="unstyled"
						aria-label="row-delete-button"
						bg="redPastel"
						onClick={() => onDelete(index, row.id)}
					>
						<Center>
							<I.IoTrash />
						</Center>
					</IconButton>
				</HStack>
			))}
		</>
	);
};

export default BarbecueList;
