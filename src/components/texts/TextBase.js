import styled from 'styled-components/macro';

import { theme } from '../../styles/theme';

export const TextBase = styled.p`
	margin: ${({ margin }) => margin || ''};
	font-size: ${({ fontSize }) => fontSize || ''};
	font-weight: ${({ fontWeight }) => fontWeight || 400};
	color: ${({ color }) => color || theme.color.white};
	text-align: ${({ textAlign }) => textAlign || ''};
	text-decoration: ${({ textDecoration }) => textDecoration || ''};
	text-transform: ${({ textTransform }) => textTransform || ''};
`;
