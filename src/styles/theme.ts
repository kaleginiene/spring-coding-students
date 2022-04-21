export type Colors = keyof typeof colors;

const colors = {
	primary: '#101326',
	secondary: '#29C0CD',
	accent: '#E34578',
	white: '#ffffff',
};

export const theme = {
	colors,
	fontSizes: {
		fs16: '1rem',
	},
	fontWeights: {
		fw700: 700,
	},
};

export type Theme = typeof theme;
