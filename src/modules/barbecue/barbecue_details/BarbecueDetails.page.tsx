import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { GuestsAreaStyle } from '@components/Barbecue/BarbecueFormModal/BarbecueFormModal.styles';
import BarbecueList from '@components/Barbecue/BarbecueList/BarbecueList';
import Layout from '@components/Layout/Layout';
import { useGenericQuery } from '@hooks/react_query/useGenericQuery';
import { IGuest } from '@interfaces/Barbecue';
import { getBarbecue } from '@modules/barbecue/barbecue.service';
import format from 'date-fns/format';
import React, { useEffect, useState } from 'react';
import * as I from 'react-icons/all';
import { useParams } from 'react-router';

const BarbecueDetailsPage: React.FC = () => {
	const { id } = useParams();

	const {
		data = {
			date: new Date(),
			title: '',
			guestsQTT: 0,
			barbecueAmount: 0,
			guests: [],
		},
	} = useGenericQuery(['barbecues', id], () => getBarbecue(id), {});

	const [guests, setGuests] = useState<IGuest[]>([]);

	useEffect(() => {
		setGuests(data.guests);
	}, [data]);

	let barbecueAmount = 0;
	guests.forEach((guest: IGuest) => {
		if (guest.confirmed) {
			barbecueAmount += guest.amount;
		}
	});

	const deleteGuest = (index: number, guestId: number) => {
		setGuests(guests.filter((guest: IGuest) => guest.id !== guestId));
	};

	const confirmGuest = (value: boolean, guestId: number) => {
		setGuests(
			guests.map((guest: IGuest) => {
				if (guest.id === guestId) {
					return {
						...guest,
						confirmed: value,
					};
				}

				return {
					...guest,
				};
			})
		);
	};

	return (
		<Layout showBackButton direction="column" justify="flex-start" align="center">
			<Flex mt={-8} w="60%" h="80%" direction="column" justify="flex-start" align="center">
				<Box w="100%" bg="white" borderRadius={5}>
					<Flex p={2} justify="space-between" align="center">
						<Box>
							<Text fontWeight="bold" fontSize="23px">
								{format(data.date, 'dd/MM')}
							</Text>
							<Text fontWeight="bold" fontSize="26px">
								{data.title}
							</Text>
						</Box>
						<Box>
							<HStack>
								<I.BsPeopleFill color="#FFD836" />
								<Text fontSize="16px">{data.guestsQTT}</Text>
							</HStack>
							<HStack>
								<I.AiFillDollarCircle color="#FFD836" />
								<Text fontSize="16px">R${barbecueAmount}</Text>
							</HStack>
						</Box>
					</Flex>
				</Box>
				<VStack w="100%" maxHeight="600px" align="flex" __css={GuestsAreaStyle}>
					<BarbecueList
						showCheckItem
						data={guests}
						onDelete={deleteGuest}
						handleCheck={confirmGuest}
					/>
				</VStack>
			</Flex>
		</Layout>
	);
};

export default BarbecueDetailsPage;
