import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import { teal, lightBlue, lightGreen, orange, red, blueGrey, indigo } from './palette';

const desktopFonts = {
	root: {
		fontSize: '1rem',
		fontWeight: 500,
	},
	h1: {
		fontSize: '2.3rem',
		fontWeight: 500,
	},
	h2: {
		fontSize: '1.575rem',
		fontWeight: 500,
	},
	h3: {
		fontSize: '1.3125rem',
		fontWeight: 500,
	},
	h4: {
		fontSize: '1.1375rem',
		fontWeight: 500,
	},
	h5: {
		fontSize: '0.975rem',
		fontWeight: 500,
	},
	h6: {
		fontSize: '0.8125rem',
		fontWeight: 500,
	},
	subtitle1: {
		fontSize: '1rem',
		fontWeight: 500,
	},
	subtitle2: {
		fontSize: '0.875rem',
		fontWeight: 500,
	},
	body1: {
		fontSize: '0.875rem',
		fontWeight: 400,
	},
	body2: {
		fontSize: '0.75rem',
		fontWeight: 500,
	},
	button: {
		fontSize: '0.875rem',
		fontWeight: 500,
	},
	caption: {
		fontSize: '0.75rem',
		fontWeight: 400,
	},
	overline: {
		fontSize: '0.75rem',
		fontWeight: 400,
	},
	iconsmall: {
		fontSize: '1rem',
	},
	iconlarge: {
		fontSize: '2.25rem',
	},
	input: {
		fontSize: '0.75rem',
		fontWeight: 400,
	},
};

const mobileFonts = {
	root: {
		fontSize: '0.875rem',
		fontWeight: 500,
	},
	h1: {
		fontSize: '1.5rem',
		fontWeight: 500,
	},
	h2: {
		fontSize: '1.2rem',
		fontWeight: 500,
	},
	h3: {
		fontSize: '1rem',
		fontWeight: 500,
	},
	h4: {
		fontSize: '0.875rem',
		fontWeight: 500,
	},
	h5: {
		fontSize: '0.8125rem',
		fontWeight: 500,
	},
	h6: {
		fontSize: '0.8125rem',
		fontWeight: 500,
	},
	subtitle1: {
		fontSize: '1rem',
		fontWeight: 500,
	},
	subtitle2: {
		fontSize: '1.25rem',
		fontWeight: 500,
	},
	body1: {
		fontSize: '0.75rem',
		fontWeight: 400,
	},
	body2: {
		fontSize: '0.75rem',
		fontWeight: 500,
	},
	button: {
		fontSize: '0.8125rem',
		fontWeight: 500,
	},
	caption: {
		fontSize: '0.75rem',
		fontWeight: 400,
	},
	overline: {
		fontSize: '0.75rem',
		fontWeight: 400,
	},
	iconsmall: {
		fontSize: '0.875rem',
	},
	iconlarge: {
		fontSize: '2.25rem',
	},
	input: {
		fontSize: '0.75rem',
		fontWeight: 400,
	},
};

const defaultPrimaryColor = blueGrey;
const defaultSecondaryColor = lightBlue;

// APP Breakpoints
const breakpoints = createBreakpoints({
	values: {
		xs: 0,
		sm: 600,
		md: 960,
		lg: 1280,
		xl: 1920,
	},
});

export const MainTheme = createTheme({
	breakpoints: breakpoints,
	palette: {

		primary: defaultPrimaryColor,
		secondary: {
			...defaultSecondaryColor,
			main: defaultSecondaryColor[600],
		},
		error: red,
		success: lightGreen,
		info: indigo,
		warning: orange,
		grey: teal,
		text: {
			primary: blueGrey[800],
			secondary: lightBlue[600],
			disabled: blueGrey[500],
		},
    background: {
			default: defaultPrimaryColor[50],
		},
	},
	typography: {
		fontFamily: ['Rubik', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'].join(','),
		h1: {
			...mobileFonts.h1,
			[breakpoints.up('md')]: {
				...desktopFonts.h1,
			},
		},
		h2: {
			...mobileFonts.h2,
			[breakpoints.up('md')]: {
				...desktopFonts.h2,
			},
		},
		h3: {
			...mobileFonts.h3,
			[breakpoints.up('md')]: {
				...desktopFonts.h3,
			},
		},
		h4: {
			...mobileFonts.h4,
			[breakpoints.up('md')]: {
				...desktopFonts.h4,
			},
		},
		h5: {
			...mobileFonts.h5,
			[breakpoints.up('md')]: {
				...desktopFonts.h5,
			},
		},
		h6: {
			...mobileFonts.h6,
			[breakpoints.up('md')]: {
				...desktopFonts.h6,
			},
		},
		subtitle1: {
			...mobileFonts.subtitle1,
			[breakpoints.up('md')]: {
				...desktopFonts.subtitle1,
			},
		},
		subtitle2: {
			...mobileFonts.subtitle2,
			[breakpoints.up('md')]: {
				...desktopFonts.subtitle2,
			},
		},
		body1: {
			...mobileFonts.body1,
			[breakpoints.up('md')]: {
				...desktopFonts.body1,
			},
		},
		body2: {
			...mobileFonts.body2,
			[breakpoints.up('md')]: {
				...desktopFonts.body2,
			},
		},
		button: {
			textTransform: 'none',
			...mobileFonts.button,
			[breakpoints.up('md')]: {
				...desktopFonts.button,
			},
		},
		overline: {
			...mobileFonts.overline,
			[breakpoints.up('md')]: {
				...desktopFonts.overline,
			},
		},
		caption: {
			...mobileFonts.caption,
			[breakpoints.up('md')]: {
				...desktopFonts.caption,
			},
		},
	},
	overrides: {
		// Fix FontAwesome Icon clipping
		MuiIcon: {
			root: {
				overflow: 'visible',
			},
		},
	},
});
