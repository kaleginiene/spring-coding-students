import styled from 'styled-components';

import { mobile } from '../../styles/breakpoints';

export const SectionWrapper = styled.section`
	padding: 3rem 0;
	min-height: ${({ minHeight }) => minHeight || ''};
	background-color: ${({ backgroundColor }) => backgroundColor || ''};

	@media ${mobile} {
		padding: 2rem 0;
	}
`;
