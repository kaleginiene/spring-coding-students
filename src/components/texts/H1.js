import styled from 'styled-components/macro';

import { TextBase } from './TextBase';

export const H1 = styled(TextBase).attrs({ as: 'h1' })`
	font-size: 3rem;
`;
