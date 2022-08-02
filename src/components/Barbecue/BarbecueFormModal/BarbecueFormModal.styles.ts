const GuestsAreaStyle = {
	p: '5px 5px',
	borderRadius: 5,
	overflowY: 'scroll',
	'&::-webkit-scrollbar': {
		width: '3px',
		height: '10px',
	},
	'&::-webkit-scrollbar-track': {
		width: '3px',
	},
	'&::-webkit-scrollbar-thumb': {
		background: 'yellow',
		borderRadius: '5px',
	},
};

const GuestsAddButtonStyle = {
	bg: 'yellow',
	w: '35%',
	h: '100%',
	border: 'none',
	_hover: {
		transform: 'scale(1.1)',
		bg: 'black',
		color: 'yellow',
	},
	transition: ' all 1s',
};

const BarbecueAddButtonStyle = {
	fontWeight: 'bold',
	height: '55px',
	bg: 'yellow',
	border: 'none',
	_hover: {
		transform: 'scale(1.05)',
		bg: 'black',
		color: 'yellow',
	},
	transition: ' all 1s',
};

export { BarbecueAddButtonStyle, GuestsAddButtonStyle, GuestsAreaStyle };
