export type Colors = keyof typeof colors;

const colors = {
	primary: '#101326',
	secondary: '#29C0CD',
	accent: '#E34578',
	white: '#ffffff',
};

export const theme = {
	colors,
	fontFamily: { primary: 'Red Hat Display' },
	fontSizes: {
		fs16: '1rem',
	},
	fontWeights: {
		fw700: 700,
	},
	lineHeight: {
		lh: '1rem',
	},
	breakpoints: ['24rem', '47rem', '90rem'] as unknown as Breakpoints,
	space: {
		s16: 2,
	},
	typography: {
		h1: {
			fonstSize: '5rem',
			linHeight: '6.5',
			fontSizeMobile: '4rem',
			lineHeight: '5.5rem',
			fontWeight: 700,
		},
	},
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
	_: T;
	lmobile: T;
	ltablet: T;
	desktop: T;
};
