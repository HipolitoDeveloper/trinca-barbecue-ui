import { Grid, GridItem } from '@chakra-ui/react';
import BarbecueAddButton from '@components/Barbecue/BarbecueAddButton/BarbecueAddButton';
import BarbecueCard from '@components/Barbecue/BarbecueCard/BarbecueCard';
import BarbecueModal, {
	BarbecueModalRefProps,
} from '@components/Barbecue/BarbecueFormModal/BarbecueFormModal';
import Layout from '@components/Layout/Layout';
import { useGenericQuery } from '@hooks/react_query/useGenericQuery';
import { IBarbecue } from '@interfaces/Barbecue';
import React, { createRef } from 'react';
import { useNavigate } from 'react-router';

import { getBarbecues } from '../barbecue.service';

const BarbecuesPage: React.FC = () => {
	const navigate = useNavigate();
	const modalRef = createRef<BarbecueModalRefProps>();

	const { data = [], isFetching } = useGenericQuery(['barbecues'], () => getBarbecues(), {
		retry: false,
	});

	const renderBarbecues = data?.map((barbecue: IBarbecue) => (
		<GridItem key={barbecue.id}>
			<BarbecueCard
				{...barbecue}
				onPress={
					barbecue.pressionable ? () => navigate(`/barbecue/${barbecue.id}`) : () => {}
				}
			/>
		</GridItem>
	));

	return (
		<Layout direction="row" justify="center">
			<BarbecueModal ref={modalRef} />

			<Grid templateColumns="repeat(3, 1fr)" w="60%" mt={-8} gap={5}>
				<GridItem>
					<BarbecueAddButton
						onClick={() => modalRef.current?.onOpen()}
						title={'Adicionar churrasco'}
					/>
				</GridItem>
				{renderBarbecues}
			</Grid>
		</Layout>
	);
};

export default BarbecuesPage;
