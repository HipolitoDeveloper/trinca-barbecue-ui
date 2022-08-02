export const InputOverride = {
	baseStyle: {
		field: {
			textDecoration: 'none',
			width: '100%',
			paddingRight: 65,
			paddingLeft: 15,
			height: 50,
			_focus: {
				border: 'none',
				outline: 'none',
			},
		},
	},
	variants: {
		filled: {
			field: {
				bg: 'white',
				borderRadius: 5,
				w: '50px',
				_focus: {
					border: 'none',
					outline: 'none',
					bg: 'white',
				},
				_hover: {
					bg: 'white',
				},
			},
		},
		outline: {
			bg: 'white',
			borderRadius: 5,
			borderWidth: 1,
			height: '25px',
			margin: '10px 0',
			w: '280px',
		},
		default: {
			field: {
				border: 'none',
				boxShadow: '1px 0px 15px 4px rgba(0,0,0,0.21)',
				_focus: {
					outline: 'none',
				},
			},
		},
	},
	defaultProps: {
		variant: 'default',
	},
};
