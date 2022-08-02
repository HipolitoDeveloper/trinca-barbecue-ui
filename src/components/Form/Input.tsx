import { InputGroup, InputProps } from '@chakra-ui/input';
import {
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input as ChakraInput,
} from '@chakra-ui/react';
import React, { ForwardedRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends InputProps {
	ref?: ForwardedRef<HTMLInputElement>;
	register?: UseFormRegisterReturn;
	label?: string;
	error?: any;
	leftAdornment?: React.ReactNode;
	rightAdornment?: React.ReactNode;
}

const Input: React.FC<Props> = ({
	label,
	error,
	register,
	variant,
	placeholder,
	type,
	onChange,
	value,
	rightAdornment,
	leftAdornment,
	w,
	border,
	...props
}) => {
	return (
		<FormControl isInvalid={!!error}>
			<Flex direction="column" w={w ?? '100%'}>
				{label && (
					<FormLabel fontSize="sm" htmlFor={register?.name}>
						{label}
					</FormLabel>
				)}
				<InputGroup border={error ? '1px solid red' : `${border ?? '3px solid #F8F9FB'}`}>
					{leftAdornment && leftAdornment}

					<ChakraInput
						w="100%"
						type={type ?? 'text'}
						variant={variant}
						placeholder={placeholder}
						onChange={onChange}
						value={value}
						{...props}
						{...register}
					/>

					{rightAdornment && rightAdornment}
					<FormErrorMessage>{error && error?.message}</FormErrorMessage>
				</InputGroup>
			</Flex>
		</FormControl>
	);
};

export default Input;
