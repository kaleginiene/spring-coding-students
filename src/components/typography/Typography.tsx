import { Property } from 'csstype';
import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import {
	border,
	BorderProps,
	compose,
	DisplayProps,
	fontWeight,
	lineHeight,
	space,
	SpaceProps,
	textAlign,
	TypographyProps as TextProps,
	textStyle,
	typography,
} from 'styled-system';

import { Colors, Theme } from 'styles/theme';

import { applyTextType } from './TypographyHelpers';

export type TextType = 'h1' | 'h2' | 'h3' | 'body16' | 'caption12' | 'span';

export enum TextTypeComponentMap {
	'h1' = 'h1',
	'h2' = 'h2',
	'h3' = 'h3',
	'span' = 'span',
	'body16' = 'p',
	'caption12' = 'p',
}

type AsPropType = string | React.ComponentType;

const typographyProperties = compose(
	textAlign,
	fontWeight,
	lineHeight,
	textStyle,
	typography,
	space,
	border
);

export interface TypographyProps
	extends DisplayProps<Theme>,
		SpaceProps<Theme>,
		BorderProps<Theme>,
		TextProps<Theme> {
	color?: Colors;
	type?: TextType;
	textTransform?: Property.TextTransform;
	textDecoration?: Property.TextDecoration;
	onClick?: () => void;
	children: ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
	type = 'body16',
	children,
	...props
}) => {
	const as = TextTypeComponentMap[type] as AsPropType;

	return (
		<Text type={type} as={as} {...props}>
			{children}
		</Text>
	);
};

const Text = styled.p<TypographyProps>`
	padding: 0;
	box-sizing: border-box;
	${({ type, theme }) =>
		type && applyTextType(type as TextType, theme as Theme)};
	color: ${({ theme, color }) =>
		color ? theme.colors[color] : theme.colors.white};

	&& {
		${typographyProperties}
	}
	text-transform: ${({ textTransform }) => textTransform || ''};
	text-decoration: ${({ textDecoration }) => textDecoration || ''};
`;
