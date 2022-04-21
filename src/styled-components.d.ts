import { Theme } from './styles/theme';

type CustomTheme = typeof theme;

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
declare module 'styled-components/macro' {
	export interface DefaultTheme extends Theme {}
}
