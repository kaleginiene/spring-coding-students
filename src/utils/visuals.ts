import students from 'assets/images/students.png';
import gatsbyImg from 'assets/images/icon.png';

export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
	students,
	gatsbyImg,
};
