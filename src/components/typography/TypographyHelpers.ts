import { css } from 'styled-components/macro';

import { Theme } from 'styles/theme';
import { tablet } from 'styles/breakpoints';

import { TextType } from './Typography';

export const applyTextType = (type: TextType, theme: Theme) => {
	switch (type) {
		case 'h1':
			return css`
				font-weight: ${theme.typography.h1.fontWeight};
				font-size: ${theme.typography.h1.fontSize}rem;
				line-height: ${theme.typography.h1.lineHeight}rem;
				color: ${theme.typography.h1.color};

				@media ${tablet} {
					font-size: ${theme.typography.h1.fontSizeMob}rem;
					line-height: ${theme.typography.h1.lineHeightMob}rem;
				}
			`;

		case 'h2':
			return css`
				font-weight: ${theme.typography.h2.fontWeight};
				font-size: ${theme.typography.h2.fontSize}rem;
				line-height: ${theme.typography.h2.lineHeight}rem;
				color: ${theme.typography.h2.color};

				@media ${tablet} {
					font-size: ${theme.typography.h2.fontSizeMob}rem;
					line-height: ${theme.typography.h2.lineHeightMob}rem;
				}
			`;
		case 'h3':
			return css`
				font-weight: ${theme.typography.h3.fontWeight};
				font-size: ${theme.typography.h3.fontSize}rem;
				line-height: ${theme.typography.h3.lineHeight}rem;
				color: ${theme.typography.h3.color};

				@media ${tablet} {
					font-size: ${theme.typography.h3.fontSizeMob}rem;
					line-height: ${theme.typography.h3.lineHeightMob}rem;
				}
			`;
		case 'body16':
			return css`
				font-weight: ${theme.typography.body16.fontWeight};
				font-size: ${theme.typography.body16.fontSize}rem;
				line-height: ${theme.typography.body16.lineHeight}rem;
				color: ${theme.typography.body16.color};
			`;
		case 'caption12':
			return css`
				font-weight: ${theme.typography.caption12.fontWeight};
				font-size: ${theme.typography.caption12.fontSize}rem;
				line-height: ${theme.typography.caption12.lineHeight}rem;
				color: ${theme.typography.caption12.color};
			`;
		default:
			return null;
	}
};
