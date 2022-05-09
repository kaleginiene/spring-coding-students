export type Colors = keyof typeof colors;

const colors = {
	primary: '#101326',
	secondary: '#29C0CD',
	accent: '#E34578',
	white: '#ffffff',
	black: '#000000',
};

//breakpoints
type BreakpointsProp<T = string> = {
	_: T;
	lmobile: T;
	ltablet: T;
	desktop: T;
};

const breakpoints: BreakpointsProp = {
	_: '',
	lmobile: '24rem',
	ltablet: '48rem',
	desktop: '90rem',
};

export const theme = {
	colors,
	fonts: {
		primary: 'Red Hat Display',
	},
	fontSizes: {
		fs72: '4.5rem',
		fs64: '4rem',
		fs56: '3.5rem',
		fs48: '3rem',
		fs40: '2.5rem',
		fs32: '2rem',
		fs24: '1.5rem',
		fs20: '1.25rem',
		fs18: '1.125rem',
		fs16: '1rem',
		fs14: '0.875rem',
		fs12: '0.75rem',
	},
	fontWeights: {
		fw400: 400,
		fw500: 500,
		fw600: 600,
		fw700: 700,
		fw900: 900,
	},
	breakpoints,
	borders: {
		borderThin1: '1px solid',
		border2: '2px solid',
	},
	radii: {
		none: '0',
		circle: '50%',
		br8: '8px',
		br16: '16px',
		br40: '40px',
	},
	zIndices: {
		base: 0,
		upperElement: 1,
		modal: 10,
		loader: 11,
	},
	shadows: {
		topShadow: '0px -8px 24px rgba(0, 0, 0, 0.04)',
		bottomShadow: '0px 8px 24px rgba(0, 0, 0, 0.04)',
	},
	typography: {
		h1: {
			fontSize: 5,
			fontWeight: 500,
			lineHeight: 6.5,
			fontSizeMob: 4,
			lineHeightMob: 5.25,
			color: colors.white,
		},
		h2: {
			fontSize: 4.5,
			lineHeight: 5.875,
			fontWeight: 500,
			fontSizeMob: 3.5,
			lineHeightMob: 4.5625,
			color: colors.white,
		},
		h3: {
			fontSize: 3.5,
			lineHeight: 4.5625,
			fontWeight: 600,
			fontSizeMob: 2.5,
			lineHeightMob: 3.25,
			color: colors.white,
		},
		h4: {
			fontSize: 3,
			lineHeight: 3.9375,
			fontWeight: 600,
			fontSizeMob: 2,
			lineHeightMob: 2.625,
			color: colors.white,
		},
		h5: {
			fontSize: 2.5,
			lineHeight: 3.25,
			fontWeight: 600,
			fontSizeMob: 1.625,
			lineHeightMob: 2.125,
			color: colors.white,
		},
		h6: {
			fontSize: 2,
			lineHeight: 2.625,
			fontWeight: 600,
			fontSizeMob: 1.5,
			lineHeightMob: 2,
			color: colors.white,
		},
		h7: {
			fontSize: 1.25,
			lineHeight: 1.5,
			fontWeight: 600,
			fontSizeMob: 1.25,
			lineHeightMob: 1.625,
			color: colors.white,
		},
		body18: {
			fontSize: 1.125,
			lineHeight: 1.625,
			fontWeight: 400,
			color: colors.white,
		},
		body16: {
			fontSize: 1,
			lineHeight: 1.5,
			fontWeight: 400,
			color: colors.white,
		},
		body14: {
			fontSize: 0.875,
			lineHeight: 1.375,
			fontWeight: 400,
			color: colors.white,
		},
		caption12: {
			fontSize: 0.75,
			lineHeight: 1,
			fontWeight: 400,
			color: colors.white,
		},
	},
	space: [] as (string | number)[] | BreakpointsProp<string>,
};

export type Theme = typeof theme;

// const Breakpoints = theme.breakpoints as any;
// Breakpoints.mobile = Breakpoints[0];
// Breakpoints.lmobile = Breakpoints[1];
// Breakpoints.tablet = Breakpoints[2];
// Breakpoints.ltablet = Breakpoints[3];
// Breakpoints.desktop = Breakpoints[4];
// Breakpoints.mDesktop = Breakpoints[5];
// Breakpoints.lDesktop = Breakpoints[6];

// type Breakpoints<T = string> = {
//   _: T;
//   mobile: T;
//   lmobile: T;
//   tablet: T;
//   ltablet: T;
//   desktop: T;
//   mDesktop: T;
//   lDesktop: T;
// };
