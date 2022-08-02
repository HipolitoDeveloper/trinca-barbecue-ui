import * as yup from 'yup';

export const barbecueSchema = yup.object().shape({
	date: yup.string().required('A data do evento é obrigatória!'),
	title: yup.string().required('O título do evento é obrigatório!'),
	description: yup.string(),
	currentGuest: yup.object().shape({
		name: yup.string(),
		amount: yup.number(),
	}),
	guests: yup.array(
		yup.object().shape({
			name: yup.string(),
			amount: yup.number(),
		})
	),
});
