import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import { torshTheme } from '../../stylesheet.js';

const Button = (props: any) => {
	return (
		<ThemeProvider theme={torshTheme}>
			<MuiButton sx={{borderRadius: props.rounded ? 25 : null}} {...props}>
				{props.text}
			</MuiButton>
		</ThemeProvider>
	);
}

Button.propTypes = {
	variant: PropTypes.string,
	label: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
	onClick: PropTypes.func,
	rounded: PropTypes.bool,
};

Button.defaultProps = {
	label: 'Torsh Button',
	text: "Submit",
	color: "primary",
	onClick: () => console.log('Clicked!'),
	rounded: false,
};

export default Button
