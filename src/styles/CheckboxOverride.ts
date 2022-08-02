export const CheckboxOverride = {
	baseStyle: {
		control: {
			w: 40,
			h: 40,

			borderRadius: 40,
			borderColor: 'darkYellow',
			outline: 'none',
			boxShadow: 'none',
			_checked: {
				backgroundColor: 'yellow',
				borderColor: 'yellow',
				color: 'darkGray',

				_hover: {
					backgroundColor: 'yellow',
					borderColor: 'yellow',
				},

				_disabled: {
					borderColor: 'yellow',
					backgroundColor: 'yellow',
					color: 'yellow',
				},
			},

			_indeterminate: {
				backgroundColor: 'darkGray',
				borderColor: 'darkGray',
				color: 'darkGray',
			},

			_disabled: {
				backgroundColor: 'darkGray',
				borderColor: 'darkGray',
			},

			_focus: {
				boxShadow: 'none',
				outline: 'none',
			},

			_invalid: {
				borderColor: 'red',
			},
		},
		label: {
			userSelect: 'none',
			_disabled: { opacity: 0.4 },
		},

		icon: {
			transitionProperty: 'transform',
			transitionDuration: 'normal',
			color: 'yellow',
			fontSize: '10px',
		},
	},
};
