import {
	Box,
	Button,
	Center,
	Flex,
	IconButton,
	Modal as ChakraModal,
	ModalContent,
	ModalOverlay,
	ModalProps,
	Stack,
	useDisclosure,
	UseDisclosureProps,
	useToast,
} from '@chakra-ui/react';
import { forwardRef } from '@chakra-ui/system';
import {
	BarbecueAddButtonStyle,
	GuestsAddButtonStyle,
	GuestsAreaStyle,
} from '@components/Barbecue/BarbecueFormModal/BarbecueFormModal.styles';
import BarbecueList from '@components/Barbecue/BarbecueList/BarbecueList';
import Input from '@components/Form/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useGenericMutation } from '@hooks/react_query/useGenericMutation';
import { barbecueSchema } from '@modules/barbecue/barbecue.schema';
import { addBarbecue } from '@modules/barbecue/barbecue.service';
import React, {
	ForwardRefRenderFunction,
	PropsWithChildren,
	useEffect,
	useImperativeHandle,
} from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as I from 'react-icons/all';

export interface BarbecueModalRefProps {
	onOpen: () => void;
	onClose: () => void;
	isOpen: boolean;
}

interface Props extends Omit<ModalProps, 'isOpen' | 'onClose' | 'children'>, UseDisclosureProps {
	onClose?: () => void;
}

const BarbecueFormModal: ForwardRefRenderFunction<PropsWithChildren<UseDisclosureProps>, Props> = (
	props,
	ref
) => {
	const toast = useToast();

	const { onClose: eventClose, size = 'xl' } = props;
	const { isOpen, onClose, onOpen } = useDisclosure();
	useImperativeHandle(
		ref,
		() => ({
			isOpen,
			onOpen,
			onClose,
		}),
		[isOpen, onClose, onOpen]
	);

	const {
		handleSubmit,
		register,
		getValues,
		reset,
		resetField,
		control,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(barbecueSchema),
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'guests',
	});

	const { mutate: onSubmit }: any = useGenericMutation(
		(data) => addBarbecue(data),
		['barbecues'],
		(oldData, newData) => [...oldData, newData]
	);

	useEffect(() => {
		setValue('currentGuest.amount', 0);
	}, []);

	const addGuests = () => {
		console.log('getValues', fields);
		append(getValues('currentGuest'));
		resetField('currentGuest.name');
	};

	const deleteGuests = (index: number) => {
		remove(index);
	};

	const saveBarbecue = (formData: any) => {
		toast({
			title: 'Churrasco adicionado com sucesso!',
			status: 'success',
			duration: 5000,
			isClosable: true,
		});
		onClose();
		reset();
		onSubmit(formData);
	};

	console.log('errors', errors);
	return (
		<ChakraModal
			isCentered={true}
			size={size}
			closeOnEsc
			closeOnOverlayClick={true}
			isOpen={isOpen}
			onClose={eventClose ?? onClose}
		>
			<ModalOverlay />
			<ModalContent minH={600}>
				<Stack p={5} spacing="20px">
					<Button __css={BarbecueAddButtonStyle} onClick={handleSubmit(saveBarbecue)}>
						Adicionar churrasco
					</Button>

					<Input
						label="Data"
						variant="outline"
						placeholder="Data"
						type="date"
						register={register('date')}
						error={errors.date}
					/>
					<Input
						label="Título"
						variant="outline"
						placeholder="Título"
						register={register('title')}
						error={errors.title}
					/>
					<Input
						label="Descrição"
						variant="outline"
						placeholder="Descrição"
						register={register('description')}
						error={errors.description}
					/>

					<Input
						label="Convidado e contribuição"
						variant="outline"
						placeholder="Nome do Convidado"
						error={errors?.currentGuest?.name}
						register={register('currentGuest.name')}
						rightAdornment={
							<Flex w="40%" borderLeft="1px solid lightgrey">
								<Input
									w="100%"
									border="none"
									type="number"
									register={register('currentGuest.amount')}
									error={errors?.currentGuest?.amount}
									leftAdornment={
										<Center>
											<I.AiFillDollarCircle color="#FFD836" size={30} />
										</Center>
									}
								/>
								<IconButton
									aria-label="guest-add-button"
									__css={GuestsAddButtonStyle}
									onClick={addGuests}
								>
									<Center>
										<I.IoIosAdd size={20} />
									</Center>
								</IconButton>
							</Flex>
						}
					/>

					{fields.length && (
						<Box __css={GuestsAreaStyle} maxHeight="200px" border="1px solid lightgrey">
							<BarbecueList data={fields} onDelete={deleteGuests} />
						</Box>
					)}
				</Stack>
			</ModalContent>
		</ChakraModal>
	);
};

export default forwardRef(BarbecueFormModal);
