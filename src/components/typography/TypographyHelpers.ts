import { css } from 'styled-components/macro';

import { Theme } from 'styles/theme';
import { TextType } from './Typography';

export const applyTextType = (type: TextType, theme: Theme) => {
	switch (type) {
		case 'h1':
			return css`
				font-weight: ${theme.typography.h1.fontWeight};
				font-size: ${theme.typography.h1.fonstSize};
			`;
	}
};
