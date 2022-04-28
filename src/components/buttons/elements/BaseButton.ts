import styled from 'styled-components/macro';
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system';
import { Theme } from 'styles/theme';

const defaultButtonProps = compose(layout, space);

export interface DefaultButtonProps
	extends SpaceProps<Theme>,
		LayoutProps<Theme> {
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
}

export type ButtonStyles = Pick<
	DefaultButtonProps,
	'margin' | 'width' | 'padding'
>;

export const BaseButton = styled.button<ButtonStyles>`
	display: block;
	padding: '0.5rem 1rem';
	width: 100%;
	font-weight: ${({ theme }) => theme.fontWeights.fw700};

	&& {
		${defaultButtonProps}
	}
`;
