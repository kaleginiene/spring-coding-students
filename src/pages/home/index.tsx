import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { Box, SectionWrapper } from 'components';
import { useQuery } from 'styles/breakpoints';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components/macro';

type People = 'Viktorija' | 'Vidmis' | 'Martyna' | 'Nojus';

enum Foods {
	GRYBAI = 'grybukai',
	BURGERIUKAI = 'burgeriuksai',
	CEPAI = 'cepelinai',
	SALDUMYNAI = 'sokoladai',
}

interface Foodies {
	id: number;
	name: People;
	food: Foods;
}

interface FoodiesExt extends Foodies {
	hateFood?: string;
}

const FOODS: FoodiesExt[] = [
	{
		id: 1,
		name: 'Viktorija',
		food: Foods.GRYBAI,
	},
	{
		id: 2,
		name: 'Vidmis',
		food: Foods.BURGERIUKAI,
	},
	{
		id: 3,
		name: 'Martyna',
		food: Foods.SALDUMYNAI,
	},
	{
		id: 4,
		name: 'Nojus',
		food: Foods.CEPAI,
	},
];

const Home: React.FC = () => {
	const a = true;
	const [data, setData] = useState(0);

	const b = [10];
	const c = [10];

	console.log(Foods.BURGERIUKAI);

	const arrayjus2: Array<string | number> = ['1', 2];
	const arrayjus: (string | number)[] = ['2', '1', 3, 2];

	const { isMobile } = useQuery();

	return (
		//NOTE: THIS ISNT A GOOD PRACTICE. WE WILL CREATE A FILE, FOR PROVIDERS.
		<ThemeProvider theme={theme}>
			<SectionWrapper>
				<Box
					backgroundColor='primary'
					minHeight={isMobile ? '50%' : '100vh'}
					minWidth='100vw'
				>
					FOOOOOD
				</Box>
			</SectionWrapper>
		</ThemeProvider>
	);
};

export default Home;
