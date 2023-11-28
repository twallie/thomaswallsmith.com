export type MainComponents = 'menu' | 'portfolio' | 'technologies' | 'about' | 'contact';

export interface Bulletpoint {
	title: string;
	points: string[];
}

export interface Section {
	title: string;
	description: string;
	bulletpoints: Bulletpoint[];
}
